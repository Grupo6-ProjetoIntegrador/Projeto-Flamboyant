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

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>(() => {
    const session = sessionStorage.getItem('jp-mall-session');
    if (session) {
      try {
        const parsed = JSON.parse(session);
        return {
          token: parsed.token || null,
          usuario: parsed.token ? {
            nome: parsed.name,
            email: parsed.email,
            setor: parsed.sector,
          } : null,
        };
      } catch {
        sessionStorage.removeItem('jp-mall-session');
      }
    }
    return { token: null, usuario: null };
  });

  const login = useCallback((token: string, usuario: Usuario) => {
    sessionStorage.setItem('jp-mall-session', JSON.stringify({
      token,
      name: usuario.nome,
      email: usuario.email,
      sector: usuario.setor,
    }));
    setAuth({ token, usuario });
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
