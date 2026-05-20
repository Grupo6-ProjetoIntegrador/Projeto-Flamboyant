// ============================================================
// services/propostas.service.ts — Camada de serviço para Proposta
// ============================================================
//
// Papel na arquitetura MVVM: esta é a camada MODEL.
// Encapsula o acesso ao apiClient, expondo métodos de domínio
// claros para os ViewModels consumirem sem conhecer detalhes HTTP.
//
// Por que esta camada existe (e não chamar apiClient diretamente)?
//  - Isolamento: se a URL ou o formato da API mudar, só este arquivo muda
//  - Testabilidade: ViewModels podem ser testados mockando o Service
//  - Clareza: PropostasService.listar() é mais legível que unidades.listar()
//
// Métodos: listar(filtros?), detalhe(id), criar(payload), atualizarStatus(id, status, obs?)
// ============================================================
import { propostas as propostasApi } from '../data/apiClient';
import type { PropostaResumo } from '../data/apiClient';

export type { PropostaResumo };

export const PropostasService = {
  listar:          (filtros?: Parameters<typeof propostasApi.listar>[0]) => propostasApi.listar(filtros),
  detalhe:         (id: string)                                          => propostasApi.detalhe(id),
  criar:           (payload: Parameters<typeof propostasApi.criar>[0])   => propostasApi.criar(payload),
  atualizarStatus: (id: string, status: string, obs?: string)            => propostasApi.atualizarStatus(id, status, obs),
};
