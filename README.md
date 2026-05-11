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
- [MongoDB](https://www.mongodb.com/try/download/community) rodando localmente (porta padrão `27017`) ou uma connection string do [MongoDB Atlas](https://www.mongodb.com/atlas)

Verifique se o Go está instalado:

```bash
go version
```

### 🔧 Configuração e execução

**1. Acesse a pasta da API:**

```bash
cd API
```

**2. Crie o arquivo de variáveis de ambiente:**

> Crie um arquivo `.env` na raiz de `API/` com o seguinte conteúdo:

```env
PORT=8080
MONGO_URI=mongodb://localhost:27017
MONGO_DB=jp-mall
GIN_MODE=debug
```

**3. Instale as dependências Go:**

```bash
go mod tidy
```

**4. Execute em modo desenvolvimento:**

```bash
go run cmd/main.go
```

**Ou compile e execute o binário:**

```bash
go build -o bin/api cmd/main.go
./bin/api
```

A API estará disponível em: [http://localhost:8080](http://localhost:8080)

Para verificar se está no ar:

```bash
curl http://localhost:8080/ping
```

Resposta esperada:

```json
{ "message": "pong" }
```

**5. Popule o banco de dados:**

Execute o script SQL disponível em `Banco de dados/jp-mall.sql`:

```bash
mysql -u root -p < "Banco de dados/jp-mall.sql"
```

---

## 🧪 Testando com Postman

### 📥 Importando a coleção

**Opção 1 — Via Postman Desktop (recomendado):**

1. Abra o Postman
2. Clique em **Import** no canto superior esquerdo
3. Selecione a pasta `postman/collections/` deste repositório
4. O Postman detectará os arquivos `.yaml` e importará a coleção automaticamente

**Opção 2 — Via Postman CLI:**

```bash
# Instale o Postman CLI
npm install -g @postman/cli

# Faça login com sua API Key
postman login --with-api-key SUA_API_KEY

# Execute a coleção
postman collection run postman/collections/
```

### 🌐 Configurando o ambiente

1. No Postman, vá em **Environments** → **Create Environment**
2. Adicione as seguintes variáveis:

| Variável | Valor | Descrição |
|---|---|---|
| `base_url` | `http://localhost:8080` | URL base da API |
| `mongo_db` | `jp-mall` | Nome do banco de dados |

3. Selecione o ambiente criado no seletor do canto superior direito

> **Atenção:** os arquivos de `environments/` e `globals/` estão no `.gitignore` pois podem conter credenciais. Cada membro da equipe deve criar o seu ambiente local conforme a tabela acima.

**Testando o health check:**

Com a API rodando e o ambiente configurado, dispare a primeira requisição:

- **Método:** `GET`
- **URL:** `{{base_url}}/ping`
- **Resposta esperada:** `200 OK` → `{ "message": "pong" }`

---

## 🗂️ Estrutura do Projeto

```
Projeto-Flamboyant/
├── API/                        → API REST em Go (Gin + MongoDB)
│   ├── cmd/
│   │   └── main.go             → Ponto de entrada da API
│   ├── go.mod
│   └── go.sum
├── Banco de dados/
│   └── jp-mall.sql             → Script de criação e população do banco
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
│   └── models.go               → Structs Go mapeando o banco de dados
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
- [MongoDB](https://www.mongodb.com) — Banco de dados NoSQL
- [Postman](https://www.postman.com) — Testes e documentação da API

---

## ✒️ Autores

- **Equipe BES-2026** — *Desenvolvimento* — [Projeto Flamboyant](https://github.com/seu-usuario/projeto-flamboyant)

---

⌨️ com ❤️ pela equipe do Projeto-Flamboyant 😊
