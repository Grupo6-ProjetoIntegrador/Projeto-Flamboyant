// ============================================================
// apiClient.ts — Cliente HTTP centralizado para a API BES-2026
// ============================================================
//
// Camada de acesso à API REST. Toda requisição HTTP da aplicação
// passa por aqui — nunca use fetch() diretamente nas páginas.
//
// Estrutura interna:
//  - API_BASE: lido de VITE_API_URL (.env). Em dev, o Vite proxy
//    redireciona /api/* para http://localhost:8080, evitando CORS.
//  - request<T>(): função genérica que faz fetch, trata erros HTTP
//    e retorna o JSON tipado. MODO PROTÓTIPO: sem header Authorization.
//  - checkHealth(): verifica se a API está disponível via GET /api/v1/ping
//
// Grupos de endpoints exportados:
//  auth       — login, logout, me
//  unidades   — listar (com filtros), detalhe
//  propostas  — listar, detalhe, criar, atualizar, atualizarStatus,
//               checkVencidas, lojaAnterior, necessidadesTecnicas,
//               cessaoDireitos, taxaTransferencia, parecerComite, historico
//  documentos — listar, upload (multipart), remover
//
// Tipos exportados usados pelas views:
//  PropostaResumo  — dados resumidos de uma proposta (lista)
//  PropostaDetalhe — todos os campos de uma proposta (modal de edição)
//  Unidade         — unidade física do mall
//  Documento       — arquivo vinculado a uma proposta
// ============================================================

const API_BASE = import.meta.env.VITE_API_URL || '/api/v1';

// ── Tipos ────────────────────────────────────────────────────

export interface ApiError {
  message: string;
  status: number;
}

// ── Helper central ───────────────────────────────────────────

// MODO PROTÓTIPO — sem autenticação via token
async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({ message: 'Erro desconhecido' }));
    throw { message: body.message || res.statusText, status: res.status } as ApiError;
  }

  if (res.status === 204) return undefined as unknown as T;

  return res.json();
}

// ── Health ───────────────────────────────────────────────────

export async function checkHealth(): Promise<boolean> {
  try {
    const res = await fetch('/api/v1/ping',
      { signal: AbortSignal.timeout(4000) }
    );
    return res.ok;
  } catch {
    return false;
  }
}

// ── Auth ─────────────────────────────────────────────────────

export interface LoginPayload {
  email: string;
  senha: string;
}

export interface LoginResponse {
  token: string;
  usuario: {
    id: string;
    nome: string;
    email: string;
    setor: string;
  };
}

export const auth = {
  login: (payload: LoginPayload) =>
    request<LoginResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  logout: () =>
    request<void>('/auth/logout', { method: 'POST' }),

  me: () =>
    request<LoginResponse['usuario']>('/auth/me'),
};

// ── Unidades ─────────────────────────────────────────────────

export interface Unidade {
  id: string;
  codigo: string;
  piso: 'P' | 'S' | 'T';
  corredor: string;
  area: number;
  status: 'Disponível' | 'Ocupado';
  criadoEm: string;
}

export interface UnidadesFiltros {
  piso?: string;
  corredor?: string;
  status?: string;
}

export const unidades = {
  listar: (filtros?: UnidadesFiltros) => {
    const params = new URLSearchParams();
    if (filtros?.piso) params.set('piso', filtros.piso);
    if (filtros?.corredor) params.set('corredor', filtros.corredor);
    if (filtros?.status) params.set('status', filtros.status);
    const qs = params.toString();
    return request<Unidade[]>(`/unidades${qs ? '?' + qs : ''}`);
  },
  detalhe: (id: string) => request<Unidade>(`/unidades/${id}`),
};

// ── Propostas ────────────────────────────────────────────────

export interface PropostaFiltros {
  idUnidade?: string;
  status?: string;
  segmento?: string;
  piso?: string;
  dataFrom?: string;
  dateTo?: string;
}

export interface PropostaResumo {
  id: string;
  idUnidade: string;
  codigoUnidade: string;
  /** @alias codigoUnidade — compatibilidade com páginas legadas */
  unidade: string;
  piso: string;
  corredor: string;
  segmento: string;
  tipoOperacao: string;
  /** @alias tipoOperacao — compatibilidade com páginas legadas */
  tipo: string;
  valorProposto: number;
  area: number;
  abl?: number;
  status: string;
  responsavel?: string;
  nomeFantasia?: string;
  dataCriacao: string;
  dataVencimento?: string;
  fimContrato?: string;
  atualizadoEm: string;
}

export interface PropostaDetalhe extends PropostaResumo {
  aluguelPercent?: number;
  prazoLocacaoMeses?: number;
  aluguelPorM2?: number;
  condominioAprox?: number;
  fppAprox?: number;
  inicioContrato?: string;
  dataInauguracao?: string;
  observacoes?: string;
}

export const propostas = {
  listar: (filtros?: PropostaFiltros) => {
    const params = new URLSearchParams();
    if (filtros?.idUnidade) params.set('id_unidade', filtros.idUnidade);
    if (filtros?.status) params.set('status', filtros.status);
    if (filtros?.segmento) params.set('segmento', filtros.segmento);
    if (filtros?.piso) params.set('piso', filtros.piso);
    if (filtros?.dataFrom) params.set('data_from', filtros.dataFrom);
    if (filtros?.dateTo) params.set('data_to', filtros.dateTo);
    const qs = params.toString();
    return request<PropostaResumo[]>(`/propostas${qs ? '?' + qs : ''}`);
  },

  detalhe: (id: string) => request<PropostaDetalhe>(`/propostas/${id}`),

  criar: (payload: Partial<PropostaDetalhe>) =>
    request<PropostaDetalhe>('/propostas', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  atualizar: (id: string, payload: Partial<PropostaDetalhe>) =>
    request<PropostaDetalhe>(`/propostas/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
    }),

  atualizarStatus: (id: string, status: string, observacoes?: string) =>
    request<void>(`/propostas/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status, observacoes }),
    }),

  checkVencidas: () =>
    request<void>('/propostas/check-vencidas', { method: 'POST' }),

  lojaAnterior: {
    detalhe: (id: string) => request<any>(`/propostas/${id}/loja-anterior`),
    salvar: (id: string, payload: any) =>
      request<any>(`/propostas/${id}/loja-anterior`, { method: 'PUT', body: JSON.stringify(payload) }),
  },

  necessidadesTecnicas: {
    detalhe: (id: string) => request<any>(`/propostas/${id}/necessidades-tecnicas`),
    salvar: (id: string, payload: any) =>
      request<any>(`/propostas/${id}/necessidades-tecnicas`, { method: 'PUT', body: JSON.stringify(payload) }),
  },

  cessaoDireitos: {
    detalhe: (id: string) => request<any>(`/propostas/${id}/cessao-direitos`),
    salvar: (id: string, payload: any) =>
      request<any>(`/propostas/${id}/cessao-direitos`, { method: 'PUT', body: JSON.stringify(payload) }),
  },

  taxaTransferencia: {
    detalhe: (id: string) => request<any>(`/propostas/${id}/taxa-transferencia`),
    salvar: (id: string, payload: any) =>
      request<any>(`/propostas/${id}/taxa-transferencia`, { method: 'PUT', body: JSON.stringify(payload) }),
  },

  parecerComite: {
    detalhe: (id: string) => request<any>(`/propostas/${id}/parecer-comite`),
    salvar: (id: string, payload: any) =>
      request<any>(`/propostas/${id}/parecer-comite`, { method: 'PUT', body: JSON.stringify(payload) }),
  },

  historico: {
    listar: (id: string) => request<any[]>(`/propostas/${id}/historico`),
  },
};

// ── Documentos ───────────────────────────────────────────────

export interface Documento {
  id: string;
  idProposta: string;
  idUsuario: string;
  codigo: string;
  nomeOriginal: string;
  tipo: string;
  tamanho: string;
  urlStorage?: string;
  dataUpload: string;
}

export const documentos = {
  listar: (idProposta: string) =>
    request<Documento[]>(`/documentos?id_proposta=${idProposta}`),

  upload: (idProposta: string, file: File, codigo: string) => {
    const form = new FormData();
    form.append('file', file);
    form.append('id_proposta', idProposta);
    form.append('codigo', codigo);
    return fetch(`${API_BASE}/documentos`, {
      method: 'POST',
      body: form,
    }).then(async r => r.json() as Promise<Documento>);
  },

  remover: (id: string) =>
    request<void>(`/documentos/${id}`, { method: 'DELETE' }),
};
