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
// Tipos exportados:
//  Derivam diretamente das entidades em ../entities.
//  Unidade e PropostaResumo estendem a entidade com campos
//  calculados/joined que a API adiciona à resposta.
// ============================================================

import type {
  Proposta,
  Unidade,
  PropostaDocumento,
  PropostaHistorico,
  PropostaLojaAnterior,
  PropostaNecessidadesTecnicas,
  PropostaCessaoDireitos,
  PropostaTaxaTransferencia,
  PropostaParecerComite,
  Usuario
} from '../entities';

// Re-exporta tipos de sub-tabelas para uso direto pelos componentes
export type {
  PropostaLojaAnterior,
  PropostaNecessidadesTecnicas,
  PropostaCessaoDireitos,
  PropostaTaxaTransferencia,
  PropostaParecerComite,
  PropostaHistorico,
  Proposta,
  Unidade
};

const API_BASE = import.meta.env.VITE_API_URL || '/api/v1';

// ── Tipos ────────────────────────────────────────────────────

export interface ApiError {
  message: string;
  status: number;
}

// ── Helper central ───────────────────────────────────────────

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const session = sessionStorage.getItem('jp-mall-session');
  const token = session ? JSON.parse(session).token : null;

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
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
    const res = await fetch(`${API_BASE}/ping`,
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
  usuario: Omit<Usuario, 'senhaHash'>;
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
    request<Omit<Usuario, 'senhaHash'>>('/auth/me'),
};

// ── Unidades ─────────────────────────────────────────────────

export interface UnidadesFiltros {
  piso?: string;
  corredor?: string;
}

export const unidades = {
  listar: (filtros?: UnidadesFiltros) => {
    const params = new URLSearchParams();
    if (filtros?.piso)      params.set('piso', filtros.piso);
    if (filtros?.corredor)  params.set('corredor', filtros.corredor);
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
}

/** Alias de PropostaDocumento — mantido para compatibilidade com imports existentes. */
export type Documento = PropostaDocumento;

export const propostas = {
  listar: (filtros?: PropostaFiltros) => {
    const params = new URLSearchParams();
    if (filtros?.idUnidade) params.set('id_unidade', filtros.idUnidade);
    if (filtros?.status)    params.set('status', filtros.status);
    if (filtros?.segmento)  params.set('segmento', filtros.segmento);
    const qs = params.toString();
    return request<Proposta[]>(`/propostas${qs ? '?' + qs : ''}`);
  },

  detalhe: (id: string) =>
    request<Proposta>(`/propostas/${id}`),

  criar: (payload: Partial<Proposta>) =>
    request<Proposta>('/propostas', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),

  atualizar: (id: string, payload: Partial<Proposta>) =>
    request<Proposta>(`/propostas/${id}`, {
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
    detalhe: (id: string) =>
      request<PropostaLojaAnterior>(`/propostas/${id}/loja-anterior`),
    salvar: (id: string, payload: Partial<PropostaLojaAnterior>) =>
      request<PropostaLojaAnterior>(`/propostas/${id}/loja-anterior`, {
        method: 'PUT', body: JSON.stringify(payload),
      }),
  },

  necessidadesTecnicas: {
    detalhe: (id: string) =>
      request<PropostaNecessidadesTecnicas>(`/propostas/${id}/necessidades-tecnicas`),
    salvar: (id: string, payload: Partial<PropostaNecessidadesTecnicas>) =>
      request<PropostaNecessidadesTecnicas>(`/propostas/${id}/necessidades-tecnicas`, {
        method: 'PUT', body: JSON.stringify(payload),
      }),
  },

  cessaoDireitos: {
    detalhe: (id: string) =>
      request<PropostaCessaoDireitos>(`/propostas/${id}/cessao-direitos`),
    salvar: (id: string, payload: Partial<PropostaCessaoDireitos>) =>
      request<PropostaCessaoDireitos>(`/propostas/${id}/cessao-direitos`, {
        method: 'PUT', body: JSON.stringify(payload),
      }),
  },

  taxaTransferencia: {
    detalhe: (id: string) =>
      request<PropostaTaxaTransferencia>(`/propostas/${id}/taxa-transferencia`),
    salvar: (id: string, payload: Partial<PropostaTaxaTransferencia>) =>
      request<PropostaTaxaTransferencia>(`/propostas/${id}/taxa-transferencia`, {
        method: 'PUT', body: JSON.stringify(payload),
      }),
  },

  parecerComite: {
    detalhe: (id: string) =>
      request<PropostaParecerComite>(`/propostas/${id}/parecer-comite`),
    salvar: (id: string, payload: Partial<PropostaParecerComite>) =>
      request<PropostaParecerComite>(`/propostas/${id}/parecer-comite`, {
        method: 'PUT', body: JSON.stringify(payload),
      }),
  },

  historico: {
    listar: (id: string) =>
      request<PropostaHistorico[]>(`/propostas/${id}/historico`),
  },
};

// ── Documentos ───────────────────────────────────────────────

export const documentos = {
  listar: (idProposta: string) => {
    const params = new URLSearchParams({ id_proposta: idProposta });
    return request<Documento[]>(`/documentos?${params.toString()}`);
  },

  upload: (idProposta: string, file: File, codigo: string) => {
    const session = sessionStorage.getItem('jp-mall-session');
    const token = session ? JSON.parse(session).token : null;
    const form = new FormData();
    form.append('file', file);
    form.append('id_proposta', idProposta);
    form.append('codigo', codigo);
    return fetch(`${API_BASE}/documentos`, {
      method: 'POST',
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: form,
    }).then(async r => {
      const body = await r.json().catch(() => null);
      if (!r.ok) {
        throw { message: body?.message || r.statusText, status: r.status } as ApiError;
      }
      return body as Documento;
    });
  },

  remover: (id: string) =>
    request<void>(`/documentos/${id}`, { method: 'DELETE' }),

  baixar: (id: string) => {
    const session = sessionStorage.getItem('jp-mall-session');
    const token = session ? JSON.parse(session).token : null;
    return fetch(`${API_BASE}/documentos/${id}/download`, {
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    }).then(async r => {
      if (!r.ok) {
        const body = await r.json().catch(() => null);
        throw { message: body?.message || r.statusText, status: r.status } as ApiError;
      }
      return r.blob();
    });
  },
};
