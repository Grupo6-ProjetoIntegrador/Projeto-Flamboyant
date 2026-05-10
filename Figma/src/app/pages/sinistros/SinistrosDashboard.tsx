import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { 
  AlertTriangle, 
  Clock, 
  FileWarning, 
  TrendingUp,
  Search,
  ChevronRight
} from "lucide-react";
import { getClaims, Claim } from "../../store";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

export function SinistrosDashboard() {
  const navigate = useNavigate();
  const [claims, setClaims] = useState<Claim[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setClaims(getClaims());
  }, []);

  const openClaims = claims.filter(c => c.status === "Aberto" || c.status === "Em Análise").length;
  const waitingRegulator = claims.filter(c => c.status === "Aguardando Regulador").length;
  const fraudAlerts = claims.filter(c => c.fraudAlert).length;

  const filteredClaims = claims.filter(c => 
    c.store.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Mock data for chart
  const chartData = [
    { name: 'Loja A', incidentes: 4 },
    { name: 'Loja B', incidentes: 2 },
    { name: 'Praça de Alim.', incidentes: 5 },
    { name: 'Estacionamento', incidentes: 3 },
    { name: 'Banheiros', incidentes: 1 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-[#F1F5F9]">Dashboard de Sinistros</h1>
          <p className="text-gray-500 dark:text-[#94A3B8] mt-1">Resumo das ocorrências e sinistros do complexo.</p>
        </div>
        <button 
          onClick={() => navigate("/sinistros/novo")}
          className="bg-[#D93030] dark:bg-[#E04444] hover:bg-[#b92828] dark:hover:bg-[#F05555] text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center"
        >
          <FileWarning className="w-4 h-4 mr-2" />
          Registrar Ocorrência
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-[#242938] rounded-lg shadow-sm border border-gray-100 dark:border-[#2E3447] p-6 flex items-start justify-between hover:shadow-md transition-all">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-[#94A3B8] mb-1">Sinistros Abertos</p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-[#F1F5F9]">{openClaims}</h3>
            <p className="text-xs text-green-600 dark:text-[#34D399] mt-2 flex items-center font-medium">
              <TrendingUp className="w-3 h-3 mr-1" /> -12% em relação ao mês anterior
            </p>
          </div>
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-[#60A5FA] rounded-lg flex items-center justify-center">
            <FileWarning className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-lg shadow-sm border border-gray-100 dark:border-[#2E3447] p-6 flex items-start justify-between hover:shadow-md transition-all">
          <div>
            <p className="text-sm font-medium text-gray-500 dark:text-[#94A3B8] mb-1">Aguardando Regulador</p>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-[#F1F5F9]">{waitingRegulator}</h3>
            <p className="text-xs text-orange-600 dark:text-[#FBBF24] mt-2 flex items-center font-medium">
              Requer atenção imediata
            </p>
          </div>
          <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-[#FBBF24] rounded-lg flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white dark:bg-[#242938] rounded-lg shadow-sm border border-red-100 dark:border-red-700/30 p-6 flex items-start justify-between hover:shadow-md transition-all">
          <div>
            <p className="text-sm font-medium text-[#D93030] dark:text-[#E04444] mb-1">Alertas de Fraude</p>
            <h3 className="text-3xl font-bold text-[#D93030] dark:text-[#E04444]">{fraudAlerts}</h3>
            <p className="text-xs text-[#8B1A1A] dark:text-[#E04444] mt-2 flex items-center font-medium">
              Análise rigorosa sugerida
            </p>
          </div>
          <div className="w-12 h-12 bg-red-50 dark:bg-red-900/30 text-[#D93030] dark:text-[#E04444] rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="bg-white dark:bg-[#242938] rounded-lg shadow-sm border border-gray-100 dark:border-[#2E3447] p-6 lg:col-span-2">
          <h3 className="text-base font-semibold text-gray-900 dark:text-[#F1F5F9] mb-6">Incidência por Área (Últimos 30 dias)</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-gray-200 dark:stroke-[#2E3447]" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} className="fill-gray-600 dark:fill-[#94A3B8]" dy={10} />
                <YAxis axisLine={false} tickLine={false} className="fill-gray-600 dark:fill-[#94A3B8]" />
                <Tooltip 
                  cursor={{fill: '#f3f4f6'}}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="incidentes" fill="#C8A882" className="dark:fill-[#D4A96A]" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Search & Summary */}
        <div className="bg-[#8B1A1A] dark:bg-[#1A1F2E] text-white rounded-lg shadow-sm p-6 flex flex-col relative overflow-hidden border border-[#a43030] dark:border-[#2E3447]">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-[#a43030] dark:bg-[#242938] rounded-full opacity-50"></div>
          
          <h3 className="text-lg font-semibold mb-2 relative z-10">Consulta Rápida</h3>
          <p className="text-white/80 dark:text-[#94A3B8] text-sm mb-6 relative z-10">Localize informações de sinistros instantaneamente.</p>
          
          <div className="relative z-10 mt-auto">
            <div className="bg-white/10 dark:bg-[#1E2435] rounded-lg p-1 border border-white/20 dark:border-[#2E3447] flex items-center">
              <input 
                type="text" 
                placeholder="N° Sinistro ou Lojista" 
                className="bg-transparent border-none text-white dark:text-[#F1F5F9] placeholder-white/60 dark:placeholder-[#64748B] focus:ring-0 w-full px-3 text-sm"
              />
              <button className="p-2 bg-white dark:bg-[#E04444] text-[#8B1A1A] dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-[#F05555] transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Table */}
      <div className="bg-white dark:bg-[#242938] rounded-lg shadow-sm border border-gray-100 dark:border-[#2E3447] overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 dark:border-[#2E3447] flex justify-between items-center bg-gray-50/50 dark:bg-[#1A1F2E]">
          <h3 className="text-base font-semibold text-gray-900 dark:text-[#F1F5F9]">Últimas Ocorrências</h3>
          <div className="relative w-64">
            <input 
              type="text" 
              placeholder="Filtrar tabela..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-sm border border-gray-200 dark:border-[#2E3447] bg-white dark:bg-[#1E2435] text-gray-900 dark:text-[#F1F5F9] placeholder:text-gray-400 dark:placeholder:text-[#64748B] rounded-md focus:outline-none focus:ring-1 focus:ring-[#D93030] dark:focus:ring-[#E04444] focus:border-[#D93030] dark:focus:border-[#E04444]"
            />
            <Search className="w-4 h-4 text-gray-400 dark:text-[#64748B] absolute left-2.5 top-2" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-[#2E3447]">
            <thead className="bg-gray-50 dark:bg-[#1A1F2E]">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  Nº Sinistro
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  Local / Lojista
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  Data
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-[#94A3B8] uppercase tracking-wider">
                  Gravidade
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Ações</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#242938] divide-y divide-gray-200 dark:divide-[#2E3447]">
              {filteredClaims.map((claim) => (
                <tr key={claim.id} className="hover:bg-gray-50 dark:hover:bg-[#1A1F2E] transition-colors cursor-pointer" onClick={() => navigate(`/sinistros/${claim.id}`)}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-[#F1F5F9] flex items-center">
                    {claim.id}
                    {claim.fraudAlert && (
                      <span title="Alerta de Fraude" className="ml-2 text-[#D93030] dark:text-[#E04444]">
                        <AlertTriangle className="w-4 h-4" />
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-[#94A3B8]">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800 dark:text-[#F1F5F9]">{claim.store}</span>
                      <span className="text-xs">{claim.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-[#94A3B8]">
                    {new Date(claim.date).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${claim.status === 'Aberto' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400' : ''}
                      ${claim.status === 'Aguardando Regulador' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400' : ''}
                      ${claim.status === 'Em Análise' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400' : ''}
                      ${claim.status === 'Aprovado' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400' : ''}
                      ${claim.status === 'Pago' ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-400' : ''}
                    `}>
                      {claim.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-900 dark:text-[#F1F5F9]">
                      <span className={`w-2.5 h-2.5 rounded-full mr-2 
                        ${claim.severity === 'Alta' ? 'bg-[#D93030] dark:bg-[#E04444]' : ''}
                        ${claim.severity === 'Média' ? 'bg-yellow-500 dark:bg-[#FBBF24]' : ''}
                        ${claim.severity === 'Baixa' ? 'bg-green-500 dark:bg-[#34D399]' : ''}
                      `}></span>
                      {claim.severity}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/sinistros/${claim.id}`);
                      }}
                      className="text-[#D93030] dark:text-[#E04444] hover:text-[#b92828] dark:hover:text-[#F05555] inline-flex items-center"
                    >
                      Detalhes <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredClaims.length === 0 && (
            <div className="py-8 text-center text-gray-500 dark:text-[#94A3B8]">
              Nenhum sinistro encontrado com os filtros atuais.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
