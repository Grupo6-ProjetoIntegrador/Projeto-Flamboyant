/**
 * Layout.tsx — Shell principal da aplicação autenticada.
 *
 * Estrutura visual:
 *  ┌─────────────────────────────────────────────────────┐
 *  │ Sidebar (fixo, retrátil)  │  Header (título da pg.) │
 *  │  - Logo JP Mall           ├─────────────────────────┤
 *  │  - Nav: Comercial         │  <Outlet />             │
 *  │    ├ Dashboard            │  (conteúdo da rota)     │
 *  │    ├ Propostas            │                         │
 *  │    ├ Disponibilidade      │                         │
 *  │    └ Relatórios           │                         │
 *  │  - Usuário + Logout       │                         │
 *  └───────────────────────────┴─────────────────────────┘
 *  [Mobile: nav bar inferior com 4 ícones]
 */
import { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router";
import {
  Briefcase,
  Menu,
  Sun,
  Moon,
  LogOut,
  ChevronLeft,
  ChevronDown,
  LayoutDashboard,
  FileText,
  Store,
  BarChart2,
} from "lucide-react";
import logoFlamboyant from "../../assets/isotipo_flamboyant.webp";
import { getUserSession } from "../data/comercialStore";
import { useAuth } from "../AuthContext";
import { useApiHealth } from "../data/useApiHealth";
import { WifiOff } from "lucide-react";

interface SubTabDef {
  label: string;
  path: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  path: string;
  subTabs?: SubTabDef[];
}

const navigationItems: NavItem[] = [
  {
    id: "comercial",
    label: "Comercial",
    icon: Briefcase,
    path: "/comercial/dashboard",
    subTabs: [
      { label: "Dashboard",       path: "/comercial/dashboard",       icon: LayoutDashboard },
      { label: "Propostas",       path: "/comercial/propostas",       icon: FileText },
      { label: "Disponibilidade", path: "/comercial/disponibilidade", icon: Store },
      { label: "Relatórios",      path: "/comercial/relatorios",      icon: BarChart2 },
    ],
  },
];

function getInitials(name: string): string {
  return name.split(' ').filter(Boolean).slice(0, 2).map(n => n[0]).join('').toUpperCase() || 'JP';
}

// ---------------------------------------------------------------------------
// SidebarNavSection — item de nav com subitens expansíveis
// ---------------------------------------------------------------------------
function SidebarNavSection({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  const isActive = item.subTabs
    ? item.subTabs.some(s => pathname.startsWith(s.path))
    : pathname.startsWith(item.path);

  const [expanded, setExpanded] = useState(isActive);

  useEffect(() => {
    if (isActive) setExpanded(true);
  }, [isActive]);

  const Icon = item.icon;

  if (!item.subTabs?.length) {
    return (
      <NavLink
        to={item.path}
        className={`flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap
          ${isActive ? 'bg-white/15 text-white' : 'text-white/75 hover:bg-white/10 hover:text-white'}`}
      >
        <Icon className="w-4 h-4 mr-3 flex-shrink-0 opacity-90" strokeWidth={1.5} />
        <span className="truncate">{item.label}</span>
      </NavLink>
    );
  }

  return (
    <div>
      <button
        onClick={() => setExpanded(e => !e)}
        className={`w-full flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors
          ${isActive ? 'text-white' : 'text-white/75 hover:bg-white/10 hover:text-white'}`}
      >
        <Icon className="w-4 h-4 mr-3 flex-shrink-0 opacity-90" strokeWidth={1.5} />
        <span className="flex-1 truncate text-left">{item.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          strokeWidth={1.5}
        />
      </button>

      {expanded && (
        <div className="mt-0.5 ml-3 pl-3 border-l border-white/20 space-y-0.5">
          {item.subTabs.map(sub => {
            const SubIcon = sub.icon;
            const isSubActive = pathname === sub.path || pathname.startsWith(sub.path + '/');
            return (
              <NavLink
                key={sub.path}
                to={sub.path}
                className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md text-sm transition-colors
                  ${isSubActive
                    ? 'bg-white/15 text-white font-medium'
                    : 'text-white/65 hover:bg-white/10 hover:text-white'}`}
              >
                {SubIcon && <SubIcon className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />}
                <span className="truncate">{sub.label}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------
export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(() => {
    const saved = localStorage.getItem("sidebar_open");
    return saved === null ? true : saved === "true";
  });
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("jp-mall-dark-mode");
    return saved === "true";
  });
  const [userSession, setUserSession] = useState(getUserSession());
  const apiStatus = useApiHealth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setUserSession(getUserSession());
  }, [location.pathname]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("jp-mall-dark-mode", darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("sidebar_open", sidebarOpen.toString());
  }, [sidebarOpen]);

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  const currentSection = navigationItems.find(item =>
    item.subTabs?.some(s => location.pathname.startsWith(s.path)) ||
    location.pathname.startsWith(item.path)
  );
  const currentPageLabel =
    currentSection?.subTabs?.find(s => location.pathname.startsWith(s.path))?.label ??
    currentSection?.label ??
    '';

  return (
    <div className="h-screen flex overflow-hidden w-full bg-[#F7F4EF] dark:bg-[#0F1117] transition-colors duration-[0ms]">

      {/* Floating controls — visíveis quando sidebar fechado */}
      <div className={`fixed top-0 left-0 z-50 h-16 flex items-center gap-2 px-4 transition-all duration-60 ease-in-out ${
        sidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
        <button
          onClick={() => setSidebarOpen(true)}
          className="w-9 h-9 bg-[#8B1A1A] text-white rounded-lg flex items-center justify-center shadow-md hover:bg-[#a43030] transition-colors"
          aria-label="Abrir menu"
        >
          <Menu className="w-4 h-4" strokeWidth={1.5} />
        </button>
        <button
          onClick={() => navigate("/comercial/dashboard")}
          className="h-9 flex items-center hover:opacity-80 transition-opacity"
          aria-label="Dashboard"
        >
          <img src={logoFlamboyant} alt="JP Mall" className="h-8 w-auto object-contain" />
        </button>
      </div>

      {/* Overlay escuro — mobile only */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-[89] bg-black/50 backdrop-blur-sm sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          bg-[#8B1A1A] text-white flex flex-col overflow-hidden
          transition-all duration-200 ease-in-out
          fixed top-0 left-0 h-full z-[90]
          sm:relative sm:z-auto sm:flex-shrink-0
          ${sidebarOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full sm:w-0 sm:translate-x-0"}
        `}
      >
        {/* Cabeçalho: logo + fechar */}
        <div className="h-16 flex items-center px-4 border-b border-white/10 flex-shrink-0 gap-3">
          <img src={logoFlamboyant} alt="JP Mall" className="h-7 w-auto object-contain flex-shrink-0" />
          <span className="text-sm font-semibold text-white whitespace-nowrap flex-1 truncate tracking-wide">
            JP Mall
          </span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="w-7 h-7 flex items-center justify-center rounded-md text-white/70 hover:bg-white/10 hover:text-white transition-colors flex-shrink-0"
            aria-label="Fechar menu"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>

        {/* Navegação */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {navigationItems.map(item => (
            <SidebarNavSection key={item.id} item={item} pathname={location.pathname} />
          ))}
        </nav>

        {/* Rodapé: usuário + logout */}
        <div className="px-3 py-4 border-t border-white/10 flex-shrink-0 space-y-2">
          {apiStatus === 'offline' && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 text-white/70 text-xs">
              <WifiOff className="w-3.5 h-3.5 flex-shrink-0" />
              <span>API indisponível</span>
            </div>
          )}
          <div className="flex items-center gap-3 px-1">
            <div className="w-8 h-8 rounded-full bg-[#C8A882] text-[#8B1A1A] font-bold flex items-center justify-center text-xs flex-shrink-0">
              {getInitials(userSession.name || 'JP Mall')}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white truncate">{userSession.name || 'Gerente JP Mall'}</p>
              <p className="text-xs text-white/50 truncate">{userSession.email || 'gerente@jpmall.com.br'}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-white/70 hover:bg-white/10 hover:text-white transition-colors text-sm"
          >
            <LogOut className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
            <span>Sair do sistema</span>
          </button>
        </div>
      </aside>

      {/* Área de conteúdo */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className={`relative h-16 bg-white dark:bg-[#242938] border-b border-gray-200 dark:border-[#2E3447] flex items-center z-10 transition-all duration-[75ms] ${sidebarOpen ? 'sm:px-6 px-[4.5rem]' : 'pl-[4.5rem] sm:pl-[7.5rem] pr-6'}`}>
          {/* Título da página — centralizado */}
          {currentPageLabel && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1 className="text-sm font-semibold text-gray-800 dark:text-[#F1F5F9] tracking-wide">
                {currentPageLabel}
              </h1>
            </div>
          )}

          {/* Controles à direita */}
          <div className="relative z-10 flex items-center gap-2 ml-auto">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-gray-400 dark:text-[#94A3B8] hover:text-gray-600 dark:hover:text-[#F1F5F9] hover:bg-gray-100 dark:hover:bg-[#1A1F2E] rounded-lg transition-colors duration-[75ms]"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Conteúdo da página */}
        <main className="flex-1 overflow-hidden flex flex-col bg-[#F7F4EF] dark:bg-[#0F1117] transition-colors duration-[75ms] pb-16 sm:pb-0">
          <Outlet />
        </main>
      </div>

      {/* Bottom nav — mobile only */}
      <nav className="block sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#242938] border-t border-gray-200 dark:border-[#2E3447] flex items-center justify-around px-2 py-2 safe-area-inset-bottom">
        {[
          { label: 'Dashboard',       icon: LayoutDashboard, path: '/comercial/dashboard' },
          { label: 'Propostas',       icon: FileText,         path: '/comercial/propostas' },
          { label: 'Disponibilidade', icon: Store,            path: '/comercial/disponibilidade' },
          { label: 'Relatórios',      icon: BarChart2,        path: '/comercial/relatorios' },
        ].map(item => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 px-1 py-1 rounded-lg transition-colors flex-1
                ${isActive ? 'text-[#D93030] dark:text-[#E04444]' : 'text-gray-400 dark:text-[#64748B]'}`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
              <span className="text-[10px] font-medium leading-tight text-center whitespace-nowrap">
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
