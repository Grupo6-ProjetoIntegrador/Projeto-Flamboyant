import { useMemo, type ReactNode } from "react";
import {
  CheckCircle2,
  Clock3,
  Download,
  File,
  FileText,
  ImageIcon,
  Loader2,
  Paperclip,
  Trash2,
  Upload,
} from "lucide-react";
import type { Documento } from "../../data/apiClient";
import { DataTable } from "../DataTable";

interface Props {
  documentos: Documento[];
  editMode: boolean;
  readOnly: boolean;
  isSaving?: boolean;
  pendentesCount?: number;
  removidosCount?: number;
  onAnexar: () => void;
  onRemover: (docId: string) => void;
  onBaixar: (docId: string) => void;
}

interface DocumentoRow {
  nomeOriginal: string;
  tipo: string;
  tamanho: string;
  dataUpload: string;
  idUsuario: string;
  status: string;
  id: string;
  idProposta: string;
  codigo: string;
  urlStorage: string;
  _acoes?: string;
}

function tipoLabel(tipo: string): string {
  if (tipo === "application/pdf" || tipo === "PDF") return "PDF";
  if (tipo === "image/jpeg" || tipo === "JPG" || tipo === "JPEG") return "JPG";
  if (tipo === "image/png" || tipo === "PNG") return "PNG";
  if (tipo.includes("wordprocessingml") || tipo === "DOCX") return "DOCX";
  return tipo || "-";
}

function FileTypeIcon({ tipo }: { tipo: string }) {
  const label = tipoLabel(tipo);
  const className = "w-4 h-4";

  if (label === "PDF" || label === "DOCX") {
    return <FileText className={`${className} text-red-500 dark:text-red-400`} />;
  }

  if (label === "JPG" || label === "PNG") {
    return <ImageIcon className={`${className} text-blue-500 dark:text-blue-400`} />;
  }

  return <File className={`${className} text-gray-400 dark:text-[#94A3B8]`} />;
}

function StatusBadge({ status }: { status: string }) {
  const isPendente = status === "Pendente";
  const Icon = isPendente ? Clock3 : CheckCircle2;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-semibold ${
        isPendente
          ? "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-900/10 dark:text-amber-300 dark:border-amber-900/40"
          : "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/10 dark:text-emerald-300 dark:border-emerald-900/40"
      }`}
    >
      <Icon className="w-3 h-3" />
      {status}
    </span>
  );
}

function formatDataUpload(dataUpload: string): string {
  if (!dataUpload || dataUpload === "Ao salvar") return dataUpload || "-";

  const parsed = new Date(dataUpload);
  if (Number.isNaN(parsed.getTime())) return dataUpload;

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(parsed);
}

export function AnexosTab({
  documentos,
  editMode,
  readOnly,
  isSaving = false,
  pendentesCount = 0,
  removidosCount = 0,
  onAnexar,
  onRemover,
  onBaixar,
}: Props) {
  const columnConfig = useMemo(() => ({
    nomeOriginal: {
      label: "Arquivo",
      render: (row: DocumentoRow): ReactNode => (
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-[#1A1F2E] border border-gray-100 dark:border-[#2E3447] flex items-center justify-center flex-shrink-0">
            <FileTypeIcon tipo={row.tipo} />
          </span>
          <span className="font-medium text-gray-800 dark:text-[#F1F5F9] truncate max-w-[260px]" title={row.nomeOriginal}>
            {row.nomeOriginal}
          </span>
        </div>
      ),
    },
    tipo: {
      label: "Tipo",
      _allowFilter: false,
      render: (row: DocumentoRow) => tipoLabel(row.tipo),
    },
    tamanho: { label: "Tamanho", _allowFilter: false, sortable: false },
    dataUpload: {
      label: "Data de upload",
      _allowFilter: false,
      render: (row: DocumentoRow) => formatDataUpload(row.dataUpload),
    },
    idUsuario: { label: "Enviado por" },
    status: {
      label: "Status",
      _allowFilter: false,
      render: (row: DocumentoRow) => <StatusBadge status={row.status} />,
    },
    id: { _specified: false },
    idProposta: { _specified: false },
    codigo: { label: "Código", _allowFilter: false },
    urlStorage: { _specified: false },
    ...(editMode && !readOnly ? {
      _acoes: {
        label: "",
        _allowFilter: false,
        sortable: false,
        render: (row: DocumentoRow) => (
          <div className="flex items-center justify-end gap-1">
            {row.status !== "Pendente" && (
              <button
                type="button"
                disabled={isSaving}
                title="Baixar documento"
                onClick={e => {
                  e.stopPropagation();
                  if (!isSaving) onBaixar(row.id);
                }}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              type="button"
              disabled={isSaving}
              title={row.status === "Pendente" ? "Remover anexo pendente" : "Remover documento"}
              onClick={e => {
                e.stopPropagation();
                if (!isSaving) onRemover(row.id);
              }}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ),
      },
    } : {}),
  }), [editMode, readOnly, isSaving, onBaixar, onRemover]);

  const rows = useMemo<DocumentoRow[]>(() =>
    documentos.map(doc => ({
      nomeOriginal: doc.nomeOriginal,
      tipo: doc.tipo,
      tamanho: doc.tamanho,
      dataUpload: (doc as any).pendente ? "Ao salvar" : doc.dataUpload,
      idUsuario: (doc as any).pendente ? "Pendente" : doc.idUsuario,
      status: (doc as any).pendente ? "Pendente" : "Salvo",
      id: doc.id,
      idProposta: doc.idProposta,
      codigo: doc.codigo,
      urlStorage: doc.urlStorage ?? "",
      ...(editMode && !readOnly ? { _acoes: "" } : {}),
    }))
  , [documentos, editMode, readOnly]);

  const hasPendingChanges = editMode && !readOnly && (pendentesCount > 0 || removidosCount > 0);

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="flex items-center justify-between mb-4 gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <Paperclip className="w-4 h-4 text-gray-400 dark:text-[#64748B] flex-shrink-0" />
          <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9] truncate">
            Documentos anexados - {documentos.length}
          </span>
        </div>
        {editMode && !readOnly && (
          <button
            type="button"
            disabled={isSaving}
            onClick={onAnexar}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#D93030] hover:bg-[#c02828] text-white rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSaving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Upload className="w-3.5 h-3.5" />}
            Anexar Documento
          </button>
        )}
      </div>

      {isSaving && (
        <div className="mb-4 px-3 py-2 bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30 rounded-lg">
          <p className="text-xs font-medium text-blue-700 dark:text-blue-300 flex items-center gap-2">
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
            Gravando documentos...
          </p>
        </div>
      )}

      {hasPendingChanges && !isSaving && (
        <div className="mb-4 px-3 py-2 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg">
          <p className="text-xs text-amber-700 dark:text-amber-400">
            {pendentesCount > 0 && `${pendentesCount} ${pendentesCount === 1 ? "anexo pendente" : "anexos pendentes"}`}
            {pendentesCount > 0 && removidosCount > 0 && " e "}
            {removidosCount > 0 && `${removidosCount} ${removidosCount === 1 ? "documento marcado para remoção" : "documentos marcados para remoção"}`}
            . Clique em <strong>Gravar</strong> para confirmar.
          </p>
        </div>
      )}

      {!editMode && !readOnly && (
        <div className="mb-4 px-3 py-2 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg">
          <p className="text-xs text-amber-700 dark:text-amber-400">
            Para anexar ou remover documentos, clique em <strong>Editar</strong> na toolbar.
          </p>
        </div>
      )}

      <DataTable<DocumentoRow>
        data={rows}
        columnConfig={columnConfig as any}
        emptyMessage="Nenhum documento anexado."
      />
    </div>
  );
}
