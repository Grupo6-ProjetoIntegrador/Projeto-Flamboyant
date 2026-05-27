# ============================================================
# Dockerfile — Frontend React/Vite (Projeto Flamboyant)
# Multi-stage: Node faz o build, nginx serve os estáticos
# ============================================================

# ── Stage 1: Build ───────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar manifesto de dependências primeiro (cache)
COPY package.json package-lock.json* ./
RUN npm ci --frozen-lockfile

# Copiar código-fonte
COPY . .

# Build de produção (VITE_API_URL injetada via build-arg)
ARG VITE_API_URL=http://localhost:8080/api/v1
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# ── Stage 2: Serve com nginx ──────────────────────────────────
FROM nginx:1.27-alpine

# Remover config padrão do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Configuração customizada para SPA (React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar arquivos estáticos do build
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
