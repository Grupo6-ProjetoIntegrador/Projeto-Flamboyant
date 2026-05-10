/**
 * Comercial Store — Gerenciamento de estado e operações comerciais
 * Cobre: RF-02, RF-03, RF-05, RF-07, RF-08 | RNF-04, RNF-05 | RN-01 ao RN-05
 */
import { propostasAtivas as initialPropostas } from './comercialData';
import type { Proposta, StatusProposta, Multa } from './comercialData';

// ============================================================
// TIPOS
// ============================================================

export interface AuditEntry {
  id: string;
  entityType: 'Proposta' | 'Contrato' | 'Multa';
  entityId: string;
  action: string;
  details: string;
  userId: string;
  userName: string;
  sector: string;
  timestamp: string; // ISO string
}

export interface Documento {
  id: string;
  entityId: string;
  entityType: 'Proposta' | 'Contrato';
  nome: string;
  tamanho: string;
  tipo: 'PDF' | 'DOCX' | 'XLSX' | 'JPG' | 'PNG';
  dataUpload: string;
  uploadedBy: string;
}

export interface ContratoGerado {
  id: string;
  proposalId: string;
  lojistaId?: string;
  lojista: string;
  unidade: string;
  segmento: string;
  area: number;
  valorAluguel: number;
  luvas: number;
  percentualFaturamento: number;
  inicio: string; // dd/mm/yyyy
  fim: string;    // dd/mm/yyyy — RN-03: obrigatório
  status: 'Ativo' | 'Em Renovação' | 'Vencendo' | 'Vencido';
  indiceReajuste: 'IGPM' | 'IPCA';
  tipo: 'Aluguel Fixo' | 'Aluguel + Percentual' | 'Só Percentual';
  desempenho: number;
  diasRestantes: number;
  createdAt: string;
  createdBy: string;
}

export interface ProposalOverride {
  status: StatusProposta;
  observacoes?: string;
  updatedAt: string;
  updatedBy: string;
}

// ============================================================
// ESTADO GLOBAL (module-level mutable state)
// ============================================================

let proposalsState: Proposta[] = [...initialPropostas];
const proposalOverrides: Record<string, ProposalOverride> = {};
let generatedContracts: ContratoGerado[] = [];
let auditLog: AuditEntry[] = [];
let documentos: Documento[] = [];
let listeners: Set<() => void> = new Set();

// ============================================================
// USER SESSION HELPER
// ============================================================

export function getUserSession(): { email: string; name: string; sector: string } {
  try {
    const s = sessionStorage.getItem('jp-mall-session');
    if (s) return JSON.parse(s);
  } catch {}
  return { email: 'gerente@jpmall.com.br', name: 'Gerente JP Mall', sector: 'Comercial' };
}

export function setUserSession(data: { email: string; name: string; sector: string }): void {
  sessionStorage.setItem('jp-mall-session', JSON.stringify(data));
}

function addAudit(entry: Pick<AuditEntry, 'entityType' | 'entityId' | 'action' | 'details'>): void {
  const user = getUserSession();
  auditLog.unshift({
    ...entry,
    id: `AUD-${Date.now()}-${Math.floor(Math.random() * 9999)}`,
    userId: user.email,
    userName: user.name,
    sector: user.sector,
    timestamp: new Date().toISOString(),
  });
}

function notify(): void {
  listeners.forEach(l => l());
}

// ============================================================
// SUBSCRIPTION
// ============================================================

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// ============================================================
// PROPOSTAS (RF-01, RF-02, RN-02)
// ============================================================

export function getProposals(): Proposta[] {
  return proposalsState.map(p => ({
    ...p,
    ...(proposalOverrides[p.id]
      ? { status: proposalOverrides[p.id].status, observacoes: proposalOverrides[p.id].observacoes }
      : {}),
  }));
}

export function getProposalById(id: string): Proposta | undefined {
  const p = proposalsState.find(p => p.id === id);
  if (!p) return undefined;
  return { ...p, ...(proposalOverrides[id] ? { status: proposalOverrides[id].status } : {}) };
}

export function addProposal(p: Omit<Proposta, 'id'>): Proposta {
  // RN-02: Uma proposta deve possuir um status
  const newP: Proposta = { ...p, id: `PROP-${Date.now()}` };
  if (!newP.status) newP.status = 'Pendente';
  proposalsState = [newP, ...proposalsState];
  addAudit({
    entityType: 'Proposta',
    entityId: newP.id,
    action: 'Nova proposta criada',
    details: `Proposta ${newP.id} criada para ${p.lojista} na unidade ${p.unidade}.`,
  });
  notify();
  return newP;
}

export function updateProposalStatus(id: string, newStatus: StatusProposta, obs?: string): boolean {
  const old = getProposalById(id);
  if (!old) return false;
  const user = getUserSession();
  proposalOverrides[id] = {
    status: newStatus,
    observacoes: obs ?? old.observacoes,
    updatedAt: new Date().toISOString(),
    updatedBy: user.name,
  };
  addAudit({
    entityType: 'Proposta',
    entityId: id,
    action: `Status alterado: "${old.status}" → "${newStatus}"`,
    details: obs ?? `Proposta ${id} atualizada para status "${newStatus}".`,
  });
  // RN-01: Gerar contrato APENAS se status = "Aceita"
  if (newStatus === 'Aceita') {
    const alreadyGenerated = generatedContracts.some(c => c.proposalId === id);
    if (!alreadyGenerated) generateContractFromProposal(id);
  }
  notify();
  return true;
}

// ============================================================
// CONTRATOS GERADOS (RF-03, RN-01, RN-03, RN-04, RN-05)
// ============================================================

function generateContractFromProposal(proposalId: string): ContratoGerado | null {
  const proposal = getProposalById(proposalId);
  // RN-01: Somente propostas aceitas geram contrato
  if (!proposal || proposal.status !== 'Aceita') return null;
  // RN-05: Contrato vinculado a lojista (lojista campo é obrigatório)
  if (!proposal.lojista) return null;
  // RN-04: Não pode ter dois contratos ativos na mesma unidade
  const existingActive = generatedContracts.find(
    c => c.unidade === proposal.unidade && c.status === 'Ativo'
  );
  if (existingActive) return null;

  const now = new Date();
  const fimDate = new Date(now);
  fimDate.setFullYear(fimDate.getFullYear() + 3);
  const fmtDate = (d: Date) => d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const diasRestantes = Math.round((fimDate.getTime() - now.getTime()) / 86400000);
  const user = getUserSession();

  // RN-03: Contrato com datas obrigatórias (início e fim)
  const contract: ContratoGerado = {
    id: `CTR-${now.getFullYear()}-GERADO-${Date.now().toString().slice(-5)}`,
    proposalId,
    lojistaId: proposal.lojistaId,
    lojista: proposal.lojista,
    unidade: proposal.unidade,
    segmento: proposal.segmento,
    area: proposal.area,
    valorAluguel: proposal.valorProposto,
    luvas: Math.round(proposal.valorProposto * 3),
    percentualFaturamento: 3.5,
    inicio: fmtDate(now),
    fim: fmtDate(fimDate), // RN-03
    status: 'Ativo',
    indiceReajuste: 'IGPM',
    tipo: 'Aluguel + Percentual',
    desempenho: 80,
    diasRestantes,
    createdAt: now.toISOString(),
    createdBy: user.name,
  };
  generatedContracts.push(contract);
  addAudit({
    entityType: 'Contrato',
    entityId: contract.id,
    action: 'Contrato gerado automaticamente',
    details: `Contrato ${contract.id} gerado a partir da proposta aceita ${proposalId} para ${proposal.lojista} — unidade ${proposal.unidade}. Vencimento: ${contract.fim}.`,
  });
  return contract;
}

export function getGeneratedContracts(): ContratoGerado[] {
  return [...generatedContracts];
}

export function getGeneratedContractByUnit(unidade: string): ContratoGerado | undefined {
  return generatedContracts.find(c => c.unidade === unidade && c.status === 'Ativo');
}

// ============================================================
// DOCUMENTOS (RF-08)
// ============================================================

export function addDocument(doc: Omit<Documento, 'id' | 'dataUpload' | 'uploadedBy'>): Documento {
  const user = getUserSession();
  const d: Documento = {
    ...doc,
    id: `DOC-${Date.now()}`,
    dataUpload: new Date().toLocaleDateString('pt-BR'),
    uploadedBy: user.name,
  };
  documentos.push(d);
  addAudit({
    entityType: doc.entityType,
    entityId: doc.entityId,
    action: 'Documento anexado',
    details: `Arquivo "${doc.nome}" (${doc.tipo}) anexado a ${doc.entityType} ${doc.entityId} por ${user.name}.`,
  });
  notify();
  return d;
}

export function getDocumentsByEntity(entityId: string): Documento[] {
  return documentos.filter(d => d.entityId === entityId);
}

export function removeDocument(docId: string): void {
  const doc = documentos.find(d => d.id === docId);
  if (!doc) return;
  documentos = documentos.filter(d => d.id !== docId);
  addAudit({
    entityType: doc.entityType,
    entityId: doc.entityId,
    action: 'Documento removido',
    details: `Arquivo "${doc.nome}" removido de ${doc.entityType} ${doc.entityId}.`,
  });
  notify();
}

// ============================================================
// AUDIT LOG (RNF-04, RNF-05)
// ============================================================

export function getAuditLog(): AuditEntry[] {
  return [...auditLog];
}

export function getAuditByEntity(entityId: string): AuditEntry[] {
  return auditLog.filter(a => a.entityId === entityId);
}

// ============================================================
// MULTAS POR LOJISTA (mutable — para botão "Adicionar Multa")
// ============================================================

const multasExtras: Record<string, Multa[]> = {}; // lojistaId → Multa[]

export function getMultasExtras(lojistaId: string): Multa[] {
  return multasExtras[lojistaId] ?? [];
}

export function addMultaToLojista(
  lojistaId: string,
  lojistaNome: string,
  multa: Omit<Multa, 'id'>
): Multa {
  if (!multasExtras[lojistaId]) multasExtras[lojistaId] = [];
  const newMulta: Multa = {
    ...multa,
    id: `MUL-NOVO-${Date.now()}`,
  };
  multasExtras[lojistaId].push(newMulta);
  addAudit({
    entityType: 'Multa',
    entityId: lojistaId,
    action: 'Multa registrada',
    details: `Multa "${multa.tipo}" de ${multa.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })} lançada para ${lojistaNome}. Motivo: ${multa.descricao}`,
  });
  notify();
  return newMulta;
}