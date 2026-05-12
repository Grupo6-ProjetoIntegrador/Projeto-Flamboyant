# Correções Críticas de Segurança - JP-Mall PostgreSQL Schema

**Data**: 12/05/2026  
**Status**: ✅ Implementado

---

## 📋 Resumo Executivo

Este documento descreve as correções de segurança aplicadas ao esquema PostgreSQL do JP-Mall após análise de vulnerabilidades críticas identificadas nas implementações de RLS, criptografia e controle de acesso.

---

## 🔴 Vulnerabilidades Corrigidas

### 1. **CRÍTICO: Tabela `lojistas` Desprotegida (RLS)**

**Problema**: A tabela base `lojistas` não tinha RLS habilitado, expondo dados sensíveis (CNPJ, email, telefone) de todas as filiais a qualquer usuário autenticado, mesmo que as tabelas dependentes (contratos, multas, propostas) estivessem protegidas.

**Impacto**: Quebra de confidencialidade de dados comercialmente sensíveis

**Solução Implementada**:
```sql
ALTER TABLE lojistas ENABLE ROW LEVEL SECURITY;
CREATE POLICY lojistas_admin_only ON lojistas FOR ALL
  USING ( pg_has_role(current_user, 'app_admin', 'member') )
  WITH CHECK ( pg_has_role(current_user, 'app_admin', 'member') );
```

**Nota Futura**: Se precisar que lojistas acessem seu próprio perfil, adicionar:
```sql
CREATE POLICY lojistas_self_view ON lojistas FOR SELECT 
  USING (id = current_setting('app.current_lojista', true));
```

---

### 2. **CRÍTICO: Função `pg_decrypt()` Exposta ao Público**

**Problema**: Função com `SECURITY DEFINER` estava acessível para todos os usuários (PUBLIC), permitindo que qualquer usuário descriptografasse dados sensíveis.

**Impacto**: Comprometimento total da criptografia de CNPJ, email e telefone

**Solução Implementada**:
```sql
REVOKE ALL ON FUNCTION pg_decrypt(bytea) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION pg_decrypt(bytea) TO app_admin;
```

**Proteção Adicional**: Adicionada validação de chave dentro da função:
```sql
IF current_setting('app.encryption_key', true) IS NULL THEN
  RAISE EXCEPTION 'app.encryption_key não configurada';
END IF;
```

---

### 3. **ALTA: Hash SHA256 Sem Salt (Vulnerável a Dictionary Attack)**

**Problema**: Campo `cnpj_hash` usando `SHA256(cnpj)` puro permite pré-computação de hashes para CNPJs conhecidos (todos os CNPJs do mall são públicos).

**Impacto**: Reversão de hash no índice UNIQUE via rainbow tables

**Solução Atual**: Adicionado comentário alertando sobre a vulnerabilidade e recomendação de HMAC

**Solução Futura (Recomendada)**:
```sql
-- Usar HMAC com segredo da aplicação (nunca exponha em código)
NEW.cnpj_hash := encode(
  hmac(NEW.cnpj::text, 'APP_SECRET_FROM_ENV', 'sha256'), 
  'hex'
);
```

**Ação Recomendada**: 
- [ ] Implementar variável de ambiente com APP_SECRET
- [ ] Atualizar trigger para usar HMAC
- [ ] Recomputar hashes existentes

---

### 4. **MÉDIA: Lógica de Recriação Dinâmica de FKs Frágil**

**Problema**: Bloco `DO $$ ... $$` que recria FKs assume coluna única `lojista_id`. Pode falhar com FKs compostas ou colunas nomeadas diferentemente.

**Impacto**: Possível falha silenciosa ao adicionar novas tabelas com FKs compostas

**Solução Implementada**:
- Adicionado tratamento de exceções melhorado
- Adicionado comentário de aviso e RAISE NOTICE em caso de falha
- Documentado que requer adaptação para FKs compostas

```sql
EXCEPTION WHEN others THEN
  RAISE NOTICE 'Falha ao recrear FK %: verifique se existe coluna lojista_id ou se a FK é composta', r.conname;
END;
```

---

## ⚠️ Advertências e Recomendações Futuras

### 1. **Gerenciamento de Chave de Criptografia**

**Status Atual**: `current_setting('app.encryption_key')` (inseguro para produção)

**Problemas**:
- Chave transmitida pela sessão (loggável em pg_stat_statements se log_statement='all')
- Chave em memória do PostgreSQL sem proteção do SO
- Sem rotação de chave

**Recomendação Produção**:
- [ ] Implementar HashiCorp Vault
- [ ] Ou usar AWS KMS / Azure Key Vault
- [ ] Backend aplicação fornece chave antes de migrations
- [ ] Nunca enviar chave ao cliente

---

### 2. **Normalização: Campo Redundante `dias_restantes`**

**Status**: Derivável de `contratos.fim`

**Problema**: Campo armazenado fica inconsistente após passagem de data de vencimento

**Recomendação**:
```sql
-- Opção 1: VIEW
CREATE VIEW contratos_dias_restantes AS
  SELECT *, EXTRACT(DAY FROM (fim - CURRENT_DATE))::INT AS dias_restantes
  FROM contratos;

-- Opção 2: Generated Column (PostgreSQL 12+)
ALTER TABLE contratos ADD COLUMN dias_restantes_computed INT
  GENERATED ALWAYS AS (EXTRACT(DAY FROM (fim - CURRENT_DATE))::INT) STORED;
```

---

### 3. **Constraints de Negócio: Lojistas Ocupados**

**Implementado**: CHECK constraint `chk_lojistas_ocupado_requires_nome`

```sql
CHECK (status = 'Disponível' OR (status = 'Ocupado' AND nome IS NOT NULL))
```

**Alternativa Arquitetural** (mais normalizada):
```sql
-- Separar conceitos: unidades (físicas) vs ocupações (temporais)
CREATE TABLE unidades (
  id VARCHAR(10) PRIMARY KEY,
  piso tipo_piso NOT NULL,
  corredor tipo_corredor NOT NULL,
  area_m2 INT NOT NULL
);

CREATE TABLE ocupacoes (
  id SERIAL PRIMARY KEY,
  unidade_id VARCHAR(10) NOT NULL REFERENCES unidades(id),
  lojista_id VARCHAR(10) NOT NULL REFERENCES lojistas(id),
  data_inicio DATE NOT NULL,
  data_fim DATE,
  FOREIGN KEY (lojista_id) REFERENCES lojistas(id)
);
```

---

## ✅ Validações Aplicadas

### CHECK Constraints Adicionados:

| Tabela | Constraint | Validação |
|--------|-----------|-----------|
| lojistas | chk_lojistas_area_m2_positive | area_m2 > 0 |
| lojistas | chk_lojistas_faturamento_nonneg | faturamento_medio >= 0 |
| lojistas | chk_lojistas_ocupado_requires_nome | status='Disponível' OU nome NOT NULL |
| contratos | chk_contratos_valor_nonneg | valor_aluguel >= 0 |
| contratos | chk_contratos_luvas_nonneg | luvas >= 0 |
| contratos | chk_contratos_percentual_range | 0 <= percentual_faturamento <= 100 |
| contratos | chk_contratos_desempenho_range | 0 <= desempenho <= 100 |
| contratos | chk_contratos_fim_after_inicio | fim > inicio |
| multas | chk_multas_valor_positive | valor > 0 |
| sinistros | chk_sinistros_indenizacao_nonneg | valor_indenizacao >= 0 (or NULL) |
| sinistros | chk_sinistros_franquia_nonneg | valor_franquia >= 0 (or NULL) |
| propostas | chk_propostas_vencimento_after_criacao | data_vencimento >= data_criacao |
| propostas | chk_propostas_area_positive | area_m2 > 0 |
| propostas | chk_propostas_valor_positive | valor_proposto > 0 |

---

## 📊 Status de Implementação

| Item | Status | Data |
|------|--------|------|
| ✅ RLS em lojistas | Implementado | 12/05/2026 |
| ✅ SECURITY DEFINER restringido | Implementado | 12/05/2026 |
| ✅ Hash com HMAC (alert) | Documentado | 12/05/2026 |
| ✅ FK recreation robustness | Melhorado | 12/05/2026 |
| ✅ CHECK constraints | Implementado | 12/05/2026 |
| ⏳ Key management (Vault/KMS) | Recomendado | Futuro |
| ⏳ dias_restantes (view/computed) | Recomendado | Futuro |

---

## 🚀 Próximos Passos Recomendados

### Curto Prazo (Antes de Deploy):
1. [ ] Testar RLS com usuários app_readonly e app_writer
2. [ ] Validar que pg_decrypt rejeita usuários não-admin
3. [ ] Executar query de teste em produção (staging)
4. [ ] Documentar fluxo de login e SET ROLE

### Médio Prazo (Sprint seguinte):
1. [ ] Implementar Vault/KMS para key management
2. [ ] Converter `dias_restantes` para generated column
3. [ ] Adicionar policy de auto-acesso para lojistas ao próprio perfil
4. [ ] Audit logging para pg_decrypt calls

### Longo Prazo (Roadmap):
1. [ ] Refatorar modelo para separar unidades vs ocupações
2. [ ] Implementar column-level encryption (pgvault ou similar)
3. [ ] Adicionar database-level backup encryption
4. [ ] Implementar key rotation automática

---

## 📝 Notas de Implementação

### Roles - Herança vs Explicit SET ROLE

**Configuração Atual**: Roles com `NOINHERIT`
```sql
CREATE ROLE app_readonly;        -- Sem herança
CREATE ROLE app_writer;
CREATE ROLE app_admin;
```

**Implicação**: Usuários que herdam essas roles devem fazer:
```sql
SET ROLE app_admin;              -- Explicit role switch
SELECT current_user;             -- Mostra app_admin
```

**Alternativa**: Usar `INHERIT` e evitar `SET ROLE`:
```sql
CREATE ROLE app_admin INHERIT;
-- Usuário membro direto accessa como se fosse membro da role
```

**Decisão Recomendada**: Manter `NOINHERIT` (mais seguro) com documentação clara de uso.

---

## 🔗 Referências

- PostgreSQL RLS: https://www.postgresql.org/docs/current/ddl-rowsecurity.html
- SECURITY DEFINER: https://www.postgresql.org/docs/current/sql-createfunction.html
- PGCrypto: https://www.postgresql.org/docs/current/pgcrypto.html
- HMAC in PostgreSQL: `SELECT hmac('text', 'secret', 'sha256');`

---

**Documento Preparado por**: GitHub Copilot  
**Revisão Final Recomendada**: DBA Sênior PostgreSQL
