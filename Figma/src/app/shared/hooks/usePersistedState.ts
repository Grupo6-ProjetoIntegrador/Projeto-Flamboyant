// ============================================================
// shared/hooks/usePersistedState.ts
// ============================================================
//
// Hook que funciona como useState normal, mas persiste o valor
// automaticamente no sessionStorage a cada mudança.
//
// Usado pelos ViewModels para manter filtros, ordenação e modo
// de exibição entre navegações — quando o usuário volta à tela,
// o estado anterior é restaurado sem precisar de backend.
//
// Parâmetros:
//   key          — chave no sessionStorage (ex: 'dashboard.filterPisos')
//   defaultValue — valor inicial se não houver nada salvo
//   serialize    — converte T → string para salvar (padrão: JSON.stringify)
//   deserialize  — converte string → T ao carregar (padrão: JSON.parse)
//
// Strings usam serialize/deserialize identidade (v => v) para evitar
// double-encoding: usePersistedState<string>('key', '', v => v, v => v)
//
// Proteção contra primeira renderização: o useEffect usa isMounted
// para não sobrescrever o valor carregado na inicialização.
// ============================================================
import { useState, useEffect, useRef } from 'react';

export function usePersistedState<T>(
  key: string,
  defaultValue: T,
  serialize: (v: T) => string = JSON.stringify,
  deserialize: (s: string) => T = JSON.parse,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const stored = sessionStorage.getItem(key);
    if (stored !== null) {
      try { return deserialize(stored); } catch {}
    }
    return defaultValue;
  });

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) { isMounted.current = true; return; }
    sessionStorage.setItem(key, serialize(value));
  }, [key, value, serialize]);

  return [value, setValue];
}
