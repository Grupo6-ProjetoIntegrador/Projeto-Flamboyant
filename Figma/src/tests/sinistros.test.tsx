import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'

// Componentes mínimos para os testes — substitua pelas importações reais quando disponíveis
function BadgeStatus({ status }: { status: string }) {
  const labels: Record<string, string> = {
    aberto: 'Aberto',
    em_analise: 'Em Análise',
    encerrado: 'Encerrado',
  }
  return <span data-testid="badge-status">{labels[status] || status}</span>
}

function ListaSinistros({ items, onSelect }: { items: Array<{ id: number; descricao: string; status: string }>; onSelect?: (id: number) => void }) {
  return (
    <ul data-testid="lista-sinistros">
      {items.map((s) => (
        <li key={s.id} data-testid={`sinistro-item-${s.id}`} onClick={() => onSelect?.(s.id)}>
          <span>{s.descricao}</span>
          <BadgeStatus status={s.status} />
        </li>
      ))}
    </ul>
  )
}

const mock = [
  { id: 1, descricao: 'Vazamento de água', status: 'aberto' },
  { id: 2, descricao: 'Furto de mercadoria', status: 'em_analise' },
  { id: 3, descricao: 'Incêndio parcial', status: 'encerrado' },
]

describe('Sinistros (simples)', () => {
  it('renderiza lista com itens', () => {
    render(<ListaSinistros items={mock} />)
    const list = screen.getByTestId('lista-sinistros')
    expect(list).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('mostra badge com texto correto conforme status', () => {
    render(<BadgeStatus status="em_analise" />)
    expect(screen.getByTestId('badge-status')).toHaveTextContent('Em Análise')
  })

  it('chama onSelect ao clicar em item', async () => {
    const handler = vi.fn()
    render(<ListaSinistros items={mock} onSelect={handler} />)
    await userEvent.click(screen.getByTestId('sinistro-item-2'))
    expect(handler).toHaveBeenCalledOnce()
    expect(handler).toHaveBeenCalledWith(2)
  })
})
