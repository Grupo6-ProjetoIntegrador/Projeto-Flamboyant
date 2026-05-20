// ============================================================
// useApi.ts — Hook genérico para chamadas à API
// ============================================================
//
// Abstrai o ciclo de vida de uma requisição assíncrona:
// loading → sucesso (data) | erro (error), com suporte a refetch.
//
// Uso:
//   const { data, loading, error, refetch } = useApi(
//     () => PropostasService.listar(),
//     []  // deps — quando mudar, re-executa o fetch
//   );
//
// Race condition: usa um contador (counterRef) para descartar
// respostas de requisições anteriores quando uma nova é disparada.
// Isso evita que dados desatualizados sobrescrevam os mais recentes.
//
// MODO PROTÓTIPO: sem checagem de token antes de fazer fetch.
// Para produção, verificar isAuthenticated antes de disparar.
// ============================================================
import { useState, useEffect, useCallback, useRef } from 'react';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useApi<T>(
  fetcher: () => Promise<T>,
  deps: any[] = []
): UseApiState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const counterRef = useRef(0);

  const fetch = useCallback(async () => {
    const id = ++counterRef.current;
    setLoading(true);
    setError(null);
    try {
      const result = await fetcher();
      if (id === counterRef.current) setData(result);
    } catch (err: any) {
      if (id === counterRef.current) {
        setError(err.message || 'Erro ao carregar dados');
      }
    } finally {
      if (id === counterRef.current) setLoading(false);
    }
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { fetch(); }, [fetch]);

  return { data, loading, error, refetch: fetch };
}
