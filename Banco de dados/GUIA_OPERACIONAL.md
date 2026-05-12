# 🔐 Guia Operacional de Segurança - JP-Mall PostgreSQL

## Procedimentos Recomendados para Produção

---

## 1️⃣ Inicialização de Sessão (Login)

### Para Aplicação Backend:

```sql
-- CONEXÃO 1: Conectar como app_admin para setup inicial
psql -U app_admin -d jp_mall -h db.example.com

-- Configurar chave de criptografia (⚠️ CRÍTICO)
SET app.encryption_key = 'CHAVE_SECRETA_DE_32_CHARS_MINIMO!!!';

-- Configurar lojista atual (se aplicável)
SET app.current_lojista = 'L1-001';

-- Definir search_path para evitar SQL injection
SET search_path = public;

-- Executar operações administrativas
-- ...

-- Terminar sessão
\q
```

### Para Usuário Read-Only (Analytics/Reporting):

```sql
-- CONEXÃO 2: Conectar como app_readonly
psql -U app_readonly -d jp_mall -h db.example.com

-- NÃO PRECISA SET ROLE (já é read-only por padrão)

-- Executar queries de leitura
SELECT * FROM lojistas;  -- Bloqueado por RLS (retorna 0 linhas)
SELECT * FROM contratos; -- Bloqueado por RLS

-- Se precisar de acesso a dados de uma lojista específica:
SET app.current_lojista = 'L1-001';
SELECT * FROM contratos;  -- Agora retorna dados filtrados
```

---

## 2️⃣ Configuração de Chave de Criptografia

### ⚠️ NUNCA FAÇA ISSO:

```bash
# ❌ INSEGURO: Chave em arquivo de config
export DB_ENCRYPTION_KEY="my-secret-key"
psql -U app_admin -d jp_mall << EOF
  SET app.encryption_key = 'my-secret-key';
  ...
EOF

# ❌ INSEGURO: Chave hardcoded em código
new_setting = "SET app.encryption_key = 'xyz123abc'"

# ❌ INSEGURO: Chave em logs
SELECT pg_stat_statements;  -- Pode conter chave se log_statement='all'
```

### ✅ RECOMENDADO: Usar Vault/KMS

```python
# Exemplo Python com HashiCorp Vault
import hvac
import psycopg2

# 1. Conectar ao Vault
client = hvac.Client(url='https://vault.example.com', token=os.environ['VAULT_TOKEN'])

# 2. Recuperar chave (vai ter TTL, ex: 1 hora)
secret = client.secrets.kv.v2.read_secret_version(path='jp-mall/db/encryption_key')
encryption_key = secret['data']['data']['key']

# 3. Conectar ao PostgreSQL
conn = psycopg2.connect(
    host="db.example.com",
    user="app_admin",
    password=os.environ['DB_PASSWORD'],
    database="jp_mall"
)

# 4. Aplicar chave (apenas nesta sessão)
cursor = conn.cursor()
cursor.execute(f"SET app.encryption_key = %s", (encryption_key,))

# 5. Executar operações (trigger encripta automaticamente)
cursor.execute("""
    UPDATE lojistas 
    SET nome = %s
    WHERE id = %s
""", ('Nova Nome Inc.', 'L1-001'))

conn.commit()
cursor.close()
conn.close()

# 6. Chave é descartada ao fechar sessão
```

---

## 3️⃣ Operações Administrativas Comuns

### Inserir Nova Filial (Ocupada)

```sql
SET ROLE app_admin;
SET app.encryption_key = '...';  -- Fornecido por Vault

INSERT INTO lojistas (
  id, nome, cnpj, segmento, responsavel, email, telefone,
  unidade, piso, corredor, area_m2, status, faturamento_medio
) VALUES (
  'L1-099',
  'Loja Exemplo',
  '12.345.678/0001-90',
  'Moda',
  'João Silva',
  'joao@loja.com.br',
  '(62) 3333-3333',
  'L1-099',
  'L1',
  'A',
  250,
  'Ocupado',
  1500000
);
-- Trigger encripta automaticamente: cnpj_enc, email_enc, telefone_enc
-- Trigger gera hash: cnpj_hash
```

### Descriptografar CNPJ (Apenas Admin)

```sql
SET ROLE app_admin;
SET app.encryption_key = '...';

-- Opção 1: Usar função pg_decrypt
SELECT 
  id,
  nome,
  pg_decrypt(cnpj_enc) AS cnpj_descriptografado,
  pg_decrypt(email_enc) AS email_descriptografado
FROM lojistas
WHERE id = 'L1-001';

-- Opção 2: Usar plaintext (se ainda não migrado para enc-only)
SELECT id, nome, cnpj, email FROM lojistas WHERE id = 'L1-001';
```

### Atualizar Contrato

```sql
SET ROLE app_admin;

UPDATE contratos
SET 
  valor_aluguel = 78000,
  status = 'Em Renovação',
  dias_restantes = EXTRACT(DAY FROM (fim - CURRENT_DATE))::INT
WHERE id = 'CTR-2024-001';

-- ⚠️ NOTA: dias_restantes é derivável e redundante
--          considere remover esta coluna no futuro
```

---

## 4️⃣ Backup e Recuperação com Criptografia

### Backup Seguro

```bash
#!/bin/bash

BACKUP_DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="jp_mall_backup_${BACKUP_DATE}.sql.gz"

# Backup do schema (SEM dados sensíveis em plaintext)
pg_dump \
  --host=db.example.com \
  --username=app_admin \
  --dbname=jp_mall \
  --schema-only \
  --compress=9 \
  > "schema_${BACKUP_DATE}.sql.gz"

# Backup de dados (com colunas encriptadas)
pg_dump \
  --host=db.example.com \
  --username=app_admin \
  --dbname=jp_mall \
  --data-only \
  --compress=9 \
  > "${BACKUP_FILE}"

# Criptografar arquivo com GPG
gpg --symmetric --cipher-algo AES256 "${BACKUP_FILE}"

# Deletar original não criptografado
rm "${BACKUP_FILE}"

echo "Backup salvo em: ${BACKUP_FILE}.gpg"
```

### Restauração Segura

```bash
#!/bin/bash

BACKUP_FILE="jp_mall_backup_20260512_120000.sql.gz.gpg"

# Descriptografar
gpg --decrypt "${BACKUP_FILE}" > /tmp/backup.sql.gz

# Restaurar
gunzip < /tmp/backup.sql.gz | psql \
  --host=db.example.com \
  --username=app_admin \
  --dbname=jp_mall_staging

# Limpar arquivo temporário
rm /tmp/backup.sql.gz

echo "Restauração concluída"
```

---

## 5️⃣ Auditoria e Logging

### Ativar Auditoria de Função pg_decrypt

```sql
-- Criar tabela de auditoria
CREATE TABLE audit_pg_decrypt (
  id SERIAL PRIMARY KEY,
  user_name TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  session_id TEXT,
  ip_address INET
);

-- Criar trigger para registrar chamadas
CREATE OR REPLACE FUNCTION audit_pg_decrypt_trigger()
RETURNS void AS $$
BEGIN
  INSERT INTO audit_pg_decrypt (user_name, session_id, ip_address)
  VALUES (
    current_user,
    current_setting('application_name', true),
    (SELECT client_addr FROM pg_stat_activity WHERE pid = pg_backend_pid())
  );
END;
$$ LANGUAGE plpgsql;

-- (Alternativa: usar EventTrigger + pgaudit extension)
```

### Monitorar Accesos Não Autorizados

```sql
-- Query para detectar tentativas de RLS bypass
SELECT 
  datname,
  usename,
  application_name,
  client_addr,
  query,
  query_start
FROM pg_stat_statements
WHERE query ILIKE '%SELECT%lojistas%'
  AND usename != 'app_admin'
ORDER BY query_start DESC
LIMIT 10;
```

---

## 6️⃣ Rotação de Chave de Criptografia

### Procedimento (Planejado Quarterly)

```sql
-- 1. Backup antes de rotação
-- ... execute backup procedure ...

-- 2. Configurar nova chave em sessão separada
SET app.encryption_key = 'NOVA_CHAVE_32_CHARS_MINIMO!!!';

-- 3. Reencriptar dados (em background, fora de horário de pico)
UPDATE lojistas
SET 
  cnpj_enc = pgp_sym_encrypt(pg_decrypt(cnpj_enc), 'NOVA_CHAVE_32_CHARS_MINIMO!!!'),
  email_enc = pgp_sym_encrypt(pg_decrypt(email_enc), 'NOVA_CHAVE_32_CHARS_MINIMO!!!'),
  telefone_enc = pgp_sym_encrypt(pg_decrypt(telefone_enc), 'NOVA_CHAVE_32_CHARS_MINIMO!!!'),
  cnpj_hash = NULL  -- Will be recalculated by trigger
WHERE cnpj_enc IS NOT NULL;

-- 4. Trigger recalcula hash com nova chave

-- 5. Validar integridade
SELECT COUNT(*) FROM lojistas WHERE cnpj_enc IS NOT NULL;
-- Deve retornar número de lojistas com CNPJ

-- 6. Atualizar Vault/KMS com nova chave

-- 7. Testar descriptografia
SELECT pg_decrypt(cnpj_enc) FROM lojistas LIMIT 1;

-- 8. Logs de auditoria registram rotação
```

---

## 7️⃣ Troubleshooting Comum

### Problema: "permission denied for function pg_decrypt"

```sql
-- Causa: Usuário não tem EXECUTE grant
-- Solução:
SET ROLE app_admin;
GRANT EXECUTE ON FUNCTION pg_decrypt(bytea) TO your_user;
```

### Problema: "no rows returned" em SELECT lojistas

```sql
-- Causa: RLS está bloqueando acesso
-- Solução 1: Verificar que é admin
SELECT current_user;
SELECT pg_has_role(current_user, 'app_admin', 'member');

-- Solução 2: Usar SET ROLE explicitamente
SET ROLE app_admin;
SELECT COUNT(*) FROM lojistas;
```

### Problema: "could not decrypt" em pg_decrypt

```sql
-- Causa: Chave de descriptografia está diferente da que encriptou
-- Solução:
-- 1. Verificar que app.encryption_key está configurada
SELECT current_setting('app.encryption_key');

-- 2. Verificar que é a chave correta
-- 3. Se não souber a chave correta, dados estão irrecuperáveis (by design)
```

### Problema: RLS permite acesso quando deveria bloquear

```sql
-- Debug: Ver qual policy está sendo aplicada
SELECT polname FROM pg_policies WHERE tablename = 'lojistas';

-- Checar condição USING
SELECT * FROM pg_policies WHERE tablename = 'lojistas' AND polname = 'lojistas_admin_only';

-- Testar role membership
SELECT pg_has_role('user_name', 'app_admin', 'member');
```

---

## 8️⃣ Checklist de Segurança Antes de Deploy

- [ ] Validar que `app.encryption_key` vem de Vault/KMS, não hardcoded
- [ ] Validar que RLS funciona em app_readonly (retorna 0 linhas)
- [ ] Validar que RLS funciona em app_admin (retorna todas as linhas)
- [ ] Validar que pg_decrypt rejeita app_readonly (permission denied)
- [ ] Validar que pg_decrypt funciona para app_admin com chave correta
- [ ] Testar CHECK constraints (tente inserir dados inválidos)
- [ ] Configurar audit logging para pg_decrypt
- [ ] Implementar backup automático com criptografia GPG
- [ ] Documentar processo de rotação de chave
- [ ] Treinar equipe ops em procedimentos
- [ ] Ter plano de recuperação em caso de perda de chave
- [ ] Testar recuperação de backup em staging

---

## 📞 Contatos de Suporte

- **DBA Responsável**: [DBA Name]
- **Security Officer**: [Security Contact]
- **Escalation**: [On-call Contact]

---

**Última Atualização**: 12/05/2026  
**Revisor**: DBA Sênior PostgreSQL  
**Próxima Revisão**: 12/08/2026
