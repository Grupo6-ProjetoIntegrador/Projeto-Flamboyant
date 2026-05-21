// ============================================================
// services/unidades.service.ts — Camada de serviço para Unidade
// ============================================================
//
// Papel na arquitetura MVVM: esta é a camada MODEL.
// Encapsula o acesso ao apiClient, expondo métodos de domínio
// claros para os ViewModels consumirem sem conhecer detalhes HTTP.
//
// Por que esta camada existe (e não chamar apiClient diretamente)?
//  - Isolamento: se a URL ou o formato da API mudar, só este arquivo muda
//  - Testabilidade: ViewModels podem ser testados mockando o Service
//  - Clareza: UnidadesService.listar() é mais legível que unidades.listar()
//
// Métodos: listar(filtros?), detalhe(id)
// ============================================================
import { unidades as unidadesApi } from '../data/apiClient';
import type { Unidade } from '../data/apiClient';

export type { Unidade };

export const UnidadesService = {
  listar: () => unidadesApi.listar(),
  detalhe: (id: string) => unidadesApi.detalhe(id),
};
