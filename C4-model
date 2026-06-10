## 🏗️ Arquitetura e Modelo C4 (C4 Model)

O sistema segue o padrão **C4 Model** para documentação arquitetural, dividindo a complexidade do ecossistema em níveis crescentes de detalhe. Abaixo estão os diagramas de contexto, contentores e componentes do **Projeto Flamboyant**.

---

### 🌍 Nível 1: Diagrama de Contexto de Sistema (System Context)

O diagrama de contexto apresenta uma visão macro, destacando as interações fundamentais entre os utilizadores comerciais e o ecossistema do sistema, sem entrar em pormenores tecnológicos.

```mermaid
C4Context
    title Diagrama de Contexto de Sistema - Projeto Flamboyant
    
    Person(user, "Usuário Comercial", "Gerentes comerciais, administradores e equipa de locação do JP Mall.")
    System(sys, "Projeto Flamboyant", "Plataforma centralizada de gestão de propostas comerciais, disponibilidade física das unidades do shopping e geração de relatórios gerenciais.")
    
    Rel(user, sys, "Gerencia unidades, cria propostas, elabora contratos e acede a dashboards", "HTTPS")

C4Container
    title Diagrama de Contentores - Projeto Flamboyant

    Person(user, "Usuário Comercial", "Acede ao sistema para gerir locações e painéis.")
    
    System_Boundary(sys, "Projeto Flamboyant") {
        Container(frontend, "Frontend SPA", "React, Vite, TypeScript", "Fornece a interface rica para o utilizador (Dashboards, Propostas, Mapas de Disponibilidade). Servida e roteada via Nginx na porta 80.")
        Container(api, "API Backend", "Go 1.23, Gin", "Fornece os endpoints REST para o frontend, aplicando regras de negócio, persistência e autenticação JWT. Corre na porta 8080.")
        ContainerDb(db, "Base de Dados Relacional", "PostgreSQL 16", "Armazena de forma centralizada utilizadores, unidades, o fluxo completo das propostas, histórico de edições e mapeamento de documentos.")
    }
    
    Rel(user, frontend, "Acede aos painéis via navegador", "HTTPS")
    Rel(frontend, api, "Consome as operações de negócio e dados", "JSON/REST via HTTPS")
    Rel(api, db, "Faz leitura/escrita e executa migrations", "pgxpool/TCP porta 5432")

C4Component
    title Diagrama de Componentes - Frontend SPA (MVVM)

    Container(api, "API Backend", "Go 1.23", "API principal do sistema.")
    
    Container_Boundary(frontend, "Frontend SPA (React/Vite)") {
        Component(pages, "Pages / Views", "Componentes React", "Telas principais com as quais o utilizador interage (ex: ComercialDashboard, ComercialProposals, ComercialAvailability).")
        Component(components, "Shared Components", "Componentes React UI", "Design System e widgets isolados (DataTables, DataCards, Modais, KpiContainers, etc).")
        Component(viewmodels, "ViewModels", "React Hooks Genéricos", "Lógica de negócio do front: armazena estados persistidos (usePersistedState), gere filtros, cálculos agregados e preparação de tabelas.")
        Component(services, "Services (Model)", "TypeScript Classes/Objetos", "Camada de domínio que expõe chamadas claras (ex: PropostasService.listar()), ocultando a estrutura REST.")
        Component(apiclient, "API Client", "Fetch Wrapper", "Ponto único que executa requisições de rede (request), adiciona o token JWT e resolve os CORS/URL.")
        Component(entities, "Entities TS", "TS Interfaces", "Interfaces geradas automaticamente pelo Codegen refletindo precisamente o schema SQL do banco.")
    }

    Rel(pages, components, "Renderiza")
    Rel(pages, viewmodels, "Obtém estado, lista propriedades e dispara ações")
    Rel(viewmodels, services, "Delega requisições de domínio")
    Rel(services, apiclient, "Prepara payloads para o endpoint")
    Rel(apiclient, entities, "Deserializa a resposta em tipos estritos")
    Rel(apiclient, api, "Envia requisições HTTP REST", "JSON")

C4Component
    title Diagrama de Componentes - API Backend (Go)

    Container(frontend, "Frontend SPA", "React", "Interface web efetuando chamadas na API.")
    ContainerDb(db, "Base de Dados", "PostgreSQL", "Data store relacional.")
    
    Container_Boundary(api, "API REST (Go)") {
        Component(router, "Router (cmd/main.go & routes)", "Go/Gin", "Ponto de entrada (porta 8080). Inicializa a DB, carrega configuração, middlewares e rotas (/api/v1).")
        Component(auth_mw, "Auth Middleware", "Go", "Intercepta o request e verifica o token JWT no header. Injeta claims/contextos na requisição.")
        
        Component(h_auth, "Auth Handler", "Go", "Geração e validação de Tokens. Uso de Bcrypt para hashes de password.")
        Component(h_prop, "Propostas Handler", "Go", "Lida com fluxos complexos de proposta (Cessões, Taxas, Pareceres de Comitê, Histórico e Documentos).")
        Component(h_unid, "Unidades Handler", "Go", "Fornece visualizações físicas das unidades com processamento dinâmico.")
        
        Component(db_pool, "Database Connection", "Go/pgxpool", "Pool otimizado de conexões PostgreSQL. Dispara o golang-migrate automaticamente na inicialização.")
        Component(entities, "Entities Go", "Structs", "Estruturas Go (tags json e db) geradas via Codegen, servindo como a única fonte da verdade.")
    }

    Rel(frontend, router, "Requests de negócio HTTP", "JSON/REST")
    Rel(router, auth_mw, "Protege rotas sensíveis")
    Rel(auth_mw, h_auth, "Redireciona endpoints públicos e auth")
    Rel(auth_mw, h_prop, "Roteamento de Propostas")
    Rel(auth_mw, h_unid, "Roteamento de Unidades")
    
    Rel(h_auth, db_pool, "Lê/Escreve utilizadores")
    Rel(h_prop, db_pool, "Transações de negócio")
    Rel(h_unid, db_pool, "Lista/Agrega disponibilidade")
    
    Rel(db_pool, db, "Protocolo nativo PG", "TCP")
