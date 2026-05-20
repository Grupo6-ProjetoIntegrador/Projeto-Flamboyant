/**
 * comercialStore.ts — Store de estado local (legado de protótipo)
 *
 * CONTEXTO: este arquivo é um resquício da fase inicial do protótipo,
 * quando os dados eram mantidos em memória (arrays JavaScript mutáveis)
 * em vez de virem da API. As telas principais já NÃO usam mais este store
 * — buscam dados da API via useApi + Services.
 *
 * O que ainda está em uso:
 *  getUserSession()     — lido pelo Layout.tsx para exibir nome/e-mail
 *                         do usuário na sidebar
 *  setUserSession()     — chamado pelo AuthContext ao fazer login
 *  getEdicoesByProposal() — chamado pelo useComercialReports para o
 *                           histórico de edições (retorna [] por ora)
 *  PropostaEdicao (tipo) — usado pelo PropostaManutencaoModal para
 *                          tipar o histórico de snapshots
 *
 * O que pode ser removido no futuro:
 *  - propostasAtivas (dados mock)
 *  - funções de CRUD local (criarProposta, atualizarStatusProposta, etc.)
 *  - auditLog (será substituído pelo histórico real da API)
 *
 * Comercial Store — Gerenciamento de estado e operações comerciais
 * Cobre: RF-02, RF-03, RF-05, RF-07, RF-08 | RNF-04, RNF-05 | RN-01 ao RN-05
 */
import { propostasAtivas as initialPropostas } from './comercialData';
import type { Proposta, StatusProposta } from './comercialData';

// ============================================================
// TIPOS
// ============================================================

export interface AuditEntry {
  id: string;
  entityType: 'Proposta';
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
  entityType: 'Proposta';
  nome: string;
  tamanho: string;
  tipo: 'PDF' | 'DOCX' | 'XLSX' | 'JPG' | 'PNG';
  dataUpload: string;
  uploadedBy: string;
}

export interface ProposalOverride {
  status: StatusProposta;
  observacoes?: string;
  updatedAt: string;
  updatedBy: string;
}

export interface PropostaEdicao {
  id: string;           // ex: "EDIT-1716900000000"
  proposalId: string;   // ID da proposta original
  snapshot: Proposta;   // cópia completa da proposta ANTES da edição
  editadoEm: string;    // ISO string
  editadoPor: string;
  editadoPorNome: string;
}

// ============================================================
// ESTADO GLOBAL (module-level mutable state)
// ============================================================

let proposalsState: Proposta[] = [...initialPropostas];
const proposalOverrides: Record<string, ProposalOverride> = {};
let auditLog: AuditEntry[] = [];
// Inicializar documentos do localStorage
function loadDocumentosFromStorage(): Documento[] {
  try {
    const saved = localStorage.getItem('jp-mall-documentos');
    if (saved) return JSON.parse(saved);
  } catch {}
  return [];
}

function saveDocumentosToStorage(): void {
  try {
    localStorage.setItem('jp-mall-documentos', JSON.stringify(documentos));
  } catch {}
}

let documentos: Documento[] = loadDocumentosFromStorage();
let edicoesProposta: PropostaEdicao[] = [];
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
    details: `Proposta ${newP.id} criada para ${p.nomeFantasia || '—'} na unidade ${p.unidade}.`,
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
  notify();
  return true;
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
  saveDocumentosToStorage();
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
  saveDocumentosToStorage();
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





// ============================================================
// EDIÇÕES DE PROPOSTA (histórico)
// ============================================================

export function getEdicoesByProposal(proposalId: string): PropostaEdicao[] {
  return edicoesProposta
    .filter(e => e.proposalId === proposalId)
    .sort((a, b) => b.editadoEm.localeCompare(a.editadoEm));
}

export function updateProposalData(
  id: string,
  updates: Partial<Proposta>,
  snapshotAntes?: Proposta  // estado ANTES da edição — fornecido pelo modal via propostaOld
): boolean {
  const idx = proposalsState.findIndex(p => p.id === id);
  if (idx === -1) return false;

  const user = getUserSession();

  // Usar snapshot fornecido pelo modal (propostaOld) se disponível,
  // caso contrário capturar do store como fallback
  const before: Proposta = snapshotAntes ?? getProposalById(id) ?? proposalsState[idx];

  // Salvar histórico com o estado ANTERIOR
  edicoesProposta.push({
    id: `EDIT-${Date.now()}`,
    proposalId: id,
    snapshot: before,
    editadoEm: new Date().toISOString(),
    editadoPor: user.email,
    editadoPorNome: user.name,
  });

  // Aplicar novos dados
  proposalsState[idx] = { ...proposalsState[idx], ...updates };

  addAudit({
    entityType: 'Proposta',
    entityId: id,
    action: 'Proposta editada',
    details: `Dados da proposta ${id} atualizados por ${user.name}.`,
  });

  notify();
  return true;
}
export function getProposalsByUnidade(unidade: string): Proposta[] {
  return getProposals().filter(p => p.unidade === unidade);
}

export function checkAndUpdateVencidas(): void {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  proposalsState.forEach(p => {
    // Somente propostas com status Aprovado podem vencer automaticamente
    const statusAtual = proposalOverrides[p.id]?.status ?? p.status;
    if (statusAtual !== 'Aprovado') return;
    if (!p.dataVencimento) return;

    const parts = p.dataVencimento.split('/');
    if (parts.length !== 3) return;
    const venc = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
    venc.setHours(0, 0, 0, 0);

    if (venc < hoje) {
      proposalOverrides[p.id] = {
        ...proposalOverrides[p.id],
        status: 'Vencida',
        updatedAt: new Date().toISOString(),
        updatedBy: 'Sistema',
      };
      addAudit({
        entityType: 'Proposta',
        entityId: p.id,
        action: 'Status atualizado automaticamente: "Aprovado" → "Vencida"',
        details: `Proposta ${p.id} venceu em ${p.dataVencimento} e foi marcada automaticamente como Vencida.`,
      });
    }
  });

  notify();
}
