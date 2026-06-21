/**
 * App.tsx — Ponto de entrada da aplicação React.
 *
 * Responsabilidades:
 *  - Envolve tudo com BrowserRouter (habilita navegação por URL no React Router v7)
 *  - Envolve tudo com AuthProvider (torna o contexto de autenticação disponível globalmente)
 *  - Define as rotas da aplicação via AppRoutes
 *
 * Estrutura de rotas:
 *  /           → Login (pública)
 *  /comercial  → Layout (shell com sidebar + header)
 *    dashboard        → ComercialDashboard
 *    propostas        → ComercialProposals
 *    disponibilidade  → ComercialAvailability
 *    relatorios       → ComercialReports
 *  /*          → redireciona para /comercial/dashboard
 *
 * MODO PROTÓTIPO: não há PrivateRoute — todas as rotas são acessíveis
 * sem autenticação real. Para produção, adicionar guard de rota.
 */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { ComercialDashboard } from './pages/comercial/ComercialDashboard';
import { ComercialProposals } from './pages/comercial/ComercialProposals';
import { ComercialAvailability } from './pages/comercial/ComercialAvailability';
import { ComercialReports } from './pages/comercial/ComercialReports';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/comercial" element={<Layout />}>
        <Route path="dashboard" element={<ComercialDashboard />} />
        <Route path="propostas" element={<ComercialProposals />} />
        <Route path="disponibilidade" element={<ComercialAvailability />} />
        <Route path="relatorios" element={<ComercialReports />} />
      </Route>
      <Route path="*" element={<Navigate to="/comercial/dashboard" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
