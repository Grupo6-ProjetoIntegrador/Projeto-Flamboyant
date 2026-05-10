# \# Projeto-Flamboyant

# 

# O projeto tem como objetivo a concepção de uma plataforma integrada de gestão de lojistas, capaz de consolidar informações provenientes de diferentes áreas do shopping, permitindo rastreabilidade, análise estratégica e apoio à tomada de decisão.

# 

# \---

# 

# \# BES-2026 · Protótipos Figma — Guia de Configuração

# 

# \---

# 

# \## 1. Visão Geral do Projeto

# 

# Este projeto é um protótipo de alta fidelidade exportado do Figma Make, representando o sistema interno do JP Mall. Ele utiliza React com Vite como bundler, Tailwind CSS v4 para estilização e uma coleção de componentes baseados em shadcn/ui e Radix UI.

# 

# \### Estrutura de pastas

# 

# ```

# Figma/

# ├── src/

# │   ├── app/

# │   │   ├── components/    → Layout, modais, componentes UI

# │   │   ├── data/          → Dados mockados e store

# │   │   ├── pages/         → Páginas por seção (sinistros, comercial…)

# │   │   ├── App.tsx        → Raiz da aplicação

# │   │   ├── routes.tsx     → Definição de rotas

# │   │   └── store.ts       → Tipos e dados dos sinistros

# │   ├── assets/            → Imagens de assets

# │   ├── imports/           → Logo, PDF e design system

# │   ├── styles/            → CSS global, tema, Tailwind

# │   └── main.tsx           → Ponto de entrada

# └── index.html

# ```

# 

# \---

# 

# \## 2.1 Node.js

# 

# O projeto requer Node.js versão 18 ou superior (recomendado: 20 LTS).

# 

# Verifique a versão instalada:

# 

# ```bash

# node --version

# ```

# 

# Caso não tenha o Node.js instalado, baixe em: https://nodejs.org

# 

# \---

# 

# \## 2.2 Gerenciador de Pacotes

# 

# O projeto usa `pnpm` como gerenciador principal (indicado pelo arquivo `pnpm-workspace.yaml`), mas também funciona com `npm` ou `yarn`.

# 

# Instalar o pnpm globalmente (recomendado):

# 

# ```bash

# npm install -g pnpm

# ```

# 

# \---

# 

# \## 4. Instalação das Dependências

# 

# \### 4.1 — Instalar as dependências do projeto

# 

# Instala todos os pacotes declarados no `package.json`:

# 

# ```bash

# npm install

# ```

# 

# \### 4.2 — Instalar react e react-dom manualmente

# 

# `react` e `react-dom` estão declarados como `peerDependencies` opcionais no `package.json`, o que significa que alguns gerenciadores de pacotes podem não instalá-los automaticamente. Execute este segundo comando para garantir que estejam presentes:

# 

# ```bash

# npm install react@18.3.1 react-dom@18.3.1

# ```

# 

# 



