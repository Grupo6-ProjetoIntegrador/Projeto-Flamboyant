import { createBrowserRouter, redirect } from "react-router";
import { Layout } from "./components/Layout";
import { Login } from "./pages/Login";
import { ComercialDashboard } from "./pages/comercial/ComercialDashboard";
import { ComercialProposals } from "./pages/comercial/ComercialProposals";
import { ComercialAvailability } from "./pages/comercial/ComercialAvailability";
import { ComercialReports } from "./pages/comercial/ComercialReports";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "comercial/dashboard", Component: ComercialDashboard },
      { path: "comercial/propostas", Component: ComercialProposals },
      { path: "comercial/disponibilidade", Component: ComercialAvailability },
      { path: "comercial/relatorios", Component: ComercialReports },
      { path: "dashboard", loader: () => redirect("/comercial/dashboard") },
      { path: "*", loader: () => redirect("/comercial/dashboard") },
    ],
  },
]);
