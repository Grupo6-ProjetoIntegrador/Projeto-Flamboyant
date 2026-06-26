import { DatePickerInput } from "../DatePickerInput";
import { STATUS_AGUARDANDO_COMITE } from "../../enums";
import { StyledCheckbox } from "../StyledCheckbox";
import type { TabSharedProps } from "./types";

const APROVADORES = [
  { nome: 'Presidente',                  campoAprovado: 'parecerPresidente',        campoData: 'parecerPresidenteData' },
  { nome: 'Diretoria Compartilhada (1)', campoAprovado: 'parecerDiretoriaComp1',    campoData: 'parecerDiretoriaComp1Data' },
  { nome: 'Diretoria Compartilhada (2)', campoAprovado: 'parecerDiretoriaComp2',    campoData: 'parecerDiretoriaComp2Data' },
  { nome: 'Superintendente Comercial',   campoAprovado: 'parecerSuperintendente',   campoData: 'parecerSuperintendenteData' },
  { nome: 'In Networking',               campoAprovado: 'parecerInNetworking',      campoData: 'parecerInNetworkingData' },
];

export function ParecerComiteTab({ draft, setDraft, editMode, readOnly }: TabSharedProps) {
  const disabled = !editMode || readOnly;
  const podeAssinar = draft.status === STATUS_AGUARDANDO_COMITE;

  return (
    <div className="flex-1 overflow-y-auto p-6">
      {!podeAssinar && (
        <div className="mb-4 flex items-start gap-2.5 px-4 py-3 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-xl">
          <span className="text-amber-500 text-base flex-shrink-0 mt-0.5">ⓘ</span>
          <p className="text-xs text-amber-700 dark:text-amber-400">
            As assinaturas do comitê só podem ser registradas quando a proposta estiver com o status <strong>Aguardando análise do comitê</strong>. Status atual: <strong>{draft.status}</strong>.
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {APROVADORES.map(apr => {
          const assinado = (draft as any)[apr.campoAprovado] === 'Assinado';
          const toggleAssinatura = () => {
            setDraft(prev => ({
              ...prev,
              [apr.campoAprovado]: assinado ? '' : 'Assinado',
              [apr.campoData]: assinado ? '' : new Date().toISOString().slice(0, 10),
            }));
          };
          return (
            <div key={apr.nome} className="bg-gray-50 dark:bg-[#1A1F2E] rounded-xl p-4 flex flex-col gap-3 border border-gray-100 dark:border-[#2E3447]">
              <p className="text-xs font-semibold text-gray-700 dark:text-[#F1F5F9]">{apr.nome}</p>
              <div className="flex items-center gap-2">
                <StyledCheckbox
                  checked={assinado}
                  disabled={disabled || !podeAssinar}
                  ariaLabel={`Assinar ${apr.nome}`}
                  onClick={toggleAssinatura}
                />
                <button
                  type="button"
                  onClick={disabled || !podeAssinar ? undefined : toggleAssinatura}
                  disabled={disabled || !podeAssinar}
                  className="text-xs text-gray-600 dark:text-[#94A3B8] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Assinado
                </button>
                {assinado && (
                  <span className="ml-auto text-[10px] font-semibold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded-full">✓ OK</span>
                )}
              </div>
              {assinado && editMode && (
                <div>
                  <p className="text-xs text-gray-500 dark:text-[#94A3B8] mb-1">Data da assinatura</p>
                  <DatePickerInput
                    value={(draft as any)[apr.campoData] || ''}
                    onChange={v => setDraft(prev => ({ ...prev, [apr.campoData]: v }))}
                    placeholder="DD/MM/AAAA"
                  />
                </div>
              )}
              {assinado && !editMode && (draft as any)[apr.campoData] && (
                <p className="text-xs text-gray-500 dark:text-[#94A3B8]">
                  Assinado em <span className="font-semibold text-gray-700 dark:text-[#F1F5F9]">{(draft as any)[apr.campoData]}</span>
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
