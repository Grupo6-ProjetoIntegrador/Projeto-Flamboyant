import { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router";
import { 
  Home,
  Users,
  GraduationCap,
  Shield,
  Wrench,
  FileWarning,
  Megaphone,
  Briefcase,
  Building2,
  BarChart3,
  Menu,
  X,
  Search,
  Bell,
  Sun,
  Moon,
  User,
  LogOut
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
    id: "dashboard", 
    label: "Dashboard", 
    icon: Home, 
    path: "/dashboard" 
  },
  { 
    id: "lojistas", 
    label: "Lojistas", 
    icon: Users, 
    path: "/lojistas/diretorio",
    subTabs: [
      { label: "Diretório", path: "/lojistas/diretorio" }
    ]
  },
  { 
    id: "treinamentos", 
    label: "Treinamentos", 
    icon: GraduationCap, 
    path: "/treinamentos" 
  },
  { 
    id: "seguros", 
    label: "Seguros", 
    icon: Shield, 
    path: "/seguros" 
  },
  { 
    id: "manutencao", 
    label: "Manutenção", 
    icon: Wrench, 
    path: "/manutencao" 
  },
  { 
    id: "sinistros", 
    label: "Sinistros", 
    icon: FileWarning, 
    path: "/sinistros/novo",
    subTabs: [
      { label: "Novo Sinistro", path: "/sinistros/novo" },
      { label: "Histórico", path: "/sinistros/historico" },
      { label: "Dashboard", path: "/sinistros/dashboard" },
      { label: "Relatórios", path: "/sinistros/relatorios" }
    ]
  },
  { 
    id: "marketing", 
    label: "Marketing", 
    icon: Megaphone, 
    path: "/marketing" 
  },
  { 
    id: "comercial", 
    label: "Comercial", 
    icon: Briefcase, 
    path: "/comercial/dashboard",
    subTabs: [
      { label: "Dashboard", path: "/comercial/dashboard" },
      { label: "Propostas", path: "/comercial/propostas" },
      { label: "Contratos", path: "/comercial/contratos" },
      { label: "Histórico", path: "/comercial/historico" },
      { label: "Disponibilidade", path: "/comercial/disponibilidade" },
      { label: "Relatórios", path: "/comercial/relatorios" },
    ]
  },
  { 
    id: "institucional", 
    label: "Institucional", 
    icon: Building2, 
    path: "/institucional" 
  },
  { 
    id: "relatorios", 
    label: "Relatórios", 
    icon: BarChart3, 
    path: "/relatorios" 
  },
];

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("jp-mall-dark-mode");
    return saved === "true";
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [userSession, setUserSession] = useState(getUserSession());
  const navigate = useNavigate();
  const location = useLocation();

  // Refresh session on mount
  useEffect(() => {
    setUserSession(getUserSession());
  }, [location.pathname]);

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("jp-mall-dark-mode", darkMode.toString());
  }, [darkMode]);

  const currentSection = navigationItems.find(item => 
    location.pathname.startsWith(item.path) || 
    item.subTabs?.some(sub => location.pathname.startsWith(sub.path))
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/lojistas/diretorio?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('jp-mall-session');
    navigate("/");
  };

  return (
    <div className="flex h-screen w-full bg-[#F7F4EF] dark:bg-[#0F1117] transition-colors">
      {/* Sidebar */}
      <aside 
        className={`${
          sidebarOpen ? "w-64" : "w-0"
        } bg-[#8B1A1A] dark:bg-[#0F1117] text-white flex flex-col transition-all duration-300 ease-in-out overflow-hidden border-r border-[#a43030] dark:border-[#2E3447]`}
      >
        <div className="h-16 flex items-center px-6 border-b border-[#a43030] dark:border-[#2E3447]">
          <FileWarning className="w-6 h-6 mr-3 text-[#C8A882] dark:text-[#D4A96A]" />
          <span className="font-bold text-lg tracking-wide whitespace-nowrap">
            JP Mall <span className="text-xs font-normal opacity-80 ml-1">Sistema</span>
          </span>
        </div>
        
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname.startsWith(item.path) || 
              item.subTabs?.some(sub => location.pathname.startsWith(sub.path));
            
            return (
              <NavLink 
                key={item.id}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive 
                    ? 'bg-[#D93030] dark:bg-[#E04444] text-white' 
                    : 'text-white/80 hover:bg-[#a43030]/50 dark:hover:bg-[#1A1F2E] hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5 mr-3 opacity-90" /> {item.label}
              </NavLink>
            );
          })}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white dark:bg-[#242938] border-b border-gray-200 dark:border-[#2E3447] flex items-center justify-between px-6 z-10 transition-colors">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 text-gray-600 dark:text-[#94A3B8] hover:text-gray-900 dark:hover:text-[#F1F5F9] hover:bg-gray-100 dark:hover:bg-[#1A1F2E] rounded-lg transition-colors"
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <button 
              onClick={() => navigate("/dashboard")}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img 
                src={logoFlamboyant} 
                alt="Flamboyant Shopping" 
                className="h-10 w-auto object-contain"
              />
            </button>
          </div>
          
          <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-[#64748B]" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar lojista..." 
                className="w-full bg-gray-50 dark:bg-[#1E2435] border border-gray-200 dark:border-[#2E3447] text-gray-900 dark:text-[#F1F5F9] placeholder:text-gray-400 dark:placeholder:text-[#64748B] text-sm rounded-lg focus:ring-[#D93030] dark:focus:ring-[#E04444] focus:border-[#D93030] dark:focus:border-[#E04444] block pl-10 pr-4 py-2.5 transition-colors"
              />
            </div>
          </form>
          
          <div className="flex items-center gap-3">
            <button className="relative p-2 text-gray-500 dark:text-[#94A3B8] hover:text-gray-700 dark:hover:text-[#F1F5F9] hover:bg-gray-100 dark:hover:bg-[#1A1F2E] rounded-full transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#D93030] dark:bg-[#E04444] rounded-full"></span>
            </button>

            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-gray-500 dark:text-[#94A3B8] hover:text-gray-700 dark:hover:text-[#F1F5F9] hover:bg-gray-100 dark:hover:bg-[#1A1F2E] rounded-full transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <div className="flex items-center gap-3 border-l border-gray-200 dark:border-[#2E3447] pl-4">
              <div className="flex flex-col text-right">
                <span className="text-sm font-medium text-gray-900 dark:text-[#F1F5F9]">{userSession.name || 'Gerência'}</span>
                <span className="text-xs text-gray-500 dark:text-[#94A3B8]">{userSession.sector || 'JP Mall'}</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#C8A882] dark:bg-[#D4A96A] text-[#8B1A1A] dark:text-[#1F2937] font-bold flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <button
                onClick={handleLogout}
                title="Sair do sistema"
                className="p-2 text-gray-500 dark:text-[#94A3B8] hover:text-[#D93030] dark:hover:text-[#E04444] hover:bg-gray-100 dark:hover:bg-[#1A1F2E] rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Sub-header with tabs (if current section has sub-tabs) */}
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
                        : 'border-transparent text-gray-600 dark:text-[#94A3B8] hover:text-gray-900 dark:hover:text-[#F1F5F9] hover:border-gray-300 dark:hover:border-[#2E3447]'
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