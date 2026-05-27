export function ChartTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  const isBar = label !== undefined;
  return (
    <div style={{
      backgroundColor: 'var(--color-background-primary)',
      border: '1px solid var(--color-border-secondary)',
      borderRadius: '10px',
      padding: '10px 12px',
      fontSize: '11px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
      minWidth: '120px',
    }}>
      {isBar && (
        <p style={{
          fontWeight: 600,
          marginBottom: '6px',
          paddingBottom: '6px',
          borderBottom: '1px solid var(--color-border-tertiary)',
          color: '#C8A882',
        }}>{label}</p>
      )}
      {payload.map((entry: any, i: number) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              backgroundColor: entry.payload?.fill ?? entry.color ?? '#D93030',
              flexShrink: 0,
            }} />
            <span style={{ color: 'var(--color-text-secondary)' }}>{entry.name ?? entry.payload?.name}</span>
          </div>
          <span style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
            {entry.value} {entry.value === 1 ? 'loja' : 'lojas'}
          </span>
        </div>
      ))}
    </div>
  );
}
