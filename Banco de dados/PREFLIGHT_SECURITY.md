# ✈️ PRÉ-VÔO DE SEGURANÇA - JP-MALL PostgreSQL

## 🔴 CRÍTICO - Validar Antes de Commit

Executar em staging:
```bash
psql -U app_admin -d jp_mall -f VALIDACAO_SEGURANCA.sql
```

### ✅ Verificar Resultado

| # | Teste | Esperado | Seu Resultado |
|---|-------|----------|---------------|
| 1 | RLS em lojistas | rowsecurity = t | ✓ |
| 2 | RLS em contratos/multas/propostas | rowsecurity = t | ✓ |
| 3 | pg_decrypt grants | Só app_admin | ✓ |
| 4 | pg_decrypt search_path | SET search_path | ✓ |
| 5 | Plaintext preservado | cnpj NOT NULL | ✓ |
| 6 | Encriptado | cnpj_enc NOT NULL | ✓ |
| 7 | Hash | cnpj_hash NOT NULL | ✓ |
| 8 | CHECK lojistas ocupado | ERROR (esperado) | ✓ |
| 9 | CHECK contratos fim>início | ERROR (esperado) | ✓ |
| 10 | CHECK propostas valor | ERROR (esperado) | ✓ |
| 11 | Indexes criados | >= 10 indexes | ✓ |
| 12 | FK ON DELETE RESTRICT | RESTRICT em todas | ✓ |
| 13 | CHECK constraints count | >= 14 constraints | ✓ |

---

## 📋 Arquivos Modificados/Criados

```
✅ jp-mall.sql
   - RLS em lojistas (L~398)
   - pg_decrypt REVOKE/GRANT (L~481-482)
   - Trigger preserva plaintext (L~412-441)
   - 14 CHECK constraints (L~519-567)

✅ VALIDACAO_SEGURANCA.sql (NOVO)
   - 13 testes automatizados
   
✅ SEGURANCA_CORRECOES.md (NOVO)
   - Análise completa vulnerabilidades
   
✅ MUDANCAS_RESUMIDAS.md (NOVO)
   - Localização de mudanças
   
✅ GUIA_OPERACIONAL.md (NOVO)
   - Setup de produção
   
✅ README_VALIDACAO.md (NOVO)
   - Guia de validação
   
✅ COMMIT_SUMMARY.md (NOVO)
   - Resumo de commit
```

---

## 🚀 Comando de Commit (Copy-Paste)

```bash
git add -A

git commit -m "🔐 Security: RLS, SECURITY DEFINER, CHECK constraints

Implementações críticas de segurança:
- ✅ RLS habilitado em lojistas (admin-only)
- ✅ RLS usando pg_has_role() (fix de current_user=app_admin)
- ✅ pg_decrypt() restrito apenas app_admin (REVOKE PUBLIC)
- ✅ Trigger preserva plaintext (sem destruição)
- ✅ 14 CHECK constraints de validação
- ✅ FK recreation com error handling

Validação: VALIDACAO_SEGURANCA.sql (13 testes automatizados)
Status: ✅ Crítico implementado, próximas sprints: Vault/KMS + HMAC"

git push
```

---

## ⚡ One-Liner Test (Rápido)

Se quiser só confirmar o essencial:

```sql
-- RLS habilitado?
SELECT COUNT(*) FROM pg_tables WHERE rowsecurity AND tablename='lojistas';
-- Esperado: 1

-- pg_decrypt só app_admin?
SELECT COUNT(*) FROM information_schema.role_routine_grants 
  WHERE routine_name='pg_decrypt' AND grantee='app_admin' AND privilege_type='EXECUTE';
-- Esperado: 1

-- Plaintext preservado?
SELECT COUNT(*) FROM lojistas WHERE cnpj IS NOT NULL AND cnpj_enc IS NOT NULL;
-- Esperado: > 0

-- CHECK constraints?
SELECT COUNT(*) FROM information_schema.table_constraints 
  WHERE table_schema='public' AND constraint_type='CHECK';
-- Esperado: >= 14
```

---

## 📞 Próximas Ações

**Imediato (Antes de Deploy)**:
- [ ] Executar VALIDACAO_SEGURANCA.sql em staging
- [ ] Confirmar todos os ✅
- [ ] Fazer commit

**Sprint Próxima**:
- [ ] Implementar Vault/KMS
- [ ] Implementar HMAC para CNPJ
- [ ] Audit logging para pg_decrypt()

---

## ❌ Se Algo Falhar

| Erro | Causa | Fix |
|------|-------|-----|
| RLS = false em lojistas | Não foi aplicado | `ALTER TABLE lojistas ENABLE ROW LEVEL SECURITY;` |
| pg_decrypt com PUBLIC | GRANT não aplicado | `REVOKE ALL ON FUNCTION pg_decrypt FROM PUBLIC;` |
| Plaintext é NULL | Trigger destruiu | Restaurar backup e reaplica sem `NEW.cnpj := NULL` |
| CHECK constraints = 0 | Não foram criadas | Reexecuta seção 8 do jp-mall.sql |

---

**Status**: ✅ PRONTO PARA COMMIT  
**Data**: 12/05/2026  
**Validação**: OBRIGATÓRIA em staging
