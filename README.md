# Projeto-Flamboyant 🏬

O projeto tem como objetivo a concepção de uma plataforma integrada de gestão de lojistas, capaz de consolidar informações provenientes de diferentes áreas do shopping, permitindo rastreabilidade, análise estratégica e apoio à tomada de decisão.

## 📋 Sumário

- [🚀 Começando](#-começando)
  - [📋 Pré-requisitos](#-pré-requisitos)
  - [🔧 Instalação do frontend](#-instalação-do-frontend)
- [⚙️ Executando a API](#️-executando-a-api)
  - [📋 Pré-requisitos da API](#-pré-requisitos-da-api)
  - [🔧 Configuração e execução](#-configuração-e-execução)
- [🧪 Testando com Postman](#-testando-com-postman)
  - [📥 Importando a coleção](#-importando-a-coleção)
  - [🌐 Configurando o ambiente](#-configurando-o-ambiente)
- [🗂️ Estrutura do Projeto](#️-estrutura-do-projeto)
- [🛠️ Construído com](#️-construído-com)
- [✒️ Autores](#️-autores)

---

> [!IMPORTANT]
> **Atenção ao diretório de execução!**
> Todos os comandos descritos neste guia devem ser executados dentro do diretório correto de cada parte do projeto. Executar um comando no diretório errado causará erros. Fique atento ao `cd` indicado antes de cada bloco de comandos.

> [!WARNING]
> **Não faça alterações diretamente na branch `main`!**
>
> Sempre crie uma branch separada antes de começar qualquer desenvolvimento:
>
> ```bash
> git checkout main
> git pull
> git checkout -b feature/nome-da-sua-funcionalidade
> ```
>
> **Por que isso é importante?**
>
> A `main` representa o estado estável e funcional do projeto — o código que todos os membros da equipe tomam como base. Commitar diretamente nela traz riscos sérios:
>
> - **Instabilidade para o time:** se um trabalho incompleto ou com bug for enviado à `main`, qualquer outro desenvolvedor que atualizar seu repositório receberá código quebrado, travando o progresso de toda a equipe.
> - **Conflitos difíceis de resolver:** com múltiplos desenvolvedores enviando código simultaneamente para o mesmo branch, conflitos de merge se tornam frequentes e difíceis de rastrear.
> - **Impossibilidade de code review:** trabalhar em branches separadas permite abrir Pull Requests, onde o código pode ser revisado antes de entrar na base principal — prática essencial para a qualidade do software.
> - **Dificuldade em reverter erros:** sem o isolamento por branches, identificar e desfazer um bug introduzido na `main` exige muito mais esforço do que simplesmente fechar ou reverter uma branch isolada.
>
> Essa prática é um dos pilares do **Git Flow**, workflow criado por Vincent Driessen e adotado amplamente pela indústria de software, que define a `main` como exclusiva para código em produção — estável, revisado e validado.
>
> **Fontes:**
> - ABREU, Almerindo. *Gitflow: O modelo de trabalho orientado à branches*. 2021. Disponível em: https://almerindoabreu.netlify.app/boas-práticas-git-flow/
> - PRESUMIDO, Victor. *Git: Melhores práticas*. Disponível em: https://blog.victorpre.com/git-melhores-praticas/
> - GitLab. *Version Control Best Practices*. Disponível em: https://about.gitlab.com/topics/version-control/version-control-best-practices/

---

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

### 🔧 Instalação do frontend

**1. Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/projeto-flamboyant.git
```

**2. Acesse a pasta do frontend:**

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

---

## ⚙️ Executando a API

### 📋 Pré-requisitos da API

Antes de começar, você vai precisar ter instalado:

- [Go](https://go.dev/dl/) v1.21 ou superior
- [Visual Studio Code](https://code.visualstudio.com/) com a extensão [Go](https://marketplace.visualstudio.com/items?itemName=golang.Go) instalada

Verifique se o Go está instalado:

```bash
go version
```

Para instalar a extensão no VS Code:

1. Abra o VS Code
2. Acesse a aba **Extensions** (`Ctrl+Shift+X`)
3. Pesquise por `Go` e instale a extensão oficial da **Go Team at Google**

### 🔧 Configuração e execução

**1. Abra a pasta da API no VS Code:**

```bash
cd API
```

**2. Instale as dependências Go:**

```bash
go mod tidy
```

**3. Execute a API:**

```bash
go run cmd/main.go
```

A API estará disponível em: [http://localhost:8080](http://localhost:8080)

Para verificar se está no ar, acesse no navegador ou dispare pelo Postman:

- **Método:** `GET`
- **URL:** `http://localhost:8080/ping`
- **Resposta esperada:** `200 OK` → `{ "message": "pong" }`

---

## 🧪 Testando com Postman

### 📥 Importando a coleção

1. Abra o Postman
2. Clique em **Import** no canto superior esquerdo
3. Selecione a pasta `postman/collections/` deste repositório
4. O Postman detectará os arquivos `.yaml` e importará a coleção automaticamente

### 🌐 Configurando o ambiente

1. No Postman, vá em **Environments** → **Create Environment**
2. Adicione as seguintes variáveis:

| Variável | Valor | Descrição |
|---|---|---|
| `base_url` | `http://localhost:8080` | URL base da API |

3. Selecione o ambiente criado no seletor do canto superior direito

> **Atenção:** os arquivos de `environments/` e `globals/` estão no `.gitignore` pois podem conter credenciais. Cada membro da equipe deve criar o seu ambiente local conforme a tabela acima.

---

## 🗂️ Estrutura do Projeto

```
Projeto-Flamboyant/
├── API/                        → API REST em Go (Gin)
│   ├── cmd/
│   │   └── main.go             → Ponto de entrada da API
│   ├── go.mod
│   └── go.sum
├── Figma/                      → Frontend React/Vite
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/     → Layout, modais, componentes UI
│   │   │   ├── data/           → Dados mockados e store
│   │   │   ├── pages/          → Páginas por seção (sinistros, comercial…)
│   │   │   ├── App.tsx         → Raiz da aplicação
│   │   │   ├── routes.tsx      → Definição de rotas
│   │   │   └── store.ts        → Tipos e dados dos sinistros
│   │   ├── assets/
│   │   ├── styles/
│   │   └── main.tsx
│   ├── index.html
│   ├── vite.config.ts
│   └── package.json
├── GO/
│   └── models.go               → Structs Go das entidades do projeto
├── postman/
│   ├── collections/            → Coleções de requisições por recurso
│   ├── specs/                  → Especificações OpenAPI/YAML da API
│   ├── flows/                  → Fluxos de teste encadeados
│   └── mocks/                  → Servidores mock para testes sem API real
└── README.md
```

---

## 🛠️ Construído com

- [React](https://react.dev) `18.3.1` — Framework principal do frontend
- [Vite](https://vitejs.dev) `6.3.5` — Bundler e servidor de desenvolvimento
- [TypeScript](https://www.typescriptlang.org) — Tipagem estática
- [Tailwind CSS](https://tailwindcss.com) `4.1.12` — Estilização
- [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://www.radix-ui.com) — Componentes de interface
- [React Router](https://reactrouter.com) `7.13.0` — Roteamento
- [Recharts](https://recharts.org) — Gráficos e visualizações
- [React Hook Form](https://react-hook-form.com) — Gerenciamento de formulários
- [Go](https://go.dev) `1.21+` — Linguagem da API
- [Gin](https://gin-gonic.com) — Framework web para a API
- [Postman](https://www.postman.com) — Testes e documentação da API

---

## ✒️ Autores

- **Equipe BES-2026** — *Desenvolvimento* — [Projeto Flamboyant](https://github.com/seu-usuario/projeto-flamboyant)

---

⌨️ com ❤️ pela equipe do Projeto-Flamboyant 😊
