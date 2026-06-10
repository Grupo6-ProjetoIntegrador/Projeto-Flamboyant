# C4 Model — Projeto Flamboyant
> Sistema de Gestão de Propostas Comerciais do Shopping Flamboyant

**Versão:** 1.0  
**Data:** Junho 2026  
**Autores:** Equipe Projeto Flamboyant (UFG — BES-2026)  
**Baseado em:** [C4 Model](https://c4model.com) por Simon Brown

---

## Sumário

1. [Diagrama de Contexto do Sistema](#1-diagrama-de-contexto-do-sistema)
2. [Diagrama de Contêiner](#2-diagrama-de-contêiner)
3. [Diagrama de Componentes](#3-diagrama-de-componentes)
4. [Diagrama de Código](#4-diagrama-de-código)
5. [Diagrama da Paisagem do Sistema](#5-diagrama-da-paisagem-do-sistema)
6. [Diagrama Dinâmico](#6-diagrama-dinâmico)
7. [Diagrama de Implantação](#7-diagrama-de-implantação)
8. [Notação](#8-notação)
9. [Lista de Verificação de Revisão](#9-lista-de-verificação-de-revisão)
10. [Perguntas Frequentes](#10-perguntas-frequentes)

---

## 1. Diagrama de Contexto do Sistema

> **Nível 1 — Context Diagram**
> 
> O nível mais alto de abstração. Mostra o sistema como uma caixa preta e quem interage com ele.

### Descrição

O **Sistema Flamboyant** é uma plataforma web de gestão de propostas comerciais utilizada pela equipe interna do Shopping Flamboyant. Ele centraliza o ciclo de vida completo de propostas de locação de unidades comerciais — desde a criação até a aprovação ou reprovação pelo comitê.

```mermaid
C4Context
    title Diagrama de Contexto — Sistema Flamboyant

    Person(analista, "Analista Comercial", "Cria e acompanha propostas de locação para unidades do shopping.")
    Person(gestor, "Gestor / Comitê", "Aprova ou reprova propostas. Consulta KPIs e relatórios.")
    Person(admin, "Administrador", "Gerencia usuários e configurações do sistema.")

    System(flamboyant, "Sistema Flamboyant", "Plataforma web de gestão do ciclo de vida de propostas comerciais. Controla unidades, propostas, documentos e histórico de auditoria.")

    System_Ext(browser, "Navegador Web", "Chrome, Firefox, Edge — cliente HTTP do usuário final.")
    System_Ext(storage, "Armazenamento de Documentos", "Futuro: S3 / MinIO para arquivos PDF, DOCX, XLSX. Atualmente simulado via metadados.")
    System_Ext(email, "Serviço de E-mail", "Futuro: notificações automáticas por e-mail. Ainda não implementado.")

    Rel(analista, browser, "Acessa via")
    Rel(gestor, browser, "Acessa via")
    Rel(admin, browser, "Acessa via")
    Rel(browser, flamboyant, "Requisições HTTP/REST", "HTTPS :80 / :8080")
    Rel(flamboyant, storage, "Armazena / recupera documentos", "HTTP (futuro)")
    Rel(flamboyant, email, "Envia notificações", "SMTP (futuro)")

    UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```

### Atores e Responsabilidades

| Ator | Tipo | Responsabilidades |
|------|------|-------------------|
| Analista Comercial | Usuário Interno | Criar propostas, preencher sub-recursos, anexar documentos, acompanhar status |
| Gestor / Comitê | Usuário Interno | Visualizar KPIs, aprovar/reprovar propostas, registrar parecer do comitê |
| Administrador | Usuário Interno | Criar usuários, gerenciar credenciais |
| Armazenamento de Documentos | Sistema Externo (futuro) | Persistência de arquivos físicos (PDF, DOCX, XLSX, JPG, PNG) |
| Serviço de E-mail | Sistema Externo (futuro) | Notificações de mudança de status |

---

## 2. Diagrama de Contêiner

> **Nível 2 — Container Diagram**
>
> Detalha os contêineres (processos, stores, aplicações) que compõem o sistema e suas comunicações.

### Descrição

O sistema é orquestrado via **Docker Compose** e composto por três contêineres na rede interna `flamboyant-net`:

```mermaid
C4Container
    title Diagrama de Contêiner — Sistema Flamboyant

    Person(usuario, "Usuário", "Analista, Gestor ou Admin")

    Container_Boundary(flamboyant_boundary, "Sistema Flamboyant (Docker Compose)") {

        Container(frontend, "Frontend", "React 18 + TypeScript + Vite\nnginx :80", "Single Page Application. Arquitetura MVVM. Serve a interface de usuário para gestão de propostas, disponibilidade de unidades, dashboard e relatórios.")

        Container(api, "API REST", "Go 1.23 + Gin\n:8080", "Backend stateless. Expõe endpoints REST sob /api/v1. Responsável por autenticação JWT, CRUD de propostas, sub-recursos e histórico.")

        ContainerDb(postgres, "Banco de Dados", "PostgreSQL 16 Alpine\n:5432", "Armazena usuários, unidades, propostas, sub-recursos, documentos e histórico de auditoria. Gerenciado por migrations automáticas.")
    }

    Container_Ext(codegen, "Codegen", "Go Script\ncodegen/generate.go", "Ferramenta de desenvolvimento que lê migrations SQL e gera structs Go e interfaces TypeScript sincronizadas.")

    Rel(usuario, frontend, "Usa via navegador", "HTTPS :80")
    Rel(frontend, api, "Chamadas REST + Bearer token", "HTTP JSON :8080")
    Rel(api, postgres, "Queries SQL via pgx/v5", "TCP :5432")
    Rel(codegen, postgres, "Lê schema das migrations SQL", "arquivo .sql")
    Rel(codegen, api, "Gera entities/*.go", "arquivo .go")
    Rel(codegen, frontend, "Gera entities/*.ts", "arquivo .ts")

    UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```

### Tabela de Contêineres

| Contêiner | Tecnologia | Porta | Responsabilidade Principal |
|-----------|-----------|-------|---------------------------|
| `flamboyant-frontend` | React 18, Vite, TypeScript, nginx | 80 | SPA — interface de usuário |
| `flamboyant-api` | Go 1.23, Gin, pgx/v5, golang-migrate | 8080 | API REST — lógica de negócio |
| `flamboyant-postgres` | PostgreSQL 16 Alpine | 5432 | Persistência relacional |
| `codegen` (dev only) | Go script | — | Sincronização de tipos Go ↔ TypeScript |

### Comunicações

| De | Para | Protocolo | Dados |
|----|------|-----------|-------|
| Usuário | Frontend | HTTPS | HTML/JS/CSS |
| Frontend | API | HTTP REST | JSON + `Authorization: Bearer <jwt>` |
| API | PostgreSQL | TCP pgx | SQL + pgxpool |

---

## 3. Diagrama de Componentes

> **Nível 3 — Component Diagram**
>
> Detalha os componentes internos de cada contêiner.

### 3.1 Componentes da API (Go/Gin)

```mermaid
C4Component
    title Componentes — API Go (flamboyant-api)

    Container_Boundary(api_boundary, "API Go — flamboyant-api") {

        Component(main, "main.go", "Go / cmd", "Ponto de entrada. Inicializa config, database, handlers e server.")

        Component(config, "config.go", "Go / internal/config", "Lê variáveis de ambiente: SERVER_PORT, JWT_SECRET, JWT_DURATION, DB_*.")

        Component(database, "database.go", "Go / internal/database", "Cria e gerencia o pool de conexões pgxpool. Executa migrations pendentes via golang-migrate na inicialização.")

        Component(routes, "routes.go", "Go / internal/routes", "Registra todos os endpoints Gin. Aplica middleware de autenticação no grupo /api/v1.")

        Component(auth_middleware, "auth.go (middleware)", "Go / internal/middleware", "Valida JWT do header Authorization. Injeta user_id, user_email, user_nome, user_setor no contexto Gin.")

        Component(auth_handler, "AuthHandler", "Go / internal/handlers", "POST /auth/login — bcrypt + JWT.\nPOST /auth/logout — invalida token.\nGET  /auth/me — retorna usuário autenticado.")

        Component(propostas_handler, "PropostasHandler", "Go / internal/handlers", "CRUD de propostas e sub-recursos:\nGET/POST /propostas\nGET /propostas/:id\nPATCH /propostas/:id/status\nGET /propostas/:id/historico\ne mais 12 sub-rotas.")

        Component(unidades_handler, "UnidadesHandler", "Go / internal/handlers", "GET /unidades — lista com status calculado via subquery SQL.\nGET /unidades/:id — detalhe da unidade.")

        Component(entities, "entities/", "Go structs (gerados)", "Structs de domínio geradas pelo codegen: Proposta, Unidade, Usuario, sub-recursos e históricos. DO NOT EDIT.")
    }

    ContainerDb(postgres, "PostgreSQL", "Banco de Dados")

    Rel(main, config, "Inicializa")
    Rel(main, database, "Conecta")
    Rel(main, routes, "Registra rotas")
    Rel(routes, auth_middleware, "Aplica em /api/v1")
    Rel(routes, auth_handler, "Roteia /auth/*")
    Rel(routes, propostas_handler, "Roteia /propostas/*")
    Rel(routes, unidades_handler, "Roteia /unidades/*")
    Rel(auth_handler, postgres, "SELECT / UPDATE Usuario")
    Rel(propostas_handler, postgres, "SELECT / INSERT / UPDATE Proposta e sub-recursos")
    Rel(unidades_handler, postgres, "SELECT Unidade + subquery status")
    Rel(auth_handler, entities, "Usa structs")
    Rel(propostas_handler, entities, "Usa structs")
    Rel(unidades_handler, entities, "Usa structs")
```

---

### 3.2 Componentes do Frontend (React/TypeScript)

```mermaid
C4Component
    title Componentes — Frontend React (flamboyant-frontend)

    Container_Boundary(fe_boundary, "Frontend React — MVVM") {

        Component(app, "App.tsx + routes.tsx", "React / Routing", "Define as rotas da aplicação. Envolve tudo com AuthContext. Protege rotas privadas via PrivateRoute.")

        Component(auth_context, "AuthContext.tsx", "React Context", "Estado global de autenticação. Armazena token JWT e dados do usuário. Provê login/logout para toda a árvore de componentes.")

        Component_Ext(api_client, "apiClient.ts", "TypeScript / Fetch", "Único ponto de chamada HTTP. Usa VITE_API_URL + token Bearer. Abstrai fetch() para todo o sistema.")

        Component(use_api, "useApi.ts + useApiHealth.ts", "React Hooks", "Hook genérico de chamada assíncrona com estados loading/error/data. useApiHealth verifica disponibilidade da API.")

        Component(services, "PropostasService\nUnidadesService", "TypeScript / Model", "Camada Model do MVVM. Encapsula URLs e serialização dos endpoints da API. Única camada que conhece as rotas.")

        Component(viewmodels, "useComercialDashboard\nuseComercialProposals\nuseComercialAvailability\nuseComercialReports", "React Hooks / ViewModel", "Camada ViewModel. Contém filtros, ordenação, paginação, cálculo de KPIs. Usa usePersistedState para manter filtros no sessionStorage.")

        Component(pages, "ComercialDashboard\nComercialProposals\nComercialAvailability\nComercialReports\nLogin", "React TSX / View", "Camada View do MVVM. Renderiza dados, dispara eventos. Não conhece HTTP — só recebe props dos ViewModels.")

        Component(components, "PropostaManutencaoModal\nDisponibilidadeManutencaoModal\nDataTable / DataCard\nStatusBadge / KpiContainer", "React TSX / Shared", "Componentes reutilizáveis. PropostaManutencaoModal gerencia as abas de sub-recursos da proposta.")

        Component(entities_ts, "entities/*.ts", "TypeScript Interfaces (geradas)", "Interfaces de domínio geradas pelo codegen. Espelham exatamente as structs Go. DO NOT EDIT.")
    }

    Container(api, "API Go", ":8080")

    Rel(app, auth_context, "Provê contexto global")
    Rel(app, pages, "Roteia para")
    Rel(pages, viewmodels, "Consome hooks")
    Rel(pages, components, "Usa componentes")
    Rel(viewmodels, services, "Delega chamadas HTTP")
    Rel(services, api_client, "Usa para fetch")
    Rel(api_client, api, "HTTP REST + JWT", "JSON :8080")
    Rel(services, entities_ts, "Tipagem dos responses")
    Rel(viewmodels, entities_ts, "Tipagem do estado")
```

---

### 3.3 Componentes do Banco de Dados (PostgreSQL)

```mermaid

erDiagram
    Usuario {
        UUID id_u PK
        VARCHAR nome_u
        VARCHAR email_u
        VARCHAR senha_hash_u
        VARCHAR setor_u
        VARCHAR token_ativo_u
        TIMESTAMP token_expira_em_u
        TIMESTAMP criado_em_u
    }

    Unidade {
        UUID id_un PK
        VARCHAR codigo_un
        CHAR piso_un
        CHAR corredor_un
        DECIMAL area_un
        TIMESTAMP criado_em_un
    }

    Proposta {
        UUID id_p PK
        UUID id_unidade_p FK
        UUID id_usuario_criacao_p FK
        UUID id_usuario_ultima_alt_p FK
        UUID id_usuario_responsavel_p FK
        VARCHAR segmento_p
        VARCHAR tipo_operacao_p
        DECIMAL valor_proposto_p
        DECIMAL area_p
        VARCHAR status_p
        DATE data_criacao_p
        DATE data_vencimento_p
        VARCHAR nome_fantasia_p
        TIMESTAMP atualizado_em_p
    }

   PropostaLojaAnterior {
        UUID id_proposta_pla PK_FK
        VARCHAR nome_fantasia_pla
        VARCHAR segmento_pla
        DECIMAL cto_pla
        DECIMAL abl_pla
    }

    PropostaNecessidadesTecnicas {
        UUID id_proposta_pnt PK_FK
        DECIMAL demanda_eletrica_kva_pnt
        BOOLEAN ponto_agua_pnt
        BOOLEAN necessita_gas_pnt
        DECIMAL area_minima_m2_pnt
        VARCHAR status_pnt
    }

    PropostaCessaoDireitos {
        UUID id_proposta_pcd PK_FK
        DECIMAL res_sperata_proposta_pcd
        VARCHAR forma_pagamento_saldo_pcd
        VARCHAR status_res_sperata_pcd
    }

    PropostaTaxaTransferencia {
        UUID id_proposta_ptt PK_FK
        DECIMAL tt_contratual_ptt
        DECIMAL tt_proposta_ptt
        VARCHAR status_tt_ptt
    }

    PropostaParecerComite {
        UUID id_proposta_ppc PK_FK
        BOOLEAN presidente_ppc
        BOOLEAN diretoria_comp1_ppc
        BOOLEAN diretoria_comp2_ppc
        BOOLEAN superintendente_ppc
        BOOLEAN in_networking_ppc
    }

    PropostaDocumento {
        UUID id_pd PK
        UUID id_proposta_pd FK
        UUID id_usuario_pd FK
        VARCHAR codigo_pd
        VARCHAR nome_original_pd
        VARCHAR tipo_pd
        VARCHAR url_storage_pd
        TIMESTAMP data_upload_pd
    }

    PropostaHistorico {
        UUID id_ph PK
        UUID id_proposta_ph FK
        UUID id_usuario_ph FK
        TIMESTAMP editado_em_ph
        VARCHAR status_ph
        VARCHAR segmento_ph
        DECIMAL valor_proposto_ph
    }

    Unidade ||--o{ Proposta : "tem"
    Usuario ||--o{ Proposta : "cria"
    Proposta ||--o| PropostaLojaAnterior : "1:1"
    Proposta ||--o| PropostaNecessidadesTecnicas : "1:1"
    Proposta ||--o| PropostaCessaoDireitos : "1:1 (Cessão/TT)"
    Proposta ||--o| PropostaTaxaTransferencia : "1:1 (Transferência)"
    Proposta ||--o| PropostaParecerComite : "1:1 (comitê)"
    Proposta ||--o{ PropostaDocumento : "N documentos"
    Proposta ||--o{ PropostaHistorico : "N snapshots"
    Usuario ||--o{ PropostaDocumento : "faz upload"
    Usuario ||--o{ PropostaHistorico : "registra edição"
```

---

## 4. Diagrama de Código

> **Nível 4 — Code Diagram**
>
> Detalha implementações críticas: estrutura interna de classes/funções, fluxo de dados e padrões usados no código.

### 4.1 Pipeline de Inicialização da API

```mermaid
flowchart TD
    START([go run cmd/main.go]) --> CFG["config.LoadConfig()\nLê variáveis de ambiente:\nSERVER_PORT, JWT_SECRET, JWT_DURATION\nDB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME"]
    CFG --> DB["database.Connect(cfg.DatabaseDSN)\nCria pgxpool.Pool\nDSN: postgres://user:pass@host:5432/db"]
    DB --> MIG["database.RunMigrations(pool)\ngolang-migrate lê migrations/*.sql\nAplica apenas arquivos ainda não executados\n(controle via tabela schema_migrations)"]
    MIG --> HANDLERS["handlers.NewAuthHandler(db, secret, duration)\nhandlers.NewUnidadesHandler(db)\nhandlers.NewPropostasHandler(db)"]
    HANDLERS --> GIN["gin.New() + gin.Recovery() + gin.Logger()"]
    GIN --> ROUTES["routes.Register(engine, db, cfg)\nRegistra /ping, /health\nRegistra /api/v1/auth/login (público)\nCria grupo /api/v1 com middleware.Auth"]
    ROUTES --> LISTEN["engine.Run(:SERVER_PORT)\nServidor HTTP ativo"]

    style START fill:#4A90D9,color:#fff
    style LISTEN fill:#27AE60,color:#fff
```

---

### 4.2 Estrutura do AuthHandler (Go)

```mermaid
classDiagram
    class AuthHandler {
        -db pgxpool.Pool
        -jwtSecret []byte
        -tokenDuration time.Duration
        +NewAuthHandler(db, jwtSecret, duration) AuthHandler
        +Login(c gin.Context)
        +Logout(c gin.Context)
        +Me(c gin.Context)
        +ValidarToken(tokenString string) Claims
    }

    class Claims {
        +UserID string
        +Email string
        +Nome string
        +Setor string
        +RegisteredClaims jwt.RegisteredClaims
    }

    class loginRequest {
        +Email string
        +Senha string
    }

    class loginResponse {
        +Token string
        +Usuario usuarioInfo
    }

    class usuarioInfo {
        +ID string
        +Nome string
        +Email string
        +Setor string
    }

    AuthHandler ..> Claims : gera/valida
    AuthHandler ..> loginRequest : recebe (ShouldBindJSON)
    AuthHandler ..> loginResponse : retorna (JSON)
    loginResponse *-- usuarioInfo
    Claims --|> jwt.RegisteredClaims
```

---

### 4.3 Estrutura do AuthContext (TypeScript/React)

```mermaid
classDiagram
    class AuthContext {
        +token string | null
        +usuario UsuarioInfo | null
        +login(email, senha) Promise~void~
        +logout() void
        +isAuthenticated boolean
    }

    class UsuarioInfo {
        +id string
        +nome string
        +email string
        +setor string
    }

    class apiClient {
        -baseURL string
        -token string
        +get~T~(path) Promise~T~
        +post~T~(path, body) Promise~T~
        +put~T~(path, body) Promise~T~
        +patch~T~(path, body) Promise~T~
        +delete(path) Promise~void~
        +postForm~T~(path, form) Promise~T~
    }

    class PropostasService {
        +listar(filtros) Promise~PropostaResumo[]~
        +detalhe(id) Promise~Proposta~
        +criar(dto) Promise~Proposta~
        +atualizarStatus(id, status) Promise~void~
        +listarHistorico(id) Promise~PropostaHistorico[]~
    }

    class UnidadesService {
        +listar(filtros) Promise~Unidade[]~
        +detalhe(id) Promise~Unidade~
    }

    AuthContext *-- UsuarioInfo
    AuthContext --> apiClient : usa para login
    PropostasService --> apiClient : delega HTTP
    UnidadesService --> apiClient : delega HTTP
```

---

### 4.4 Ciclo de Vida do Token JWT

```mermaid
sequenceDiagram
    actor U as Usuário
    participant FE as Frontend (AuthContext)
    participant MW as Middleware (auth.go)
    participant H as AuthHandler
    participant DB as PostgreSQL

    U->>FE: Preenche email + senha → clica Login
    FE->>H: POST /api/v1/auth/login { email, senha }
    H->>DB: SELECT id_u, nome_u, setor_u, senha_hash_u<br/>WHERE email_u = $1
    DB-->>H: row (id, nome, setor, hash)
    H->>H: bcrypt.CompareHashAndPassword(hash, senha)
    Note over H: Falha → 401 Credenciais inválidas
    H->>H: jwt.NewWithClaims(HS256)<br/>{ UserID, Email, Nome, Setor, exp: now+24h }
    H->>DB: UPDATE Usuario SET token_ativo_u = $1,<br/>token_expira_em_u = $2 WHERE id_u = $3
    H-->>FE: 200 { token, usuario: {id, nome, email, setor} }
    FE->>FE: AuthContext.setToken(token)<br/>sessionStorage / state

    Note over U,DB: Requisições subsequentes

    U->>FE: Navega para /propostas
    FE->>MW: GET /api/v1/propostas<br/>Authorization: Bearer <token>
    MW->>MW: jwt.ParseWithClaims(token, &Claims{}, keyFunc)
    Note over MW: Token inválido/expirado → 401
    MW->>MW: c.Set("user_id", claims.UserID)<br/>c.Set("user_email", claims.Email)
    MW->>H: c.Next() → PropostasHandler.Listar
    H-->>FE: 200 [ ...propostas ]
```

---

### 4.5 Pipeline Codegen — Sincronização de Tipos

```mermaid
flowchart LR
    SQL["migrations/*.sql\nCREATE TABLE 'Proposta' (\n  id_p UUID PRIMARY KEY,\n  segmento_p VARCHAR(100),\n  status_p VARCHAR(60),\n  ...\n)"]

    PARSE["codegen/generate.go\nRegex parser:\n- Extrai nome da tabela\n- Extrai nome_coluna + tipo_sql\n- Mapeia sql→Go→TypeScript"]

    GO["entities/proposta.go\n// Code generated — DO NOT EDIT\ntype Proposta struct {\n  Id     string   json:id_p\n  Status string   json:status_p\n  ...\n}"]

    TS["entities/proposta.ts\n// Code generated — DO NOT EDIT\nexport interface Proposta {\n  id: string;\n  status: string;\n  ...\n}"]

    API_COPY["API/internal/entities/\nproposta.go (cópia)"]
    FE_COPY["Figma/src/app/entities/\nproposta.ts (cópia)"]

    SQL -->|lê schema| PARSE
    PARSE -->|gera| GO
    PARSE -->|gera| TS
    GO -->|cp| API_COPY
    TS -->|cp| FE_COPY

    style SQL fill:#E67E22,color:#fff
    style GO fill:#00ADD8,color:#fff
    style TS fill:#3178C6,color:#fff
```

---

## 5. Diagrama da Paisagem do Sistema

> **System Landscape Diagram**
>
> Visão panorâmica do ecossistema completo — múltiplos sistemas e seus relacionamentos. Contextualiza o Flamboyant no universo de sistemas do shopping.

```mermaid
C4Context
    title Paisagem do Sistema — Ecossistema Shopping Flamboyant

    Enterprise_Boundary(shopping, "Shopping Flamboyant (Organização)") {

        Person(comercial, "Equipe Comercial", "Analistas e gerentes de locação")
        Person(comite, "Comitê Executivo", "Diretores e superintendente")
        Person(ti, "Equipe de TI", "Infra e desenvolvimento")

        System(flamboyant_sys, "Sistema Flamboyant", "Gestão do ciclo de vida de propostas comerciais e controle de unidades do shopping. [Em operação]")

        System(erp, "ERP Financeiro", "Sistema financeiro corporativo para contratos, notas fiscais e fluxo de caixa. [Futuro: integração]")

        System(bi, "Portal BI / Analytics", "Relatórios gerenciais e dashboards executivos consolidados. [Futuro]")

        System(doc_mgmt, "Gestão Documental", "Armazenamento centralizado de contratos e documentos jurídicos. [Futuro]")
    }

    System_Ext(storage_ext, "Object Storage", "S3 / MinIO — armazenamento de arquivos de propostas. [Planejado]")
    System_Ext(email_ext, "Servidor de E-mail", "SMTP para notificações. [Planejado]")
    System_Ext(identity, "Provedor de Identidade", "SSO / LDAP corporativo. [Futuro]")

    Rel(comercial, flamboyant_sys, "Cria e gerencia propostas")
    Rel(comite, flamboyant_sys, "Aprova propostas, consulta KPIs")
    Rel(ti, flamboyant_sys, "Opera e mantém")

    Rel(flamboyant_sys, erp, "Exporta propostas aprovadas", "REST (futuro)")
    Rel(flamboyant_sys, bi, "Alimenta com dados de propostas", "ETL (futuro)")
    Rel(flamboyant_sys, doc_mgmt, "Arquiva documentos finalizados", "API (futuro)")
    Rel(flamboyant_sys, storage_ext, "Upload/download de documentos", "S3 API")
    Rel(flamboyant_sys, email_ext, "Notificações de status", "SMTP")
    Rel(flamboyant_sys, identity, "Autenticação federada", "OAuth2/LDAP (futuro)")

    UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```

### Estado de Integração

| Sistema Externo | Status | Prioridade | Observação |
|----------------|--------|-----------|------------|
| Object Storage (S3/MinIO) | 🟡 Planejado | Alta | Metadados de documentos já existem no BD |
| Servidor de E-mail | 🟡 Planejado | Média | Notificações de mudança de status |
| ERP Financeiro | 🔴 Futuro | Alta | Exportar propostas aprovadas |
| Portal BI | 🔴 Futuro | Média | Dashboards executivos consolidados |
| Gestão Documental | 🔴 Futuro | Baixa | Arquivo definitivo de contratos |
| Provedor de Identidade | 🔴 Futuro | Alta | SSO corporativo — substituir auth local |

---

## 6. Diagrama Dinâmico

> **Dynamic Diagram**
>
> Cenários de execução em tempo real — sequências de chamadas para os fluxos mais importantes do sistema.

### 6.1 Fluxo Completo: Criar Proposta

```mermaid
sequenceDiagram
    actor A as Analista Comercial
    participant FE as Frontend (React)
    participant VM as useComercialProposals
    participant SVC as PropostasService
    participant AC as apiClient.ts
    participant MW as middleware/auth.go
    participant H as PropostasHandler
    participant DB as PostgreSQL

    A->>FE: Clica em "Nova Proposta"
    FE->>VM: openCreateModal()
    VM->>SVC: listarUnidades() [para preencher select]
    SVC->>AC: get("/unidades?status=disponivel")
    AC->>MW: GET /api/v1/unidades — Bearer token
    MW->>MW: Valida JWT → injeta user_id no ctx
    MW->>H: UnidadesHandler.Listar
    H->>DB: SELECT u.*, subquery(status) FROM Unidade u
    DB-->>H: [ {id, codigo, piso, area, status}, ... ]
    H-->>AC: 200 JSON
    AC-->>VM: Unidade[]
    VM-->>FE: Renderiza select de unidades

    A->>FE: Preenche formulário e confirma
    FE->>VM: submitCreateProposta(formData)
    VM->>SVC: criar(dto)
    SVC->>AC: post("/propostas", dto)
    AC->>MW: POST /api/v1/propostas — Bearer token
    MW->>H: PropostasHandler.Criar
    H->>DB: BEGIN\nINSERT INTO Proposta (...) VALUES (...)\nINSERT INTO PropostaLojaAnterior (...)\nINSERT INTO PropostaNecessidadesTecnicas (...)\nCOMMIT
    DB-->>H: id_p (UUID)
    H-->>AC: 201 { id, status: "Aguardando análise financeira", ... }
    AC-->>VM: Proposta criada
    VM->>VM: refresh lista de propostas
    VM-->>FE: Exibe toast de sucesso + proposta na tabela
```

---

### 6.2 Fluxo: Avanço de Status da Proposta

```mermaid
sequenceDiagram
    actor G as Gestor
    participant FE as Frontend
    participant VM as useComercialProposals
    participant SVC as PropostasService
    participant H as PropostasHandler
    participant DB as PostgreSQL

    G->>FE: Abre proposta → clica "Avançar Status"
    FE->>VM: onStatusChange(propostaId, novoStatus)
    VM->>SVC: atualizarStatus(id, { status: "Aguardando comitê" })
    SVC->>H: PATCH /api/v1/propostas/:id/status
    H->>DB: BEGIN
    H->>DB: SELECT status_p FROM Proposta WHERE id_p = $1 FOR UPDATE
    DB-->>H: status atual

    alt Transição válida
        H->>DB: UPDATE Proposta SET status_p = $1, atualizado_em_p = NOW()
        H->>DB: INSERT INTO PropostaHistorico (snapshot de todos os campos)
        H->>DB: COMMIT
        H-->>SVC: 200 { id, novoStatus }
        SVC-->>VM: Sucesso
        VM-->>FE: Atualiza badge de status
        FE-->>G: Toast "Status atualizado"
    else Transição inválida
        H->>DB: ROLLBACK
        H-->>SVC: 422 { message: "Transição não permitida" }
        SVC-->>VM: Erro
        VM-->>FE: Exibe mensagem de erro
    end
```

---

### 6.3 Fluxo: Upload de Documento

```mermaid
sequenceDiagram
    actor A as Analista
    participant FE as Frontend (AnexosTab)
    participant AC as apiClient.ts
    participant H as PropostasHandler
    participant DB as PostgreSQL

    A->>FE: Seleciona arquivo PDF (max 5MB)
    FE->>FE: Valida tipo (PDF/DOCX/XLSX/JPG/PNG) e tamanho
    FE->>AC: postForm("/documentos", FormData{ id_proposta, arquivo })
    AC->>H: POST /api/v1/documentos — multipart/form-data

    H->>H: Valida tipo MIME e extensão
    H->>H: Gera codigo_pd único (UUID prefix)
    H->>DB: INSERT INTO PropostaDocumento\n(id_pd, id_proposta_pd, id_usuario_pd,\ncodigo_pd, nome_original_pd, tipo_pd,\ntamanho_pd, url_storage_pd, data_upload_pd)

    Note over H,DB: url_storage_pd ← futuro S3/MinIO
    DB-->>H: OK
    H-->>AC: 201 { id, codigo, nome, tipo, tamanho, dataUpload }
    AC-->>FE: PropostaDocumento
    FE-->>A: Arquivo aparece na lista de anexos
```

---

### 6.4 Fluxo: Dashboard — Cálculo de KPIs

```mermaid
sequenceDiagram
    actor G as Gestor
    participant FE as ComercialDashboard.tsx
    participant VM as useComercialDashboard
    participant SVC as PropostasService + UnidadesService
    participant AC as apiClient.ts
    participant H as API Handlers
    participant DB as PostgreSQL

    G->>FE: Navega para /dashboard
    FE->>VM: mount → useEffect
    VM->>SVC: listar() [propostas] + listar() [unidades]

    par Chamadas paralelas
        SVC->>AC: get("/propostas")
        AC->>H: GET /api/v1/propostas
        H->>DB: SELECT p.*, u.codigo_un, u.area_un FROM Proposta p JOIN Unidade u
        DB-->>H: rows
        H-->>AC: PropostaResumo[]
    and
        SVC->>AC: get("/unidades")
        AC->>H: GET /api/v1/unidades
        H->>DB: SELECT u.*, \n  CASE WHEN EXISTS(SELECT 1 FROM Proposta p WHERE ...)\n  THEN 'Ocupada' ELSE 'Disponível' END AS status
        DB-->>H: Unidade[] com status calculado
        H-->>AC: Unidade[]
    end

    AC-->>VM: [PropostaResumo[], Unidade[]]
    VM->>VM: Calcula KPIs:\n- totalPropostas\n- taxaConversão = aprovadas/total\n- valorTotalPipeline = Σ valor_proposto\n- unidadesOcupadas/disponíveis\n- propostas por status (gráfico)
    VM-->>FE: { kpis, chartData, tableData }
    FE-->>G: Renderiza cards KPI + gráficos Recharts
```

---

## 7. Diagrama de Implantação

> **Deployment Diagram**
>
> Mapeia contêineres para infraestrutura física/virtual. Dois ambientes: desenvolvimento local e produção Docker.

### 7.1 Ambiente de Desenvolvimento Local

```mermaid
C4Deployment
    title Implantação — Desenvolvimento Local

    Deployment_Node(dev_machine, "Máquina do Desenvolvedor", "Windows 10/11 ou Linux") {

        Deployment_Node(browser_node, "Navegador Web", "Chrome / Firefox / Edge") {
            Container(fe_dev, "Frontend Dev Server", "Vite :5173", "Hot Module Replacement (HMR). VITE_API_URL=http://localhost:8080/api/v1")
        }

        Deployment_Node(terminal1, "Terminal — API", "PowerShell / bash") {
            Container(api_dev, "API Go", "go run cmd/main.go :8080", "GIN_MODE=debug. Logs detalhados. JWT_DURATION configurável.")
        }

        Deployment_Node(pg_local, "PostgreSQL Local", "PostgreSQL 16") {
            ContainerDb(db_dev, "Banco jp-mall", "PostgreSQL :5432", "Migrations aplicadas automaticamente na primeira execução via golang-migrate.")
        }

        Deployment_Node(codegen_node, "Terminal — Codegen", "PowerShell") {
            Container(cg, "Codegen", "go run generate.go", "Executado manualmente após cada nova migration.")
        }
    }

    Rel(fe_dev, api_dev, "fetch() REST", "HTTP :8080")
    Rel(api_dev, db_dev, "pgxpool", "TCP :5432")
    Rel(cg, db_dev, "Lê migrations SQL", "arquivo")
```

---

### 7.2 Ambiente Docker (Produção / Staging)

```mermaid
C4Deployment
    title Implantação — Docker Compose (Produção)

    Deployment_Node(host, "Host Docker", "Linux Server (Ubuntu 22.04+)\nDocker Engine 24+") {

        Deployment_Node(docker_compose, "docker-compose.yml", "Docker Compose v2") {

            Deployment_Node(net, "Rede: flamboyant-network (bridge)", "Docker Network") {

                Deployment_Node(fe_container, "Container: flamboyant-frontend", "nginx:alpine") {
                    Container(fe_prod, "Frontend", "React/Vite build estático\nnginx :80", "Multi-stage build. Stage 1: node:20-alpine (npm build). Stage 2: nginx serve dist/. VITE_API_URL injetada em build-time via --build-arg.")
                }

                Deployment_Node(api_container, "Container: flamboyant-api", "golang:1.23-alpine") {
                    Container(api_prod, "API Go", "Binary compilado :8080", "Multi-stage build. Stage 1: golang:1.23-alpine (go build). Stage 2: alpine runtime. GIN_MODE=release.")
                }

                Deployment_Node(pg_container, "Container: flamboyant-postgres", "postgres:16-alpine") {
                    ContainerDb(db_prod, "Banco jp-mall", "PostgreSQL 16 :5432", "Volume persistente: flamboyant-postgres-data. healthcheck: pg_isready a cada 10s.")
                }
            }

            Deployment_Node(volumes, "Volumes Docker", "Host filesystem") {
                Container(vol, "flamboyant-postgres-data", "Volume nomeado", "Persiste /var/lib/postgresql/data. Sobrevive a docker compose down.")
            }
        }
    }

    Deployment_Node(client, "Cliente Final", "Browser externo") {
        Container(browser_prod, "Navegador", "Chrome/Firefox/Edge")
    }

    Rel(browser_prod, fe_prod, "HTTPS :80", "HTTP")
    Rel(fe_prod, api_prod, "REST :8080", "HTTP interno (flamboyant-network)")
    Rel(api_prod, db_prod, "pgxpool :5432", "TCP interno")
    Rel(db_prod, vol, "Persiste dados", "bind mount")
```

### 7.3 Dependências e Health Checks

```mermaid
flowchart TD
    PG["🐘 postgres\nhealthcheck: pg_isready\ninterval: 10s | retries: 5"]
    API["⚙️ api\ndepends_on: postgres (healthy)\nhealthcheck: wget /health\ninterval: 15s | retries: 3"]
    FE["🌐 frontend\ndepends_on: api (healthy)\nnginx :80"]

    PG -->|service_healthy| API
    API -->|service_healthy| FE

    style PG fill:#336791,color:#fff
    style API fill:#00ADD8,color:#fff
    style FE fill:#61DAFB,color:#000
```

### 7.4 Variáveis de Ambiente por Contêiner

| Variável | Contêiner | Padrão | Descrição |
|----------|-----------|--------|-----------|
| `DB_USER` | api, postgres | `postgres` | Usuário PostgreSQL |
| `DB_PASSWORD` | api, postgres | `postgres` | Senha PostgreSQL |
| `DB_NAME` | api, postgres | `jp-mall` | Nome do banco |
| `JWT_SECRET` | api | — | **Obrigatório.** Chave HMAC-SHA256 |
| `JWT_DURATION` | api | `24h` | Duração do token |
| `SERVER_PORT` | api | `8080` | Porta de escuta |
| `GIN_MODE` | api | `release` | `debug` ou `release` |
| `ALLOWED_ORIGIN` | api | `http://localhost` | CORS origin permitida |
| `VITE_API_URL` | frontend | `http://localhost:8080/api/v1` | Base URL da API (build-arg) |

---

## 8. Notação

> Convenções adotadas neste documento para leitura e manutenção dos diagramas.

### 8.1 Símbolos C4

| Símbolo | Significado |
|---------|------------|
| 🧑 **Person** | Ator humano que interage com o sistema |
| 📦 **System** | Sistema de software completo (nível de contexto) |
| 📦 **Container** | Processo, store ou aplicação executável dentro de um sistema |
| 🔧 **Component** | Agrupamento de código com responsabilidade coesa dentro de um contêiner |
| 🔲 **Class/Interface** | Estrutura de código (nível 4) |
| `[...]` | Relacionamento com tecnologia e protocolo especificados |
| `--` tracejado | Relacionamento futuro / planejado |
| `_Ext` sufixo | Sistema, pessoa ou componente externo ao projeto |

### 8.2 Paleta de Cores

| Cor | Significado |
|-----|------------|
| 🔵 Azul | Sistemas internos / contêineres próprios |
| 🟦 Azul escuro | Banco de dados |
| 🟣 Roxo | Pessoas / usuários |
| ⬜ Cinza | Sistemas externos / fora do escopo |
| 🟡 Amarelo | Planejado / em desenvolvimento |
| 🔴 Vermelho | Não implementado / futuro |
| 🟢 Verde | Implementado e operacional |

### 8.3 Convenções de Nomenclatura

| Escopo | Convenção | Exemplo |
|--------|-----------|---------|
| Tabelas SQL | `PascalCase` com sufixo `_x` nas colunas | `Proposta`, `id_p`, `status_p` |
| Structs Go | `PascalCase` | `PropostasHandler`, `Claims` |
| Interfaces TypeScript | `PascalCase` | `PropostaResumo`, `Unidade` |
| Hooks React | `camelCase` com prefixo `use` | `useComercialDashboard` |
| Services | `PascalCase` + sufixo `Service` | `PropostasService` |
| Endpoints REST | `kebab-case` plural | `/propostas`, `/unidades`, `/cessao-direitos` |
| Variáveis de ambiente | `SCREAMING_SNAKE_CASE` | `JWT_SECRET`, `DB_HOST` |

### 8.4 Status dos Endpoints

| Símbolo | Significado |
|---------|------------|
| ✅ | Implementado e funcional |
| 🚧 | `PlaceholderOK` — rota registrada, retorna 200 vazio |
| 📋 | `PlaceholderList` — rota registrada, retorna `[]` vazio |
| 🔴 | Não implementado (nem placeholder) |

### 8.5 Endpoints por Status

| Endpoint | Método | Status |
|----------|--------|--------|
| `/ping` | GET | ✅ |
| `/health` | GET | ✅ |
| `/api/v1/auth/login` | POST | ✅ |
| `/api/v1/auth/logout` | POST | ✅ |
| `/api/v1/auth/me` | GET | ✅ |
| `/api/v1/unidades` | GET | ✅ |
| `/api/v1/unidades/:id` | GET | ✅ |
| `/api/v1/propostas` | GET | ✅ |
| `/api/v1/propostas/:id` | GET | ✅ |
| `/api/v1/propostas` | POST | ✅ |
| `/api/v1/propostas/:id/status` | PATCH | ✅ |
| `/api/v1/propostas/:id/historico` | GET | ✅ |
| `/api/v1/propostas/:id` | PUT | 🚧 |
| `/api/v1/propostas/check-vencidas` | POST | 🚧 |
| `/api/v1/propostas/:id/loja-anterior` | GET/PUT | 🚧 |
| `/api/v1/propostas/:id/necessidades-tecnicas` | GET/PUT | 🚧 |
| `/api/v1/propostas/:id/cessao-direitos` | GET/PUT | 🚧 |
| `/api/v1/propostas/:id/taxa-transferencia` | GET/PUT | 🚧 |
| `/api/v1/propostas/:id/parecer-comite` | GET/PUT | 🚧 |
| `/api/v1/documentos` | GET | 📋 |
| `/api/v1/documentos` | POST | 🚧 |
| `/api/v1/documentos/:id` | DELETE | 🚧 |

---

## 9. Lista de Verificação de Revisão

> Checklist para uso nas revisões de arquitetura (code review, sprint review, entrega de US).

### 9.1 Contexto e Contêineres

- [ ] Todos os atores que interagem com o sistema estão documentados (Analista, Gestor, Admin)?
- [ ] As três fronteiras de contêiner (frontend, api, postgres) refletem o `docker-compose.yml` atual?
- [ ] Protocolos de comunicação estão especificados (HTTP REST, pgx TCP, Bearer JWT)?
- [ ] Sistemas externos futuros (S3, e-mail, ERP) estão marcados com status correto (planejado/futuro)?
- [ ] Variáveis de ambiente críticas (`JWT_SECRET`, `ALLOWED_ORIGIN`) estão documentadas?

### 9.2 Componentes

- [ ] Todos os handlers Go estão listados (`AuthHandler`, `PropostasHandler`, `UnidadesHandler`)?
- [ ] O fluxo MVVM do frontend (View → ViewModel → Service → apiClient) está correto?
- [ ] O middleware de autenticação está descrito em ambos os lados (Go middleware + AuthContext)?
- [ ] O codegen está representado como ferramenta de desenvolvimento (fora do runtime)?
- [ ] As tabelas de histórico (`PropostaHistorico` e derivadas) aparecem no diagrama de BD?

### 9.3 Código (Nível 4)

- [ ] A sequência de inicialização do `main.go` está na ordem correta (config → db → migrate → handlers → routes → listen)?
- [ ] O ciclo JWT (geração, armazenamento no BD, validação, renovação) está completo?
- [ ] O pipeline codegen (SQL → parse → .go + .ts → cópia) está documentado?
- [ ] O modo protótipo do middleware (usuário fixo `proto-001`) está registrado como dívida técnica?

### 9.4 Dinâmica

- [ ] O fluxo de criação de proposta cobre transação SQL (BEGIN/COMMIT)?
- [ ] O fluxo de avanço de status inclui a inserção no histórico de auditoria?
- [ ] As chamadas paralelas do dashboard (propostas + unidades) estão representadas como `par`?
- [ ] O fluxo de upload de documento menciona que `url_storage_pd` é placeholder?

### 9.5 Implantação

- [ ] Os dois ambientes (dev local e Docker) estão documentados separadamente?
- [ ] A ordem de `depends_on` e health checks (postgres → api → frontend) está correta?
- [ ] O volume `flamboyant-postgres-data` aparece para garantir persistência?
- [ ] Multi-stage build dos Dockerfiles (builder + runtime) está mencionado?

### 9.6 Segurança

- [ ] A validação JWT está desabilitada no middleware (modo protótipo) — registrado como dívida técnica?
- [ ] `bcrypt.CompareHashAndPassword` é usado (e não comparação direta de senhas)?
- [ ] CORS está configurado via `ALLOWED_ORIGIN` (não wildcard em produção)?
- [ ] `JWT_SECRET` não tem valor padrão no `docker-compose.yml` (obriga configuração explícita)?
- [ ] `DB_SSLMODE=disable` — documentado como necessário ativar em produção real?

### 9.7 Dívidas Técnicas Identificadas

| # | Dívida | Arquivo | Impacto |
|---|--------|---------|---------|
| DT-01 | Middleware JWT desabilitado (usuário fixo `proto-001`) | `middleware/auth.go` | Crítico para produção |
| DT-02 | 12+ endpoints como `PlaceholderOK` / `PlaceholderList` | `handlers/propostas.go` | Funcionalidade incompleta |
| DT-03 | `url_storage_pd` não aponta para storage real | `handlers/propostas.go` | Documentos sem arquivo físico |
| DT-04 | `DB_SSLMODE=disable` no compose | `docker-compose.yml` | Dados não criptografados em trânsito |
| DT-05 | Sem rate limiting nos endpoints de auth | `routes/routes.go` | Vulnerável a brute-force |
| DT-06 | Sem paginação server-side no `GET /propostas` | `handlers/propostas.go` | Performance com volume alto |
| DT-07 | Teste unitário único (`sinistros.test.tsx`) | `Figma/src/tests/` | Cobertura de testes insuficiente |

---

## 10. Perguntas Frequentes

### 10.1 Arquitetura Geral

**Por que três contêineres Docker separados e não um monólito?**

A separação em `postgres` + `api` + `frontend` segue o princípio de responsabilidade única no nível de infraestrutura. Cada contêiner pode ser escalado, atualizado e reiniciado independentemente. O frontend pode ser reconstruído sem reiniciar o banco. A API pode ser atualizada sem downtime do banco. Além disso, facilita o workflow de CI/CD onde os três podem ter pipelines distintas.

---

**Por que Go e não Node.js/Python para a API?**

Go foi escolhido por: (1) compilação para binário estático com baixo consumo de memória (~15MB idle vs ~150MB para Node); (2) tipagem estática forte que evita erros em runtime; (3) `pgx/v5` oferece a comunicação mais eficiente disponível com PostgreSQL; (4) `gin` é um dos frameworks HTTP mais rápidos para Go; (5) alinhamento com o aprendizado acadêmico da equipe.

---

**O que é o codegen e por que ele existe?**

O `codegen/generate.go` lê os arquivos `migrations/*.sql` e gera automaticamente structs Go (`entities/*.go`) e interfaces TypeScript (`entities/*.ts`) sincronizadas. Isso elimina a dívida técnica de manter dois conjuntos de tipos manualmente — qualquer alteração no schema SQL propaga-se para ambas as linguagens com um único script. Os arquivos gerados têm o comentário `// Code generated — DO NOT EDIT`.

---

### 10.2 Frontend

**Por que o padrão MVVM e não MVC ou apenas componentes com hooks?**

O MVVM foi escolhido explicitamente para separar três responsabilidades que, misturadas, geram componentes difíceis de testar e manter: (1) **View** — responsável apenas por renderização e eventos; (2) **ViewModel** — lógica de apresentação, filtros, ordenação, paginação, cálculo de KPIs; (3) **Service** — encapsulamento das URLs da API. Se o endpoint `/propostas` mudar, apenas `propostas.service.ts` precisa ser alterado.

---

**O que é `usePersistedState`?**

É um hook customizado que encapsula `sessionStorage`. Quando o usuário navega entre páginas e retorna ao filtro de propostas, os filtros selecionados anteriormente (segmento, status, período) são restaurados automaticamente. Diferente do `localStorage`, o `sessionStorage` é limpo ao fechar a aba, que é o comportamento esperado para filtros de trabalho.

---

**Por que o `apiClient.ts` existe se o `fetch()` poderia ser chamado diretamente nos services?**

O `apiClient` é o único ponto que conhece: a `baseURL` (`VITE_API_URL`), o header `Authorization: Bearer`, e a serialização padrão de erros HTTP. Centralizar isso em um único arquivo significa que: troca de `fetch()` por `axios`, mudança de autenticação para OAuth2, ou adição de retry logic afetam apenas um arquivo.

---

### 10.3 Backend

**Por que SQL direto com `pgx` e não um ORM como GORM?**

`pgx/v5` foi escolhido pelo controle total sobre as queries. As queries do projeto são complexas (subqueries para status calculado de unidades, JOINs com múltiplas tabelas de histórico) — ORMs geram SQL subótimo para esses casos e dificultam o debug. Além disso, `pgxpool` é a forma mais eficiente de gerenciar conexões com PostgreSQL em Go.

---

**Por que `golang-migrate` e não migrations manuais?**

`golang-migrate` executa automaticamente as migrations pendentes na inicialização da API (`database.RunMigrations()`). Isso garante que qualquer novo ambiente (máquina de dev, staging, produção) sempre tenha o schema atualizado sem intervenção manual. A tabela `schema_migrations` controla quais migrations já foram aplicadas.

---

**Como funciona o histórico de auditoria?**

Toda edição de uma proposta gera um snapshot completo na tabela `PropostaHistorico`. Cada snapshot guarda todos os campos da proposta no momento da edição, o `id_usuario_ph` de quem editou, e o timestamp. As tabelas auxiliares (`PropostaLojaAnteriorHistorico`, `PropostaCessaoDireitosHistorico`, etc.) guardam os sub-recursos correspondentes. Isso permite reconstruir qualquer estado passado da proposta.

---

**Qual é o ciclo de vida de uma proposta?**

```
[Criada] → Aguardando análise financeira
         → Aguardando comitê
         → Aprovado  →  Unidade fica Ocupada
         → Reprovado
         → Cancelado
```

As transições são controladas via `PATCH /api/v1/propostas/:id/status`. Cada mudança de status gera um registro no histórico.

---

### 10.4 Implantação e Segurança

**Posso rodar sem Docker?**

Sim. O `start.ps1` (Windows) inicializa a API com `go run cmd/main.go` e o frontend com `npm run dev` (Vite `:5173`). É necessário ter Go 1.21+, Node.js 18+ e PostgreSQL local instalados. Veja `COMO_RODAR_O_PROJETO.txt` para instruções detalhadas.

---

**O que acontece se o `JWT_SECRET` não for definido?**

O `docker-compose.yml` não define valor padrão para `JWT_SECRET` (diferente de `DB_PASSWORD` que tem `postgres`). Se não for definido, a API não consegue assinar tokens e retornará erro 500 em todas as tentativas de login. Isso é intencional — forçar o operador a definir explicitamente o segredo.

---

**Como ativar a validação real do JWT (sair do modo protótipo)?**

O arquivo `middleware/auth.go` tem comentários indicando os 6 passos: (1) descomentar a extração do header `Authorization`; (2) validar formato `Bearer <token>`; (3) chamar `jwt.ParseWithClaims`; (4) verificar expiração; (5) verificar `token_ativo_u` no banco; (6) injetar claims reais no contexto. Atualmente injeta usuário fixo `proto-001` para facilitar o desenvolvimento frontend.

---

**Por que `ALLOWED_ORIGIN` é necessário?**

A API Go configura o middleware CORS do Gin com a origem definida em `ALLOWED_ORIGIN`. Em desenvolvimento (`http://localhost:5173` via Vite) e em Docker (`http://localhost` via nginx), a origem difere. Definir explicitamente evita erros de CORS e impede que outros domínios façam requisições cross-origin para a API em produção.

---

*Documento gerado com base em `repomix-output.md` e `README.md` do repositório `Projeto-Flamboyant` — BES-2026 / UFG.*  
*Para manter este documento atualizado: re-executar análise após cada nova migration ou mudança estrutural.*


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

- **DanielNovaiz** — [github.com/DanielNovaiz](https://github.com/DanielNovaiz)
- **Felipe Fernandes** — [github.com/FELIIPE505](https://github.com/FELIIPE505)
- **Herlison Silva Assunção** — [github.com/herli-son-ufg](https://github.com/herli-son-ufg)
- **Matheus-slvmr** — [github.com/Matheus-slvmr](https://github.com/Matheus-slvmr)
- **militao-discente** — [github.com/militao-discente](https://github.com/militao-discente)



# Projeto-Flamboyant — Guia de execução com Docker

Este repositório contém:
- `API/`: backend em Go
- `Figma/`: frontend React/Vite
- `docker-compose.yml`: orquestração Docker para PostgreSQL, API e frontend

## Visão geral

A forma recomendada de executar o projeto é usando Docker e Docker Compose. O compose já define:
- um banco PostgreSQL em `postgres:16-alpine`
- a API Go em `API/Dockerfile`
- o frontend estático servido por nginx a partir de `Figma/Dockerfile`

## Requisitos

- Docker instalado
- Docker Compose disponível (`docker compose` ou `docker-compose`)
- Git instalado

> Não é necessário ter Go, Node ou PostgreSQL instalados localmente para rodar o projeto via Docker.

## Passo 1 — Clonar o repositório

```bash
git clone <URL-do-repositório>
cd Projeto-Flamboyant
```

## Passo 2 — Configurar variáveis de ambiente

O compose usa variáveis de ambiente do shell. As principais são:

- `DB_USER` (padrão: `postgres`)
- `DB_PASSWORD` (padrão: `postgres`)
- `DB_NAME` (padrão: `jp-mall`)
- `JWT_SECRET` (obrigatório para a API)
- `SERVER_PORT` (padrão: `8080`)
- `VITE_API_URL` (padrão: `http://localhost:8080/api/v1`)

### Exemplo de arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com:

```env
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=jp-mall
JWT_SECRET=uma-chave-secreta
SERVER_PORT=8080
VITE_API_URL=http://localhost:8080/api/v1
```

> Se não houver arquivo `.env`, o compose usará os valores padrão para `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `SERVER_PORT` e `VITE_API_URL`, mas `JWT_SECRET` deverá estar definido no ambiente ou no `.env`.

## Passo 3 — Executar com Docker Compose

No terminal, na pasta raiz do repositório:

```bash
docker compose up --build
```

Isso fará:
- criar/atualizar a imagem do backend Go
- criar/atualizar a imagem do frontend React/Vite
- subir o banco PostgreSQL, o backend e o frontend

## Passo 4 — Verificar se os containers subiram

Os serviços disponíveis são:
- `postgres` → banco de dados PostgreSQL
- `api` → backend Go na porta `8080`
- `frontend` → site na porta `80`

Use este comando para ver o status:

```bash
docker compose ps
```

## Passo 5 — Acessar a aplicação

- Frontend: `http://localhost`
- API: `http://localhost:8080`

### Rotas úteis

- `http://localhost/` — interface React
- `http://localhost:8080/health` — healthcheck da API
- `http://localhost:8080/api/v1` — prefixo da API

## Passo 6 — Parar e remover os containers

Para interromper sem remover volumes:

```bash
docker compose stop
```

Para interromper e remover containers, redes e volumes anônimos:

```bash
docker compose down
```

Para remover também os volumes persistidos do PostgreSQL:

```bash
docker compose down -v
```

## Observações úteis

- A API depende do serviço `postgres` e aguarda o banco estar pronto antes de iniciar.
- O frontend é servido por nginx na porta `80`.
- O compose expõe o PostgreSQL na porta `5432` para acesso local, mas isso não é necessário para o funcionamento da aplicação.

## Debug e desenvolvimento local (opcional)

Se quiser rodar sem Docker, o projeto também pode ser executado localmente:

### Backend local

```bash
cd API
go mod tidy
go run cmd/main.go
```

### Frontend local

```bash
cd Figma
npm install
npm run dev
```

## Problemas comuns

- `docker compose` não encontrado: instale Docker Desktop ou Docker Engine com Compose.
- `JWT_SECRET` não definido: defina no `.env` ou no ambiente do Docker.
- Porta `80` em uso: pare o serviço local que usa porta 80 ou altere o bind port em `docker-compose.yml`.
- Erro de conexão com PostgreSQL: confira `DB_USER`, `DB_PASSWORD` e `DB_NAME` no `.env`.

## Mais informações

- `docker-compose.yml` configura os serviços `postgres`, `api` e `frontend`
- `API/Dockerfile` constrói o backend Go
- `Figma/Dockerfile` constrói o frontend React e serve via nginx

