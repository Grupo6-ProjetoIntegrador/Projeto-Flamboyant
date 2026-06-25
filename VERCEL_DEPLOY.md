# Deploy na Vercel com API em Docker

## Importante

A Vercel faz deploy do frontend Vite e tambem possui runtime proprio para Go, mas ela nao sobe `docker-compose.yml` com Postgres dentro do projeto. Para este projeto, o caminho preparado aqui e:

- Frontend React/Vite na Vercel.
- API Go + Postgres rodando com Docker em um host de container, como VPS, Render, Railway, Fly.io ou outro servidor.
- Frontend apontando para a API por `VITE_API_URL`.

## 1. Subir a API com Docker

No servidor onde a API vai rodar, configure as variaveis do `.env.production.example` e rode:

```bash
docker compose -f docker-compose.prod.yml --env-file .env.production up -d --build
```

A API precisa ficar acessivel publicamente por HTTPS. Exemplo:

```text
https://sua-api.example.com
```

Depois, teste:

```text
https://sua-api.example.com/health
https://sua-api.example.com/ping
```

## 2. Configurar a Vercel

Ao importar o repositorio na Vercel, use as configuracoes do `vercel.json` da raiz:

- Framework: Vite
- Install Command: `cd Figma && npm ci`
- Build Command: `cd Figma && npm run build`
- Output Directory: `Figma/dist`

Configure esta Environment Variable no projeto da Vercel:

```env
VITE_API_URL=https://sua-api.example.com/api/v1
```

## 3. Configurar CORS da API

No host Docker da API, ajuste:

```env
ALLOWED_ORIGIN=https://seu-projeto.vercel.app
```

Se usar dominio proprio na Vercel, coloque o dominio final:

```env
ALLOWED_ORIGIN=https://www.seudominio.com
```

## 4. Observacoes

O arquivo `vercel.json` tambem configura fallback de SPA para rotas do React Router.

O Docker continua disponivel para ambiente local com `docker-compose.yml` e para producao da API com `docker-compose.prod.yml`.
