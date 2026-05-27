# Projeto-Flamboyant — Como rodar (guia rápido)

Este README reúne instruções práticas para executar o projeto localmente em Windows, Linux e macOS. Ele resume e amplia as instruções originais contidas em [COMO_RODAR_O_PROJETO.txt](COMO_RODAR_O_PROJETO.txt#L1-L200).

**Visão geral:** o repositório contém uma API em Go (pasta `API/`) e um frontend em React/Vite (pasta `Figma/`). A API cria automaticamente o banco de dados e dados iniciais na primeira execução.

**Arquivos úteis:** [API/.env.example](API/.env.example), [start.ps1](start.ps1), [debug.ps1](debug.ps1), [COMO_USAR_DEBUG.txt](COMO_USAR_DEBUG.txt).

**Sumário rápido**
- Requisitos
- Configuração (clonar, .env)
- Execução por sistema operacional (Windows / Linux / macOS)
- Problemas comuns

**Pré-requisitos (todos OS)**
- Go 1.21+ — `go version`
- Node.js 18+ (vem com npm) — `node --version`
- PostgreSQL (local) — confirme que o serviço está rodando

Se ainda não tiver, instale conforme o site oficial de cada ferramenta.

1) Clonar o repositório

```bash
git clone <URL-do-repositório>
cd Projeto-Flamboyant
```

2) Configurar o arquivo de ambiente da API

Copie o exemplo e edite os valores:

PowerShell (Windows):

```powershell
Copy-Item API\.env.example API\.env
```

Linux/macOS:

```bash
cp API/.env.example API/.env
```

Abra `API/.env` e preencha `DB_USER`, `DB_PASSWORD` e `JWT_SECRET`. `DB_NAME` padrão é `jp-mall`.

3) Banco de dados

Certifique-se de que o PostgreSQL está rodando. A API cria o banco `jp-mall`, as tabelas e seeds automaticamente na primeira execução — não é necessário criar manualmente.

4) Executar o projeto

Windows (recomendado — script automático):

```powershell
.\start.ps1
```

O `start.ps1` verifica dependências, instala pacotes e abre duas janelas: API (porta 8080) e frontend (porta 5173).

Linux / macOS (manual):

API (em um terminal):

```bash
cd API
go mod tidy
go run cmd/main.go
```

Frontend (em outro terminal):

```bash
cd Figma
npm install   # ou pnpm install
npm run dev
```

Observação: o frontend usa `Figma/.env` para apontar a URL da API. Se necessário, crie `Figma/.env` com `VITE_API_URL=http://localhost:8080`.

5) Acessar a aplicação

- Frontend: http://localhost:5173
- API: http://localhost:8080 (ex.: `GET /ping` retorna `{ "message": "pong" }`)

6) Debug (opcional)

No Windows há um script de debug:

```powershell
.\debug.ps1
```

Consulte [COMO_USAR_DEBUG.txt](COMO_USAR_DEBUG.txt#L1-L200) para instruções detalhadas.

Parar a aplicação: feche os terminais ou janelas abertas pelo `start.ps1`.

Problemas comuns
- Erro `dial tcp: connect: connection refused`: PostgreSQL não está rodando ou credenciais em `API/.env` incorretas.
- `go: command not found`: instale Go e reinicie o terminal.
- `npm: command not found`: instale Node.js e reinicie o terminal.
- Porta em uso (8080 ou 5173): encerre o processo que usa a porta ou altere `SERVER_PORT` em `API/.env` e `VITE_API_URL` em `Figma/.env`.

Ajuda adicional
- Guia original com detalhes de execução e troubleshooting: [COMO_RODAR_O_PROJETO.txt](COMO_RODAR_O_PROJETO.txt#L1-L200)
- Instruções de debug: [COMO_USAR_DEBUG.txt](COMO_USAR_DEBUG.txt#L1-L200)

Se quiser, eu posso também:
- executar um teste local (rodar `go run` / `npm run dev`) aqui no workspace,
- ou gerar um arquivo de checklist com os comandos exatos para cada SO.

---

⌨️ com ❤️ pela equipe do Projeto-Flamboyant
