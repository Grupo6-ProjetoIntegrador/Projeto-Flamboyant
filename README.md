# Projeto-Flamboyant 🏬

O projeto tem como objetivo a concepção de uma plataforma integrada de gestão de lojistas, capaz de consolidar informações provenientes de diferentes áreas do shopping, permitindo rastreabilidade, análise estratégica e apoio à tomada de decisão.

## 📋 Sumário

- [🚀 Começando](#-começando)
  - [📋 Pré-requisitos](#-pré-requisitos)
  - [🗄️ Banco de dados](#️-banco-de-dados)
  - [📄 Variáveis de ambiente](#-variáveis-de-ambiente)
  - [▶️ Executando o projeto](#️-executando-o-projeto)
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
> Sempre crie uma branch separada antes de começar qualquer desenvolvimento.
>
> **Via terminal:**
> ```bash
> git checkout main
> git pull
> git checkout -b feature/nome-da-sua-funcionalidade
> ```
>
> **Via GitHub Desktop:**
> 1. Certifique-se de estar na branch `main` no seletor do topo
> 2. Clique em **Fetch origin** para garantir que está atualizado
> 3. Vá em **Branch → New Branch** (`Ctrl+Shift+N`)
> 4. Digite o nome no padrão `feature/nome-da-funcionalidade` e clique em **Create Branch**
> 5. A nova branch já estará selecionada e pronta para receber suas alterações
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

Instale as ferramentas abaixo antes de prosseguir. O script de inicialização cuida do restante automaticamente.

| Ferramenta | Versão mínima | Download |
|---|---|---|
| [Go](https://go.dev/dl/) | 1.21+ | https://go.dev/dl/ |
| [Node.js](https://nodejs.org) | 18 LTS+ (recomendado: 20 LTS) | https://nodejs.org |
| [PostgreSQL](https://www.postgresql.org/download/) | 14+ | https://www.postgresql.org/download/ |

> **pnpm** não precisa ser instalado manualmente — o script `start.ps1` o instala automaticamente caso não esteja presente.

Verifique se as instalações estão corretas:

```bash
go version
node --version
psql --version
```

---

### 🗄️ Banco de dados

> [!IMPORTANT]
> **O PostgreSQL precisa estar instalado e em execução para a API funcionar.**

Após instalar o PostgreSQL, certifique-se de que o serviço está rodando. No Windows, você pode verificar e iniciar pelo **Services** (`services.msc`) ou pelo painel de controle do instalador do PostgreSQL.

O banco de dados e todas as tabelas são criados automaticamente pelas migrations ao iniciar a API — nenhuma configuração manual é necessária.

---

### 📄 Variáveis de ambiente

O projeto requer dois arquivos `.env` que **não estão versionados** no repositório. Crie-os manualmente antes de rodar o projeto.

#### API — `API/.env`

Crie o arquivo `API/.env` na raiz da pasta `API/` com o seguinte conteúdo:

```env
SERVER_PORT=8080
GIN_MODE=debug
ALLOWED_ORIGIN=
JWT_SECRET=bes2026-secret-change-in-production
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=jp-mall
DB_SSLMODE=disable
```

| Variável | Descrição |
|---|---|
| `SERVER_PORT` | Porta em que a API será iniciada |
| `GIN_MODE` | Modo do framework (`debug` ou `release`) |
| `ALLOWED_ORIGIN` | Origem permitida pelo CORS (deixe vazio para aceitar todas em dev) |
| `JWT_SECRET` | Segredo para assinatura dos tokens JWT |
| `DB_HOST` | Host do PostgreSQL |
| `DB_PORT` | Porta do PostgreSQL (padrão: `5432`) |
| `DB_USER` | Usuário do banco de dados |
| `DB_PASSWORD` | Senha do banco de dados |
| `DB_NAME` | Nome do banco de dados |
| `DB_SSLMODE` | Modo SSL do PostgreSQL (`disable` para desenvolvimento local) |

#### Frontend — `Figma/.env`

Crie o arquivo `Figma/.env` na raiz da pasta `Figma/` com o seguinte conteúdo:

```env
VITE_API_URL=http://localhost:8080/api/v1
```

| Variável | Descrição |
|---|---|
| `VITE_API_URL` | URL base da API consumida pelo frontend |

> Caso o arquivo `Figma/.env` não exista, o script `start.ps1` o criará automaticamente com o valor padrão acima.

---

### ▶️ Executando o projeto

Com os pré-requisitos instalados, o banco de dados em execução e os arquivos `.env` criados, basta rodar o script na raiz do projeto:

```powershell
.\start.ps1
```

O script faz tudo automaticamente:

- Verifica se Go, Node.js e npm estão instalados
- Instala o **pnpm** globalmente, caso não esteja presente
- Atualiza as dependências Go (`go mod tidy`)
- Instala as dependências do frontend com `pnpm install`
- Inicia a **API** em uma janela separada na porta `8080`
- Inicia o **Frontend** em uma janela separada na porta `5173`

Após a execução, os serviços estarão disponíveis em:

| Serviço | URL |
|---|---|
| API | http://localhost:8080 |
| Frontend | http://localhost:5173 |

Para encerrar, feche as janelas abertas pelo script.

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
│   ├── .env                    → Variáveis de ambiente da API (não versionado)
│   ├── .env.example            → Exemplo de variáveis de ambiente
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
│   ├── .env                    → Variáveis de ambiente do frontend (não versionado)
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
├── start.ps1                   → Script de inicialização do projeto
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
- [PostgreSQL](https://www.postgresql.org) `14+` — Banco de dados relacional
- [Postman](https://www.postman.com) — Testes e documentação da API

---

## ✒️ Autores

- **DanielNovaiz** — [github.com/DanielNovaiz](https://github.com/DanielNovaiz)
- **Felipe Fernandes** — [github.com/FELIIPE505](https://github.com/FELIIPE505)
- **Herlison Silva Assunção** — [github.com/herli-son-ufg](https://github.com/herli-son-ufg)
- **Matheus-slvmr** — [github.com/Matheus-slvmr](https://github.com/Matheus-slvmr)
- **militao-discente** — [github.com/militao-discente](https://github.com/militao-discente)

---
