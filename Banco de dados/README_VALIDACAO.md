# 🔐 Validação de Segurança - JP-Mall PostgreSQL

## ⚡ Quick Start - Executar Testes

### 1️⃣ Em Staging (OBRIGATÓRIO antes do commit):

```bash
# Conectar como app_admin e executar validação
psql -U app_admin -d jp_mall -f VALIDACAO_SEGURANCA.sql
```

### 2️⃣ Resultado Esperado:

```
====== TEST 1: RLS Habilitado em Todas as Tabelas ======
 schemaname │  tablename   │ rowsecurity
─────────────┼──────────────┼─────────────
 public      │ contratos    │ t
 public      │ lojistas     │ t           ← ✅ CRÍTICO
 public      │ multas       │ t
 public      │ propostas    │ t
 public      │ sinistros    │ t
(6 rows)

====== TEST 2: RLS Policies Criadas ======
[Deve mostrar policies com pg_has_role, não current_user = 'app_admin']

====== TEST 3: pg_decrypt() Acesso Restringido ======
 grantee  │ privilege_type │ is_grantable
──────────┼────────────────┼──────────────
 app_admin│ EXECUTE        │ f           ← ✅ APENAS app_admin

====== TEST 4: Function pg_decrypt() com SET search_path ======
 proname  │ security_definer │ proconfig
──────────┼──────────────────┼─────────────────
 pg_decrypt│ t                │ {search_path=public}  ← ✅ Tem search_path

====== TEST 5: Dados Plaintext Preservados ======
 id      │ nome         │ tem_plaintext_cnpj │ tem_enc_cnpj │ tem_hash_cnpj
─────────┼──────────────┼────────────────────┼──────────────┼───────────────
 L1-001  │ Renner       │ SIM                │ SIM          │ SIM  ← ✅ Tudo OK
(5 rows)

[... mais testes ...]

====== TEST 7: RLS em lojistas Funciona ======
 total_lojistas
────────────────
 50             ← ✅ App_admin vê todas as 50 linhas

====== TEST 8: CHECK Constraint lojistas_ocupado_requires_nome ======
ERROR:  new row for relation "lojistas" violates check constraint 
        "chk_lojistas_ocupado_requires_nome"  ← ✅ Constraint funcionando!

====== TEST 9: CHECK Constraint contratos_fim_after_inicio ======
ERROR:  new row for relation "contratos" violates check constraint 
        "chk_contratos_fim_after_inicio"  ← ✅ Constraint funcionando!

====== RELATÓRIO FINAL DE SEGURANÇA ======
✅ RLS Habilitadas: 6 tabelas (esperado: 6) ✅
✅ Policies Criadas: 6+ policies (esperado: >= 6) ✅
✅ CHECK Constraints: 14+ constraints (esperado: >= 14) ✅
✅ Foreign Keys: 4+ FKs (esperado: >= 4) ✅
✅ pg_decrypt EXECUTE grant (app_admin): 1 grants (esperado: 1) ✅

RESULTADO: SEGURANÇA CRÍTICA IMPLEMENTADA
```

---

## 📋 Checklist Pré-Commit

Antes de fazer commit, validar:

- [ ] Executou `VALIDACAO_SEGURANCA.sql` em staging
- [ ] **TEST 1**: RLS = true em todas 6 tabelas
- [ ] **TEST 2**: Policies usam `pg_has_role`, não `current_user = 'app_admin'`
- [ ] **TEST 3**: Apenas `app_admin` em `pg_decrypt()` grants
- [ ] **TEST 4**: `pg_decrypt()` tem `security_definer=true` e `search_path`
- [ ] **TEST 5**: Plaintext preservado (SIM) + encriptado + hash
- [ ] **TEST 6**: 14+ CHECK constraints
- [ ] **TEST 7**: RLS funciona (50 lojistas para app_admin)
- [ ] **TEST 8-10**: Constraints bloqueiam dados inválidos (ERRORs esperados)
- [ ] **TEST 11**: Índices criados para FKs
- [ ] **TEST 12**: FKs com ON DELETE RESTRICT

Se TODOS passam ✅ → Pronto para commit!

---

## 🚀 Arquivo Pronto para Commit:

```bash
git add jp-mall.sql
git add VALIDACAO_SEGURANCA.sql
git add SEGURANCA_CORRECOES.md
git add MUDANCAS_RESUMIDAS.md
git add GUIA_OPERACIONAL.md

git commit -m "🔐 Segurança: RLS, SECURITY DEFINER, CHECK constraints

- ✅ Habilitado RLS em lojistas (admin-only)
- ✅ RLS em todas tabelas usando pg_has_role() corretamente
- ✅ pg_decrypt() restrito apenas app_admin (REVOKE PUBLIC)
- ✅ Trigger preserva plaintext (sem destruição)
- ✅ 14 CHECK constraints de validação de negócio
- ✅ FK recreation com error handling
- ✅ Script VALIDACAO_SEGURANCA.sql para testes

DOCS:
- SEGURANCA_CORRECOES.md: Análise de vulnerabilidades
- MUDANCAS_RESUMIDAS.md: Localização de mudanças
- GUIA_OPERACIONAL.md: Setup de produção

Próximas sprints:
- Implementar Vault/KMS para key management
- Converter SHA256 para HMAC com APP_SECRET
- Audit logging para pg_decrypt()"

git push
```

---

## 🔍 Troubleshooting

### Erro: "permission denied for function pg_decrypt"

Significa que o GRANT está funcionando! ✅  
Quem recebeu o erro NÃO é app_admin.

### Erro: "violates check constraint"

Esperado! ✅ Significa que a validação de negócio está funcionando.  
Testes propositalmente inserem dados inválidos para validar rejeição.

### Erro: "RLS policy missing"

Problema! ❌  
Executar:
```sql
SELECT * FROM pg_policies WHERE tablename = 'lojistas';
```
Se retorna 0, reexecutar as seções 4 (RLS) do `jp-mall.sql`.

### Erro: "rowsecurity = false"

Problema! ❌  
Executar:
```sql
ALTER TABLE lojistas ENABLE ROW LEVEL SECURITY;
```

---

## 📞 Após Validação Bem-Sucedida

✅ Fazer commit  
✅ Fazer push para staging  
✅ Comunicar time: "Segurança crítica implementada, validada e commitada"  
⏳ Sprint próxima: Vault/KMS + HMAC

---

**Gerado**: 12/05/2026  
**Status**: Pronto para Commit  
**Validação**: Obrigatória em Staging antes de Deploy
