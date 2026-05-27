import { DataCard, type DataCardFieldMap } from './DataCard';

const COLS_CLASS: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  5: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
  6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6',
};

interface DataCardContainerProps<T extends Record<string, any>> {
  data: T[];
  fieldMap: DataCardFieldMap<T>;
  keyField?: keyof T;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  onClick?: (row: T) => void;
  emptyMessage?: string;
  className?: string;
}

export function DataCardContainer<T extends Record<string, any>>({
  data,
  fieldMap,
  keyField = 'id' as keyof T,
  cols = 3,
  onClick,
  emptyMessage = 'Nenhum item encontrado',
  className = '',
}: DataCardContainerProps<T>) {
  const colsClass = COLS_CLASS[cols] ?? COLS_CLASS[3];

  return (
    <div className={`flex-1 min-h-0 overflow-y-auto grid ${colsClass} gap-3 p-3 content-start pb-4 sm:pb-0 ${className}`}>
      {data.length === 0 ? (
        <div className="col-span-full text-center py-12 text-gray-400 dark:text-[#64748B]">
          <p className="text-sm">{emptyMessage}</p>
        </div>
      ) : (
        data.map((item, index) => (
          <DataCard
            key={String(item[keyField] ?? index)}
            data={item}
            fieldMap={fieldMap}
            onClick={onClick}
          />
        ))
      )}
    </div>
  );
}
