Realize as seguintes alterações no projeto. Siga cada instrução com precisão, sem remover funcionalidades não mencionadas e sem alterar o estilo visual existente.

---

## 1. MENU LATERAL — `src/app/components/Layout.tsx`

**1.1 Remover todos os itens do menu exceto "Comercial".**

No array `navigationItems`, apague completamente os seguintes objetos e todos os seus `subTabs`:
- `Dashboard` (path `/dashboard`)
- `Lojistas` (path `/lojistas/diretorio`)
- `Treinamentos` (path `/treinamentos`)
- `Seguros` (path `/seguros`)
- `Manutenção` (path `/manutencao`)
- `Sinistros` (path `/sinistros/novo`)
- `Marketing` (path `/marketing`)
- `Institucional` (path `/institucional`)
- `Relatórios` (path `/relatorios`)

Mantenha apenas o item `Comercial` com seus `subTabs` atuais (Dashboard, Propostas, Contratos, Histórico, Disponibilidade, Relatórios).

**1.2 Remover também em `src/app/routes.tsx`** todas as rotas relacionadas aos menus removidos acima. Mantenha apenas a rota de login, a rota raiz com `Layout`, e as sub-rotas do comercial.

**1.3 Persistência de sub-aba ao navegar.**

Nas sub-abas internas do Comercial (Dashboard, Propostas, Contratos, Histórico, Disponibilidade, Relatórios), preserve o estado da última aba visitada ao retornar para ela durante a mesma sessão. Use `sessionStorage` para guardar a chave da aba ativa de cada página. Ao montar o componente, leia o valor salvo e restaure a aba correspondente.

**1.4 Redesenho visual e comportamento da sidebar.**

Atualize o menu lateral em `Layout.tsx` para seguir exatamente este comportamento:

**Estado aberto:**
- Sidebar fixa à esquerda com fundo vermelho escuro (use a cor já existente no design system do projeto, ex: `#8B1A1A` ou a variável CSS equivalente)
- No topo: logo do Flamboyant existente no projeto (`src/imports/logo_2024.png`) acompanhada do texto `"Gestão Premium"` em fonte menor, leve e em cor clara
- Itens de menu com ícone + texto lado a lado; ícones levemente menores, mais finos e polidos (tamanho `w-4 h-4`, `strokeWidth={1.5}`)
- Item ativo (rota atual) com fundo levemente mais claro e bordas arredondadas (`rounded-md`), sem quebrar o alinhamento dos demais itens
- No rodapé: área fixa com avatar colorido (iniciais do usuário em círculo), nome completo e e-mail do usuário logado (leia da `sessionStorage` se disponível)
- No canto superior direito da sidebar: botão com ícone de seta apontando para a esquerda (`ChevronLeft` do lucide-react) para fechar a sidebar

**Estado fechado:**
- A sidebar colapsa completamente (largura `0` ou `translate-x-[-100%]`), desaparecendo da tela
- Aparece um botão flutuante fixo no canto superior esquerdo da tela (`fixed top-4 left-4 z-50`) com ícone de 3 barras (`Menu` do lucide-react) para reabrir a sidebar
- O conteúdo principal ocupa toda a largura disponível

**Animações:**
- Use `transition-all duration-300 ease-in-out` tanto na sidebar quanto no botão flutuante
- Ao clicar na seta `<`: sidebar fecha com transição suave (300ms), o ícone de seta desaparece e o botão de 3 barras aparece com `opacity-100`
- Ao clicar nas 3 barras: sidebar abre com transição suave (300ms), o botão de 3 barras desaparece e a seta reaparece
- Use um estado React `const [sidebarOpen, setSidebarOpen] = useState(true)` para controlar a visibilidade
- Persista o estado da sidebar no `localStorage` com a chave `"sidebar_open"` para manter a preferência do usuário entre sessões

**1.5 Substituir "Piso 1 / 2 / 3" por "P / S / T" em todo o sistema.**

Em todos os arquivos `.tsx` e `.ts` do projeto, substitua:
- `'L1'` → `'P'` e `"Piso 1"` → `"P"` (exibição)
- `'L2'` → `'S'` e `"Piso 2"` → `"S"` (exibição)
- `'L3'` → `'T'` e `"Piso 3"` → `"T"` (exibição)

Isso inclui o tipo `piso: 'L1' | 'L2' | 'L3'` em `comercialData.ts` (altere para `'P' | 'S' | 'T'`), todos os dados dos lojistas no array `keyStores`, os filtros de piso nos componentes, os labels dos gráficos e qualquer texto de exibição que mencione "Piso 1", "Piso 2" ou "Piso 3". Mantenha os prefixos dos IDs de unidade intactos (ex: `L1-001` permanece `L1-001` — apenas a exibição do piso muda).

---

## 2. DASHBOARD COMERCIAL — `src/app/pages/comercial/ComercialDashboard.tsx`

Remova completamente os seguintes elementos visuais e seu código relacionado:

- O card **"Receita Total / Mês"** e suas subdivisões (Receita Aluguel e Receita Vendas)
- O gráfico **"Evolução da Receita Mensal"** (`revenueEvolution`) e todo o bloco JSX que o envolve
- O gráfico **"Receita por Categoria"** (`receitaBySegmento`)
- O gráfico **"Receita por Piso"** (`receitaByPiso`)
- As funções `totalRevenue`, `baseAluguel`, `receitaMensal`, `receitaAluguel`, `receitaVendas` e os `useMemo` relacionados

Mantenha todos os outros cards de KPI (total de lojas, ocupação, disponíveis, vencendo, propostas ativas) e os demais elementos do dashboard.

**Após a remoção, replique nesta página os gráficos que existem em `ComercialReports.tsx`:**
- Gráfico de barras de ocupação por segmento (`segmentosChart`)
- Gráfico de pizza de distribuição por tipo de contrato (`multasChart`)
- Os demais gráficos presentes na aba de relatórios que não sejam de receita ou desempenho

Importe os dados e funções necessárias de `comercialData.ts` e `comercialStore.ts` para renderizá-los no dashboard com o mesmo visual já utilizado em `ComercialReports.tsx`.

---

## 3. PROPOSTAS — `src/app/pages/comercial/ComercialProposals.tsx` e `src/app/data/comercialData.ts`

**3.1 Alterar os status possíveis de propostas.**

Em `comercialData.ts`, altere o tipo `StatusProposta` para:

```ts
export type StatusProposta =
  | "Aguardando análise financeira"
  | "Aguardando análise do comitê"
  | "Aprovado"
  | "Reprovado"
  | "Cancelado";
```

Em `ComercialProposals.tsx`, atualize o objeto `STATUS_COLORS` e o componente `StatusIcon` para mapear os novos status com cores e ícones coerentes:
- `"Aguardando análise financeira"` → amarelo, ícone `Clock`
- `"Aguardando análise do comitê"` → roxo, ícone `Eye`
- `"Aprovado"` → verde, ícone `CheckCircle`
- `"Reprovado"` → vermelho, ícone `XCircle`
- `"Cancelado"` → cinza, ícone `XCircle`

Atualize também os dados do array `propostasAtivas` em `comercialData.ts` para que os status existentes sejam migrados para os novos valores mais próximos (ex: "Aceita" → "Aprovado", "Em Análise" → "Aguardando análise financeira", "Em Negociação" → "Aguardando análise do comitê", "Recusada" → "Reprovado", "Expirada" → "Cancelado", "Pendente" → "Aguardando análise financeira").

**3.2 Adicionar filtro por período na aba de Propostas.**

Copie o filtro de data (`dateFrom` e `dateTo` com inputs `<input type="date">`) que existe em `ComercialHistory.tsx` e adicione-o na barra de filtros de `ComercialProposals.tsx`, mantendo os filtros já existentes (status, tipo, segmento, piso, busca por nome).

**Não adicione períodos pré-definidos** (botões como "Último mês", "Último trimestre" etc.). O filtro deve ter apenas os dois campos de data: "De" e "Até".

Aplique o filtro de data sobre o campo `dataCriacao` das propostas.

---

## 4. CONTRATOS — `src/app/pages/comercial/ComercialContracts.tsx`

Remova completamente o arquivo `ComercialContracts.tsx`.

Em `src/app/routes.tsx`, remova a rota `/comercial/contratos`.

Em `src/app/components/Layout.tsx`, remova o subTab `{ label: "Contratos", path: "/comercial/contratos" }` do item Comercial.

Em `src/app/data/comercialStore.ts`, remova as funções `getGeneratedContracts` e `addGeneratedContract` e seus dados relacionados, caso existam e não sejam utilizadas por outros componentes.

---

## 5. HISTÓRICO — `src/app/pages/comercial/ComercialHistory.tsx`

Remova completamente o arquivo `ComercialHistory.tsx`.

Em `src/app/routes.tsx`, remova a rota `/comercial/historico`.

Em `src/app/components/Layout.tsx`, remova o subTab `{ label: "Histórico", path: "/comercial/historico" }` do item Comercial.

---

## 6. RELATÓRIOS — `src/app/pages/comercial/ComercialReports.tsx`

**6.1 Remover os 4 cards de KPI do topo da página.**

Remova o bloco JSX que contém os cards com os seguintes dados:
- Receita Mensal Total
- Receita % Vendas/Mês
- E quaisquer outros cards de KPI no topo da página de relatórios

**6.2 Remover a aba "Desempenho" e seu conteúdo.**

No array de abas de tipo de relatório (`reportType`), remova o item `{ id: "desempenho", label: "Desempenho", icon: Activity }`.

Remova o bloco JSX `{reportType === "desempenho" && (...)}` e todo o código relacionado ao gráfico de desempenho dos contratos.

Remova do array de campos disponíveis (`FIELDS`) os campos:
- `{ id: "desempenho", label: "Desempenho (%)", ... }`
- `{ id: "receitaPercentual", label: "Receita % Vendas/Mês", ... }`

**6.3 Os gráficos restantes (ocupação por segmento, distribuição por tipo de contrato, e demais que não sejam de receita ou desempenho) já devem ter sido replicados no Dashboard conforme o item 2. Mantenha-os também aqui em Relatórios.**