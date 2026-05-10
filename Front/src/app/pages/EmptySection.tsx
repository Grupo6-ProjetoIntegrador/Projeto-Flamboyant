import { useLocation } from "react-router";
import { Package } from "lucide-react";

export function EmptySection() {
  const location = useLocation();
  
  const getSectionName = () => {
    const path = location.pathname.split("/")[1];
    const names: Record<string, string> = {
      treinamentos: "Treinamentos",
      seguros: "Seguros",
      manutencao: "Manutenção",
      marketing: "Marketing",
      comercial: "Comercial",
      institucional: "Institucional"
    };
    return names[path] || "Seção";
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-[#1A1F2E] mb-4">
          <Package className="w-8 h-8 text-gray-400 dark:text-[#64748B]" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-[#F1F5F9] mb-2">
          {getSectionName()}
        </h2>
        <p className="text-gray-500 dark:text-[#94A3B8] max-w-sm">
          Esta seção está em desenvolvimento e será disponibilizada em breve.
        </p>
      </div>
    </div>
  );
}
