import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { NewClaim } from "./pages/NewClaim";
import { ClaimDetails } from "./pages/ClaimDetails";
import { ClaimsHistory } from "./pages/ClaimsHistory";
import { StoreDirectory } from "./pages/StoreDirectory";
import { Reports } from "./pages/Reports";
import { EmptySection } from "./pages/EmptySection";

// Comercial pages
import { ComercialDashboard } from "./pages/comercial/ComercialDashboard";
import { ComercialProposals } from "./pages/comercial/ComercialProposals";
import { ComercialContracts } from "./pages/comercial/ComercialContracts";
import { ComercialHistory } from "./pages/comercial/ComercialHistory";
import { ComercialAvailability } from "./pages/comercial/ComercialAvailability";
import { ComercialReports } from "./pages/comercial/ComercialReports";

// Sinistros pages
import { SinistrosDashboard } from "./pages/sinistros/SinistrosDashboard";
import { SinistrosReports } from "./pages/sinistros/SinistrosReports";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "dashboard", Component: Dashboard },
      
      // Lojistas section
      { path: "lojistas/diretorio", Component: StoreDirectory },
      
      // Treinamentos section (empty for now)
      { path: "treinamentos", Component: EmptySection },
      
      // Seguros section (empty for now)
      { path: "seguros", Component: EmptySection },
      
      // Manutenção section (empty for now)
      { path: "manutencao", Component: EmptySection },
      
      // Sinistros section
      { path: "sinistros/novo", Component: NewClaim },
      { path: "sinistros/historico", Component: ClaimsHistory },
      { path: "sinistros/dashboard", Component: SinistrosDashboard },
      { path: "sinistros/relatorios", Component: SinistrosReports },
      { path: "sinistros/:id", Component: ClaimDetails },
      
      // Marketing section (empty for now)
      { path: "marketing", Component: EmptySection },
      
      // Comercial section (unified dashboard — Visão Geral merged into Dashboard)
      { path: "comercial/dashboard", Component: ComercialDashboard },
      { path: "comercial/propostas", Component: ComercialProposals },
      { path: "comercial/contratos", Component: ComercialContracts },
      { path: "comercial/historico", Component: ComercialHistory },
      { path: "comercial/disponibilidade", Component: ComercialAvailability },
      { path: "comercial/relatorios", Component: ComercialReports },
      
      // Institucional section (empty for now)
      { path: "institucional", Component: EmptySection },
      
      // Relatórios section (now empty, moved to subnav)
      { path: "relatorios", Component: EmptySection },
    ],
  },
]);