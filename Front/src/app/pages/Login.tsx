import { useState } from "react";
import { useNavigate } from "react-router";
import { Building2, Lock, Mail, ShieldAlert, Briefcase } from "lucide-react";
import { setUserSession } from "../data/comercialStore";

const SECTORS = [
  "Comercial", "Sinistros", "Manutenção", "Seguros",
  "Marketing", "Lojistas", "Treinamentos", "Institucional",
  "Relatórios", "TI / Administração",
];

export function Login() {
  const navigate = useNavigate();
  const [sector, setSector] = useState("Comercial");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem('email') as HTMLInputElement)?.value || 'gerente@jpmall.com.br';
    setUserSession({ email, name: 'Gerente JP Mall', sector });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] dark:bg-[#0F1117] flex flex-col justify-center py-12 sm:px-6 lg:px-8 transition-colors">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B1A1A] to-[#a43030] dark:from-[#8B1A1A] dark:to-[#E04444] shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <Building2 className="w-8 h-8 text-[#C8A882] dark:text-[#D4A96A]" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-[#F1F5F9]">
            JP Mall
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-[#94A3B8]">
            Gestão Integrada de Ocorrências e Sinistros
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white dark:bg-[#242938] py-8 px-4 shadow-xl sm:rounded-lg sm:px-10 border-t-4 border-[#8B1A1A] dark:border-[#E04444]">
          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-400 rounded-lg p-4 mb-6 flex items-start">
            <ShieldAlert className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-yellow-600 dark:text-yellow-500" />
            <div className="text-sm font-medium">
              Acesso restrito. Este sistema destina-se apenas a gerentes e administradores autorizados do JP Mall.
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-[#94A3B8]">
                E-mail ou Usuário
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 dark:text-[#64748B]" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  defaultValue="gerente@jpmall.com.br"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-[#2E3447] bg-white dark:bg-[#1E2435] text-gray-900 dark:text-[#F1F5F9] rounded-md focus:outline-none focus:ring-[#D93030] focus:border-[#D93030] sm:text-sm transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-[#94A3B8]">
                Senha
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 dark:text-[#64748B]" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  defaultValue="••••••••"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-[#2E3447] bg-white dark:bg-[#1E2435] text-gray-900 dark:text-[#F1F5F9] rounded-md focus:outline-none focus:ring-[#D93030] focus:border-[#D93030] sm:text-sm transition-colors"
                />
              </div>
            </div>

            {/* Setor — RNF-02 */}
            <div>
              <label htmlFor="sector" className="block text-sm font-medium text-gray-700 dark:text-[#94A3B8]">
                Setor / Módulo de Acesso
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Briefcase className="h-5 w-5 text-gray-400 dark:text-[#64748B]" />
                </div>
                <select
                  id="sector"
                  value={sector}
                  onChange={e => setSector(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-[#2E3447] bg-white dark:bg-[#1E2435] text-gray-900 dark:text-[#F1F5F9] rounded-md focus:outline-none focus:ring-[#D93030] focus:border-[#D93030] sm:text-sm transition-colors cursor-pointer"
                >
                  {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-[#64748B]">Selecione o setor principal de atuação.</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#D93030] focus:ring-[#D93030] border-gray-300 dark:border-[#2E3447] rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-[#F1F5F9] cursor-pointer">
                  Lembrar acesso
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-[#D93030] hover:text-[#b92828] transition-colors">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#D93030] hover:bg-[#b92828] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D93030] transition-colors duration-200"
              >
                Entrar no Sistema
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
