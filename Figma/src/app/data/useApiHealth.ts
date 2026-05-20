// ============================================================
// useApiHealth.ts — Status de saúde da API
// ============================================================
//
// MODO PROTÓTIPO: sempre retorna 'online', sem fazer requisição real.
//
// Para produção, substituir por uma implementação que:
//  1. Chama checkHealth() do apiClient em intervalos (ex: a cada 30s)
//  2. Retorna 'checking' durante a primeira verificação
//  3. Retorna 'online' se a API responder com 200
//  4. Retorna 'offline' se der timeout ou erro de rede
//
// O Login.tsx usa este hook para habilitar/desabilitar o botão
// de login e exibir alertas de indisponibilidade.
// ============================================================
export type ApiStatus = 'checking' | 'online' | 'offline';

export function useApiHealth(): ApiStatus {
  return 'online';
}
