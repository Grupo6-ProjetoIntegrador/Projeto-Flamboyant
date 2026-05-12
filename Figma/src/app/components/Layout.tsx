import { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router";
import {
  Briefcase,
  Menu,
  Bell,
  Sun,
  Moon,
  LogOut,
  ChevronLeft,
  User
} from "lucide-react";
import logoFlamboyant from "../../imports/logo_2024.png";
import { getUserSession } from "../data/comercialStore";

interface NavItem {
  id: string;
  label: string;
  icon: any;
  path: string;
  subTabs?: { label: string; path: string }[];
}

const navigationItems: NavItem[] = [
  {
    id: "comercial",
    label: "Comercial",
    icon: Briefcase,
    path: "/comercial/dashboard",
    subTabs: [
      { label: "Dashboard", path: "/comercial/dashboard" },
      { label: "Propostas", path: "/comercial/propostas" },
      { label: "Disponibilidade", path: "/comercial/disponibilidade" },
      { label: "Relatórios", path: "/comercial/relatorios" },
    ]
  },
];

function getInitials(name: string): string {
  return name.split(' ').filter(Boolean).slice(0, 2).map(n => n[0]).join('').toUpperCase() || 'JP';
}

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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setUserSession(getUserSession());
    if (location.pathname.startsWith('/comercial/')) {
      sessionStorage.setItem('jp-mall-comercial-last-tab', location.pathname);
    }
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

  const currentSection = navigationItems.find(item =>
    location.pathname.startsWith(item.path) ||
    item.subTabs?.some(sub => location.pathname.startsWith(sub.path))
  );

  const handleLogout = () => {
    sessionStorage.removeItem('jp-mall-session');
    navigate("/");
  };

  const handleComercialClick = (e: React.MouseEvent) => {
    const saved = sessionStorage.getItem('jp-mall-comercial-last-tab');
    if (saved) {
      e.preventDefault();
      navigate(saved);
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#F7F4EF] dark:bg-[#0F1117] transition-colors">

      {/* Floating controls — visible when sidebar is closed */}
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
          <img
            src={logoFlamboyant}
            alt="JP Mall"
            className="h-8 w-auto object-contain"
          />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } bg-[#8B1A1A] text-white flex flex-col flex-shrink-0 transition-all duration-80 ease-in-out overflow-hidden`}
      >
        {/* Top: JP Mall + Close button */}
        <div className="h-16 flex items-center px-4 border-b border-white/10 flex-shrink-0 gap-2">
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

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith('/comercial/');

            return (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={item.id === 'comercial' ? handleComercialClick : undefined}
                className={`flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive
                    ? 'bg-white/15 text-white'
                    : 'text-white/75 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4 mr-3 flex-shrink-0 opacity-90" strokeWidth={1.5} />
                <span className="truncate">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer: User info + Logout */}
        <div className="px-3 py-4 border-t border-white/10 flex-shrink-0 space-y-2">
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

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className={`h-16 bg-white dark:bg-[#242938] border-b border-gray-200 dark:border-[#2E3447] flex items-center justify-between z-10 transition-all duration-300 ${sidebarOpen ? 'px-6' : 'pl-[7.5rem] pr-6'}`}>
          <div className="flex items-center gap-3" />

          <div className="flex items-center gap-2 ml-auto">
            

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-gray-400 dark:text-[#94A3B8] hover:text-gray-600 dark:hover:text-[#F1F5F9] hover:bg-gray-100 dark:hover:bg-[#1A1F2E] rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            
          </div>
        </header>

        {/* Sub-header with tabs */}
        {currentSection?.subTabs && currentSection.subTabs.length > 0 && (
          <div className="bg-white dark:bg-[#242938] border-b border-gray-200 dark:border-[#2E3447] px-6 transition-colors">
            <div className="flex gap-1">
              {currentSection.subTabs.map((tab) => {
                const isActiveTab = location.pathname === tab.path;
                return (
                  <NavLink
                    key={tab.path}
                    to={tab.path}
                    className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                      isActiveTab
                        ? 'border-[#D93030] dark:border-[#E04444] text-[#D93030] dark:text-[#E04444]'
                        : 'border-transparent text-gray-500 dark:text-[#94A3B8] hover:text-gray-800 dark:hover:text-[#F1F5F9] hover:border-gray-300 dark:hover:border-[#2E3447]'
                    }`}
                  >
                    {tab.label}
                  </NavLink>
                );
              })}
            </div>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 scroll-smooth bg-[#F7F4EF] dark:bg-[#0F1117] transition-colors">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
