# Projeto-Flamboyant 🏬

O projeto tem como objetivo a concepção de uma plataforma integrada de gestão de lojistas, capaz de consolidar informações provenientes de diferentes áreas do shopping, permitindo rastreabilidade, análise estratégica e apoio à tomada de decisão.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado na sua máquina:

- [Node.js](https://nodejs.org) v18 ou superior (recomendado: 20 LTS)
- [pnpm](https://pnpm.io) (recomendado) ou npm/yarn

Verifique se o Node.js está instalado:

```bash
node --version
```

Instale o pnpm globalmente (caso ainda não tenha):

```bash
npm install -g pnpm
```

### 🔧 Instalação

**1. Clone o repositório ou extraia o arquivo ZIP na sua máquina:**

```bash
git clone https://github.com/seu-usuario/projeto-flamboyant.git
```

**2. Acesse a pasta do projeto:**

```bash
cd Figma
```

**3. Instale as dependências do projeto:**

```bash
npm install
```

**4. Instale o `react` e `react-dom` manualmente:**

> `react` e `react-dom` estão declarados como `peerDependencies` opcionais no `package.json`, o que significa que alguns gerenciadores de pacotes podem não instalá-los automaticamente. Execute este segundo comando para garantir que estejam presentes:

```bash
npm install react@18.3.1 react-dom@18.3.1
```

**5. Inicie o servidor de desenvolvimento:**

```bash
npm run dev
```

Acesse em: [http://localhost:5173](http://localhost:5173)

## 🗂️ Estrutura do Projeto

```
Figma/
├── src/
│   ├── app/
│   │   ├── components/    → Layout, modais, componentes UI
│   │   ├── data/          → Dados mockados e store
│   │   ├── pages/         → Páginas por seção (sinistros, comercial…)
│   │   ├── App.tsx        → Raiz da aplicação
│   │   ├── routes.tsx     → Definição de rotas
│   │   └── store.ts       → Tipos e dados dos sinistros
│   ├── assets/            → Imagens de assets
│   ├── imports/           → Logo, PDF e design system
│   ├── styles/            → CSS global, tema, Tailwind
│   └── main.tsx           → Ponto de entrada
├── index.html
├── vite.config.ts
└── package.json
```

## 🛠️ Construído com

- [React](https://react.dev) `18.3.1` — Framework principal
- [Vite](https://vitejs.dev) `6.3.5` — Bundler e servidor de desenvolvimento
- [TypeScript](https://www.typescriptlang.org) — Tipagem estática
- [Tailwind CSS](https://tailwindcss.com) `4.1.12` — Estilização
- [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com) — Componentes de interface
- [React Router](https://reactrouter.com) `7.13.0` — Roteamento
- [Recharts](https://recharts.org) — Gráficos e visualizações
- [React Hook Form](https://react-hook-form.com) — Gerenciamento de formulários
- [Lucide React](https://lucide.dev) — Ícones

## ✒️ Autores

- **Equipe BES-2026** — *Desenvolvimento* — [Projeto Flamboyant](https://github.com/seu-usuario/projeto-flamboyant)

---
