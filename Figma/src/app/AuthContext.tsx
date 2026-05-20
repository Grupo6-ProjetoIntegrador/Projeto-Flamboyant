// ============================================================
// AuthContext.tsx — Contexto de autenticação (MODO PROTÓTIPO)
// ============================================================
//
// Gerencia o estado de autenticação globalmente via React Context.
//
// MODO PROTÓTIPO: o usuário começa sempre autenticado com um usuário
// fixo (USUARIO_PROTOTIPO). O login aceita qualquer credencial e apenas
// salva o perfil na sessionStorage. Não há validação de token JWT.
//
// Para produção:
//  - substituir USUARIO_PROTOTIPO pela resposta real da API
//  - no login(), chamar apiClient.auth.login() e salvar o token JWT
//  - no logout(), chamar apiClient.auth.logout() e limpar o token
//  - o estado inicial deve ler o token do localStorage, não ser fixo
//
// Exporta:
//  AuthContext      — contexto bruto (usado pelo useApi para ler token)
//  AuthProvider     — wrapper que deve envolver toda a aplicação
//  useAuth()        — hook para consumir login/logout/isAuthenticated
// ============================================================
import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';

interface Usuario {
  id?: string;
  nome: string;
  email: string;
  setor: string;
}

interface AuthState {
  token: string | null;
  usuario: Usuario | null;
}

interface AuthContextValue extends AuthState {
  login: (token: string, usuario: Usuario) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

const USUARIO_PROTOTIPO: Usuario = {
  id: 'proto-001',
  nome: 'Administrador',
  email: 'admin@flamboyant.com.br',
  setor: 'Comercial',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>({
    token: 'proto-token',
    usuario: USUARIO_PROTOTIPO,
  });

  const login = useCallback((_token: string, usuario: Usuario) => {
    sessionStorage.setItem('jp-mall-session', JSON.stringify({
      name: usuario.nome,
      email: usuario.email,
      sector: usuario.setor,
    }));
    setAuth({ token: 'proto-token', usuario });
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem('jp-mall-session');
    setAuth({ token: null, usuario: null });
  }, []);

  return (
    <AuthContext.Provider value={{
      ...auth,
      isAuthenticated: !!auth.token,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth deve ser usado dentro de <AuthProvider>');
  return ctx;
}
