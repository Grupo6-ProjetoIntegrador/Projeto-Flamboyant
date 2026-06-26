import { useMemo } from "react";
import { Paperclip, Upload, Trash2 } from "lucide-react";
import type { Documento } from "../../data/apiClient";
import { DataTable } from "../DataTable";

interface Props {
  documentos: Documento[];
  editMode: boolean;
  readOnly: boolean;
  onAnexar: () => void;
  onRemover: (docId: string) => void;
}

interface DocumentoRow {
  nomeOriginal: string;
  tipo: string;
  tamanho: string;
  dataUpload: string;
  idUsuario: string;
  status: string;
  // campos internos ocultados
  id: string;
  idProposta: string;
  codigo: string;
  urlStorage: string;
  _acoes?: string;
}

export function AnexosTab({ documentos, editMode, readOnly, onAnexar, onRemover }: Props) {
  const columnConfig = useMemo(() => ({
    nomeOriginal: { label: 'Arquivo' },
    tipo:         { label: 'Tipo',          _allowFilter: false },
    tamanho:      { label: 'Tamanho',       _allowFilter: false, sortable: false },
    dataUpload:   { label: 'Data de upload', _allowFilter: false },
    idUsuario:    { label: 'Enviado por' },
    status:       { label: 'Status',        _allowFilter: false },
    id:           { _specified: false },
    idProposta:   { _specified: false },
    codigo:       { label: 'Código', _allowFilter: false },
    urlStorage:   { _specified: false },
    ...(editMode && !readOnly ? {
      _acoes: {
        label: '',
        _allowFilter: false,
        sortable: false,
        render: (row: DocumentoRow) => (
          <button
            onClick={e => { e.stopPropagation(); onRemover(row.id); }}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        ),
      },
    } : {}),
  }), [editMode, readOnly, onRemover]);

  const rows = useMemo<DocumentoRow[]>(() =>
    documentos.map(doc => ({
      nomeOriginal: doc.nomeOriginal,
      tipo:         doc.tipo,
      tamanho:      doc.tamanho,
      dataUpload:   (doc as any).pendente ? 'Ao salvar' : doc.dataUpload,
      idUsuario:    (doc as any).pendente ? 'Pendente' : doc.idUsuario,
      status:       (doc as any).pendente ? 'Pendente' : 'Salvo',
      id:           doc.id,
      idProposta:   doc.idProposta,
      codigo:       doc.codigo,
      urlStorage:   doc.urlStorage ?? '',
      ...(editMode && !readOnly ? { _acoes: '' } : {}),
    }))
  , [documentos, editMode, readOnly]);

  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Paperclip className="w-4 h-4 text-gray-400 dark:text-[#64748B]" />
          <span className="text-sm font-semibold text-gray-700 dark:text-[#F1F5F9]">
            Documentos anexados — {documentos.length}
          </span>
        </div>
        {editMode && !readOnly && (
          <button
            onClick={onAnexar}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#D93030] hover:bg-[#c02828] text-white rounded-lg transition-colors"
          >
            <Upload className="w-3.5 h-3.5" /> Anexar Documento
          </button>
        )}
      </div>

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
