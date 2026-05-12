# Resumo de Mudanças - JP-Mall PostgreSQL Security Hardening

## 📍 Localizações das Alterações no `jp-mall.sql`

### 1. ✅ **RLS em `lojistas` (Adição - Seção 4)**
```
LOCAL: Após CREATE POLICY sinistros_admin_only
ADIÇÃO: 
  - ALTER TABLE lojistas ENABLE ROW LEVEL SECURITY;
  - CREATE POLICY lojistas_admin_only ...
```
**Motivo**: Proteger tabela base contra acesso não autorizado

---

### 2. ✅ **SECURITY DEFINER Restringido (Modificação - Seção 5)**
```
LOCAL: Função pg_decrypt(bytea)
MUDANÇAS:
  - Adicionado validação: IF current_setting('app.encryption_key', true) IS NULL THEN RAISE EXCEPTION
  - REVOKE ALL ON FUNCTION pg_decrypt(bytea) FROM PUBLIC;
  - GRANT EXECUTE ON FUNCTION pg_decrypt(bytea) TO app_admin;
```
**Motivo**: Restringir acesso à descriptografia apenas para app_admin

---

### 3. ✅ **Trigger de Criptografia - Comentários Sobre HMAC (Modificação - Seção 5)**
```
LOCAL: Function lojistas_encrypt_trigger()
MUDANÇAS:
  - Comentário expandido sobre vulnerabilidade SHA256
  - Recomendação de HMAC com APP_SECRET
  - Clarificação que manter plaintext é intencional (não para destruir)
```
**Motivo**: Documentar necessidade de melhor proteção de hash

---

### 4. ✅ **FK Recreation Logic - Error Handling (Modificação - Seção 7)**
```
LOCAL: Bloco DO $$ ... $$ para recriar Foreign Keys
MUDANÇAS:
  - Adicionado comentário de advertência sobre FKs compostas
  - EXCEPTION handler com RAISE NOTICE
  - Melhor tratamento de erros
```
**Motivo**: Evitar falha silenciosa ao adicionar novas tabelas

---

### 5. ✅ **Documentação Arquitetural - Normalização (Adição - Seção 7)**
```
LOCAL: Após bloco de recriação de FKs
ADIÇÃO: Seção ============ NOTAS ARQUITETURAIS ============
  - Explicação sobre dias_restantes (derivável)
  - Alternativas de implementação (VIEW vs GENERATED COLUMN)
  - Explicação sobre NULL em lojistas ocupados
  - Sugestão de arquitetura alternativa (unidades vs ocupações)
```
**Motivo**: Capturar decisões arquiteturais para futuras refatorações

---

### 6. ✅ **CHECK Constraints Expandidos (Modificação - Seção 8)**
```
LOCAL: Bloco DO $$ ... $$ para ADD CONSTRAINT
MUDANÇAS:
  - Adicionado: chk_lojistas_ocupado_requires_nome
  - Adicionado: chk_contratos_luvas_nonneg
  - Adicionado: chk_contratos_percentual_range
  - Adicionado: chk_contratos_fim_after_inicio
  - Adicionado: chk_sinistros_franquia_nonneg
  - Adicionado: chk_propostas_vencimento_after_criacao
  - Adicionado: chk_propostas_area_positive
  - Adicionado: chk_propostas_valor_positive
```
**Motivo**: Validações de negócio mais robustas

---

## 📊 Comparação Antes vs Depois

| Aspecto | Antes | Depois | Status |
|--------|-------|--------|--------|
| RLS em lojistas | ❌ Nenhum | ✅ admin_only | ✅ Crítico Fixo |
| pg_decrypt Acesso | 🟡 PUBLIC | ✅ app_admin only | ✅ Crítico Fixo |
| Hash CNPJ | 🟡 SHA256 puro | ⚠️ Documentado + alert | ⏳ Pendente HMAC |
| FK Robustness | 🟡 Simples | ✅ Error handling | ✅ Melhorado |
| CHECK constraints | 🟡 4 básicos | ✅ 14 validações | ✅ Expandido |
| Documentação | 🟡 Mínima | ✅ Detalhada | ✅ Completo |

---

## 🧪 Como Testar as Mudanças

### Test 1: Validar RLS em `lojistas`
```sql
-- Como user com role app_readonly (sem SET ROLE app_admin)
SELECT * FROM lojistas;  
-- Esperado: 0 linhas (ou erro de RLS)

-- Como app_admin
SET ROLE app_admin;
SELECT COUNT(*) FROM lojistas;
-- Esperado: 50 linhas
```

### Test 2: Validar pg_decrypt Restringido
```sql
-- Como user com role app_readonly
SELECT pg_decrypt(cnpj_enc) FROM lojistas LIMIT 1;
-- Esperado: permission denied for function pg_decrypt

-- Como app_admin
SET ROLE app_admin;
SET app.encryption_key = 'TEST_KEY_32_CHARS_LONG_MINIMUM_!!';
SELECT pg_decrypt(cnpj_enc) FROM lojistas WHERE cnpj_enc IS NOT NULL LIMIT 1;
-- Esperado: CNPJ descriptografado
```

### Test 3: Validar CHECK Constraints
```sql
-- Tentar inserir lojista ocupado sem nome (deve falhar)
INSERT INTO lojistas (id, segmento, unidade, piso, corredor, area_m2, status)
VALUES ('TEST-001', 'Moda', 'L1-099', 'L1', 'A', 100, 'Ocupado');
-- Esperado: new row for relation "lojistas" violates check constraint "chk_lojistas_ocupado_requires_nome"

-- Tentar inserir contrato com fim antes de início (deve falhar)
INSERT INTO contratos (id, lojista_id, inicio, fim, valor_aluguel, luvas, indice_reajuste, tipo, desempenho, dias_restantes, status)
VALUES ('TEST-CTR', 'L1-001', '2027-01-01', '2026-01-01', 50000, 300000, 'IGPM', 'Aluguel Fixo', 90, 100, 'Ativo');
-- Esperado: violates check constraint "chk_contratos_fim_after_inicio"
```

### Test 4: Validar Novos CHECK Constraints
```sql
-- Area_m2 positivo
INSERT INTO propostas (id, lojista_id, lojista_nome, unidade, segmento, tipo, valor_proposto, area_m2, status, responsavel, data_criacao, data_vencimento)
VALUES ('FAIL-001', NULL, 'Test', 'L1-099', 'Moda', 'Nova Instalação', 30000, -50, 'Pendente', 'Test', '2026-05-12', '2026-06-12');
-- Esperado: violates check constraint "chk_propostas_area_positive"

-- Valor_proposto positivo
INSERT INTO propostas (id, lojista_id, lojista_nome, unidade, segmento, tipo, valor_proposto, area_m2, status, responsavel, data_criacao, data_vencimento)
VALUES ('FAIL-002', NULL, 'Test', 'L1-099', 'Moda', 'Nova Instalação', -30000, 100, 'Pendente', 'Test', '2026-05-12', '2026-06-12');
-- Esperado: violates check constraint "chk_propostas_valor_positive"
```

---

## 🔄 Próximas Ações Recomendadas

### Imediato (Antes de Merge):
- [ ] Rodar testes acima em desenvolvimento
- [ ] Validar que não há FKs compostas não previstas
- [ ] Executar `\dt+` no pgAdmin para listar todas as constraints

### Curto Prazo (Próxima Sprint):
- [ ] Implementar HMAC em hash de CNPJ
- [ ] Implementar Vault/KMS para key management
- [ ] Adicionar logging de acesso a pg_decrypt

### Médio Prazo:
- [ ] Refatorar model para unidades vs ocupações (se necessário)
- [ ] Converter dias_restantes para GENERATED COLUMN

---

## 📄 Documentação Associada

- **SEGURANCA_CORRECOES.md** - Análise completa de vulnerabilidades e soluções
- **jp-mall.sql** - Arquivo SQL com todas as mudanças implementadas

---

**Gerado em**: 12/05/2026  
**Versão**: 1.0  
**Responsável**: GitHub Copilot + Análise DBA
