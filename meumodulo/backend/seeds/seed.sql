-- SEED: Dados iniciais do módulo meumodulo

INSERT INTO mod_meumodulo_configs (id, tenant_id, key, value)
SELECT
    gen_random_uuid(),
    t.id,
    'module_enabled',
    'true'
FROM tenants t WHERE t.ativo = true LIMIT 1;

INSERT INTO mod_meumodulo_configs (id, tenant_id, key, value)
SELECT
    gen_random_uuid(),
    t.id,
    'version',
    '1.0.0'
FROM tenants t WHERE t.ativo = true LIMIT 1;
