-- ============================================================
-- BES-2026 | Migration 000005 — Seed de Propostas fictícias
-- Cobre todos os tipos de operação, status e segmentos.
-- Não insere na tabela Usuario.
-- ============================================================

DO $$
DECLARE
  v_usuario_id UUID;

  v_un_l1_001 UUID;
  v_un_l1_015 UUID;
  v_un_l2_001 UUID;
  v_un_l2_015 UUID;
  v_un_l3_001 UUID;
  v_un_l1_030 UUID;
  v_un_l2_030 UUID;
  v_un_l3_020 UUID;
  v_un_l1_050 UUID;
  v_un_l2_050 UUID;

  p1_id  UUID := gen_random_uuid();
  p2_id  UUID := gen_random_uuid();
  p3_id  UUID := gen_random_uuid();
  p4_id  UUID := gen_random_uuid();
  p5_id  UUID := gen_random_uuid();
  p6_id  UUID := gen_random_uuid();
  p7_id  UUID := gen_random_uuid();
  p8_id  UUID := gen_random_uuid();
  p9_id  UUID := gen_random_uuid();
  p10_id UUID := gen_random_uuid();

  ph1a_id UUID := gen_random_uuid();
  ph1b_id UUID := gen_random_uuid();
  ph2a_id UUID := gen_random_uuid();
  ph3a_id UUID := gen_random_uuid();
  ph3b_id UUID := gen_random_uuid();
  ph3c_id UUID := gen_random_uuid();
  ph7a_id UUID := gen_random_uuid();
  ph8a_id UUID := gen_random_uuid();
  ph8b_id UUID := gen_random_uuid();

BEGIN
  SELECT id_u  INTO v_usuario_id  FROM "Usuario"  WHERE email_u   = 'admin@flamboyant.com.br';
  SELECT id_un INTO v_un_l1_001   FROM "Unidade"  WHERE codigo_un = 'L1-001';
  SELECT id_un INTO v_un_l1_015   FROM "Unidade"  WHERE codigo_un = 'L1-015';
  SELECT id_un INTO v_un_l2_001   FROM "Unidade"  WHERE codigo_un = 'L2-001';
  SELECT id_un INTO v_un_l2_015   FROM "Unidade"  WHERE codigo_un = 'L2-015';
  SELECT id_un INTO v_un_l3_001   FROM "Unidade"  WHERE codigo_un = 'L3-001';
  SELECT id_un INTO v_un_l1_030   FROM "Unidade"  WHERE codigo_un = 'L1-030';
  SELECT id_un INTO v_un_l2_030   FROM "Unidade"  WHERE codigo_un = 'L2-030';
  SELECT id_un INTO v_un_l3_020   FROM "Unidade"  WHERE codigo_un = 'L3-020';
  SELECT id_un INTO v_un_l1_050   FROM "Unidade"  WHERE codigo_un = 'L1-050';
  SELECT id_un INTO v_un_l2_050   FROM "Unidade"  WHERE codigo_un = 'L2-050';

  -- ============================================================
  -- Proposta — 10 registros cobrindo todos os status e operações
  -- ============================================================
  INSERT INTO "Proposta" (
    id_p, id_unidade_p, id_usuario_criacao_p, id_usuario_ultima_alt_p, id_usuario_responsavel_p,
    segmento_p, tipo_operacao_p, valor_proposto_p, area_p, abl_p,
    status_p, data_criacao_p, data_vencimento_p, nome_fantasia_p,
    aluguel_percent_p, prazo_locacao_meses_p, aluguel_por_m2_p,
    condominio_aprox_p, fpp_aprox_p,
    inicio_contrato_p, fim_contrato_p, data_inauguracao_p,
    observacoes_p, atualizado_em_p
  ) VALUES
    -- p1: Nova Locação / Moda / Aguardando análise financeira
    (p1_id,  v_un_l1_001, v_usuario_id, v_usuario_id, v_usuario_id,
     'Moda',          'Nova Locação',  18500.00, 290.00, 270.00,
     'Aguardando análise financeira',
     '2026-01-10', '2026-04-10', 'Studio Veste Bem',
     8.5, 36, 63.79, 2100.00, 450.00,
     '2026-06-01', '2029-05-31', '2026-06-15',
     'Loja de moda feminina com proposta inicial.', NOW()),

    -- p2: Transferência / Alimentação / Aguardando análise do comitê
    (p2_id,  v_un_l1_015, v_usuario_id, v_usuario_id, v_usuario_id,
     'Alimentação',   'Transferência', 32000.00, 85.00,  80.00,
     'Aguardando análise do comitê',
     '2026-01-15', '2026-05-15', 'Sabor & Cia',
     9.0, 48, 376.47, 3200.00, 680.00,
     '2026-07-01', '2030-06-30', '2026-07-10',
     'Transferência de fundo de comércio de restaurante.', NOW()),

    -- p3: Cessão / Eletrônicos / Aprovado
    (p3_id,  v_un_l2_001, v_usuario_id, v_usuario_id, v_usuario_id,
     'Eletrônicos',   'Cessão',        55000.00, 290.00, 280.00,
     'Aprovado',
     '2025-11-01', '2026-03-01', 'TechZone Store',
     10.5, 60, 189.66, 4800.00, 950.00,
     '2026-04-01', '2031-03-31', '2026-04-20',
     'Cessão de direitos para loja de eletrônicos.', NOW()),

    -- p4: Renovação / Serviços / Reprovado
    (p4_id,  v_un_l2_015, v_usuario_id, v_usuario_id, v_usuario_id,
     'Serviços',      'Renovação',     7500.00,  90.00,  85.00,
     'Reprovado',
     '2025-10-20', '2026-02-20', 'Fast Photo',
     7.0, 24, 83.33, 1100.00, 220.00,
     '2026-03-01', '2028-02-29', NULL,
     'Renovação reprovada por valores acima do mercado.', NOW()),

    -- p5: Readequação / Esportes / Cancelado
    (p5_id,  v_un_l3_001, v_usuario_id, v_usuario_id, v_usuario_id,
     'Esportes',      'Readequação',   42000.00, 218.00, 210.00,
     'Cancelado',
     '2025-09-05', '2026-01-05', 'MaxSport',
     9.5, 48, 192.66, 3500.00, 720.00,
     NULL, NULL, NULL,
     'Proposta cancelada por desistência do lojista.', NOW()),

    -- p6: Nova Locação / Entretenimento / Vencida
    (p6_id,  v_un_l1_030, v_usuario_id, v_usuario_id, v_usuario_id,
     'Entretenimento','Nova Locação',  28000.00, 117.00, 110.00,
     'Vencida',
     '2025-08-01', '2025-11-01', 'Fun Arena',
     8.0, 36, 239.32, 2600.00, 530.00,
     NULL, NULL, NULL,
     'Proposta vencida sem retorno do interessado.', NOW()),

    -- p7: Transferência / Outros / Finalizado
    (p7_id,  v_un_l2_030, v_usuario_id, v_usuario_id, v_usuario_id,
     'Outros',        'Transferência', 19000.00, 180.00, 170.00,
     'Finalizado',
     '2025-06-10', '2025-10-10', 'Ótica Clareza',
     8.0, 36, 105.56, 2200.00, 460.00,
     '2025-11-01', '2028-10-31', '2025-11-15',
     'Transferência finalizada com sucesso.', NOW()),

    -- p8: Cessão / Moda / Aprovado
    (p8_id,  v_un_l3_020, v_usuario_id, v_usuario_id, v_usuario_id,
     'Moda',          'Cessão',        38000.00, 77.00,  72.00,
     'Aprovado',
     '2025-12-01', '2026-04-01', 'Urban Style',
     11.0, 48, 493.51, 3800.00, 760.00,
     '2026-05-01', '2030-04-30', '2026-05-10',
     'Cessão de boutique de moda urbana.', NOW()),

    -- p9: Renovação / Alimentação / Aguardando análise financeira
    (p9_id,  v_un_l1_050, v_usuario_id, v_usuario_id, v_usuario_id,
     'Alimentação',   'Renovação',     11000.00, 77.00,  72.00,
     'Aguardando análise financeira',
     '2026-02-01', '2026-06-01', 'Café Brasil',
     8.5, 24, 142.86, 1400.00, 290.00,
     '2026-07-01', '2028-06-30', NULL,
     'Renovação de contrato de cafeteria.', NOW()),

    -- p10: Readequação / Serviços / Aguardando análise do comitê
    (p10_id, v_un_l2_050, v_usuario_id, v_usuario_id, v_usuario_id,
     'Serviços',      'Readequação',   22000.00, 260.00, 250.00,
     'Aguardando análise do comitê',
     '2026-01-20', '2026-05-20', 'Beleza Total',
     9.0, 48, 84.62, 3100.00, 620.00,
     '2026-06-01', '2030-05-31', NULL,
     'Readequação de salão de beleza.', NOW());

  -- ============================================================
  -- PropostaLojaAnterior — Transferência e Cessão
  -- ============================================================
  INSERT INTO "PropostaLojaAnterior" (
    id_proposta_pla, nome_fantasia_pla, segmento_pla, tipo_operacao_pla,
    cto_pla, abl_pla, amm_pla,
    divida_amm_pla, divida_negociada_pla, divida_condominio_pla, divida_fpp_pla,
    forma_pagamento_pla
  ) VALUES
    (p2_id, 'Antigo Restaurante Sol', 'Alimentação',  'Transferência',
     280000.00, 80.00,  12500.00, 37500.00, 30000.00,  8000.00, 1200.00, 'À vista'),
    (p3_id, 'ElectroShop',            'Eletrônicos',  'Cessão',
     450000.00, 280.00, 28000.00, 84000.00, 70000.00, 15000.00, 2500.00, 'Parcelado em 6x'),
    (p7_id, 'Ótica Visão',            'Outros',       'Transferência',
     130000.00, 170.00,  8500.00, 25500.00, 20000.00,  5000.00,  900.00, 'À vista'),
    (p8_id, 'Moda Clássica',          'Moda',         'Cessão',
     210000.00, 72.00,  15000.00, 45000.00, 38000.00,  9000.00, 1500.00, 'Parcelado em 4x');

  -- ============================================================
  -- PropostaNecessidadesTecnicas
  -- ============================================================
  INSERT INTO "PropostaNecessidadesTecnicas" (
    id_proposta_pnt,
    demanda_eletrica_kva_pnt, tensao_necessaria_pnt, circuitos_especiais_pnt, obs_eletrica_pnt,
    ponto_agua_pnt, quantidade_pontos_agua_pnt, ponto_esgoto_pnt, vazao_necessaria_lmin_pnt,
    caixa_gordura_pnt, obs_hidraulica_pnt,
    necessita_gas_pnt, tipo_gas_pnt, consumo_gas_m3h_pnt, obs_gas_pnt,
    necessita_exaustao_pnt, vazao_exaustao_m3h_pnt, necessita_make_up_ar_pnt, obs_ventilacao_pnt,
    area_minima_m2_pnt, area_maxima_m2_pnt, pe_direito_minimo_m_pnt,
    carga_piso_kgm2_pnt, necessita_mezanino_pnt, obs_estrutura_pnt,
    frente_minima_m_pnt, tipo_fachada_pnt, comunicacao_visual_led_pnt, obs_fachada_pnt,
    pontos_dados_pnt, necessita_fibra_pnt, obs_telecom_pnt,
    status_pnt, id_usuario_responsavel_pnt, criado_em_pnt, atualizado_em_pnt
  ) VALUES
    -- p1: Nova Locação / Moda
    (p1_id,
     30.00, '220V', FALSE, NULL,
     FALSE, NULL, FALSE, NULL, FALSE, NULL,
     FALSE, NULL, NULL, NULL,
     FALSE, NULL, FALSE, NULL,
     250.00, 320.00, 3.50, 500.00, FALSE, NULL,
     12.00, 'Fechada', TRUE, 'Painel LED de 6m.',
     8, FALSE, NULL,
     'Aprovado', v_usuario_id, NOW(), NOW()),

    -- p3: Cessão / Eletrônicos
    (p3_id,
     75.00, '380V', TRUE, 'Necessita circuito dedicado para servidores.',
     FALSE, NULL, FALSE, NULL, FALSE, NULL,
     FALSE, NULL, NULL, NULL,
     FALSE, NULL, TRUE, 'Renovação de ar para sala de exposição.',
     260.00, 320.00, 3.20, 600.00, FALSE, NULL,
     15.00, 'Aberta', TRUE, 'LED obrigatório por contrato.',
     20, TRUE, 'Fibra para demonstrações ao vivo.',
     'Aprovado', v_usuario_id, NOW(), NOW()),

    -- p5: Readequação / Esportes (cancelado — rascunho)
    (p5_id,
     45.00, '220V', FALSE, NULL,
     FALSE, NULL, FALSE, NULL, FALSE, NULL,
     FALSE, NULL, NULL, NULL,
     FALSE, NULL, FALSE, NULL,
     180.00, 250.00, 3.00, 700.00, FALSE, NULL,
     10.00, 'Fechada', FALSE, NULL,
     6, FALSE, NULL,
     'Rascunho', v_usuario_id, NOW(), NULL),

    -- p8: Cessão / Moda
    (p8_id,
     25.00, '220V', FALSE, NULL,
     FALSE, NULL, FALSE, NULL, FALSE, NULL,
     FALSE, NULL, NULL, NULL,
     FALSE, NULL, FALSE, NULL,
     60.00, 90.00, 3.00, 400.00, FALSE, NULL,
     6.00, 'Fechada', FALSE, NULL,
     4, FALSE, NULL,
     'Aprovado', v_usuario_id, NOW(), NOW()),

    -- p10: Readequação / Serviços (salão de beleza)
    (p10_id,
     50.00, '220V', FALSE, NULL,
     TRUE, 4, TRUE, 8.00, TRUE, 'Caixa de gordura existente a adaptar.',
     FALSE, NULL, NULL, NULL,
     TRUE, 1200.00, FALSE, 'Exaustão para cabines de procedimento.',
     220.00, 290.00, 2.80, 400.00, FALSE, NULL,
     14.00, 'Fechada', FALSE, 'Comunicação visual simples.',
     10, FALSE, NULL,
     'Em análise', v_usuario_id, NOW(), NOW());

  -- ============================================================
  -- PropostaCessaoDireitos — Cessão
  -- ============================================================
  INSERT INTO "PropostaCessaoDireitos" (
    id_proposta_pcd,
    res_sperata_proposta_pcd, referencia_mercado_por_m2_pcd,
    sinal_res_sperata_pcd, forma_pagamento_saldo_pcd, num_parcelas_pcd,
    status_res_sperata_pcd, observacoes_pcd
  ) VALUES
    (p3_id, 550000.00, 1896.55, 110000.00, 'Parcelado', 6,
     'Aprovado', 'Res sperata aprovada pelo comitê.'),
    (p8_id, 380000.00, 4935.06,  76000.00, 'À vista',   NULL,
     'Aprovado', NULL);

  -- ============================================================
  -- PropostaTaxaTransferencia — Transferência
  -- ============================================================
  INSERT INTO "PropostaTaxaTransferencia" (
    id_proposta_ptt,
    tt_contratual_ptt, tt_proposta_ptt, tt_proposta_num_amm_ptt,
    sinal_tt_ptt, forma_pagamento_tt_ptt,
    justificativa_tt_ptt, status_tt_ptt
  ) VALUES
    (p2_id, 37500.00, 30000.00, 2.40, 15000.00, 'Parcelado em 2x',
     'Desconto negociado pela dívida acumulada.', 'Aprovado'),
    (p7_id, 25500.00, 20000.00, 2.35, 10000.00, 'À vista',
     NULL, 'Finalizado');

  -- ============================================================
  -- PropostaParecerComite
  -- ============================================================
  INSERT INTO "PropostaParecerComite" (
    id_proposta_ppc,
    presidente_ppc,        presidente_data_ppc,
    diretoria_comp1_ppc,   diretoria_comp1_data_ppc,
    diretoria_comp2_ppc,   diretoria_comp2_data_ppc,
    superintendente_ppc,   superintendente_data_ppc,
    in_networking_ppc,     in_networking_data_ppc
  ) VALUES
    -- p2: Aguardando análise do comitê (parcialmente assinado)
    (p2_id,  FALSE, NULL,         TRUE, '2026-02-20', FALSE, NULL,        TRUE, '2026-02-18', FALSE, NULL),
    -- p3: Aprovado — todos assinaram
    (p3_id,  TRUE,  '2026-01-15', TRUE, '2026-01-10', TRUE,  '2026-01-12', TRUE, '2026-01-08', TRUE, '2026-01-14'),
    -- p7: Finalizado — maioria assinou
    (p7_id,  TRUE,  '2025-09-10', TRUE, '2025-09-05', TRUE,  '2025-09-07', TRUE, '2025-09-03', FALSE, NULL),
    -- p8: Aprovado — todos assinaram
    (p8_id,  TRUE,  '2026-02-25', TRUE, '2026-02-20', TRUE,  '2026-02-22', TRUE, '2026-02-18', TRUE, '2026-02-24'),
    -- p10: Aguardando análise do comitê (parcialmente assinado)
    (p10_id, FALSE, NULL,         FALSE, NULL,         FALSE, NULL,         TRUE, '2026-03-05', FALSE, NULL);

  -- ============================================================
  -- PropostaDocumento
  -- ============================================================
  INSERT INTO "PropostaDocumento" (
    id_pd, id_proposta_pd, id_usuario_pd,
    codigo_pd, nome_original_pd, tipo_pd, tamanho_pd, url_storage_pd, data_upload_pd
  ) VALUES
    (gen_random_uuid(), p1_id,  v_usuario_id, 'DOC-2026-0001', 'proposta_studio_veste_bem.pdf',   'PDF',  '1.2 MB', NULL, NOW()),
    (gen_random_uuid(), p1_id,  v_usuario_id, 'DOC-2026-0002', 'planta_baixa_l1_001.pdf',         'PDF',  '3.8 MB', NULL, NOW()),
    (gen_random_uuid(), p2_id,  v_usuario_id, 'DOC-2026-0003', 'contrato_transferencia_sabor.pdf', 'PDF',  '2.1 MB', NULL, NOW()),
    (gen_random_uuid(), p2_id,  v_usuario_id, 'DOC-2026-0004', 'laudo_tecnico_l1_015.docx',        'DOCX', '540 KB', NULL, NOW()),
    (gen_random_uuid(), p3_id,  v_usuario_id, 'DOC-2026-0005', 'proposta_techzone_store.pdf',      'PDF',  '2.7 MB', NULL, NOW()),
    (gen_random_uuid(), p3_id,  v_usuario_id, 'DOC-2026-0006', 'analise_financeira_techzone.xlsx',  'XLSX', '980 KB', NULL, NOW()),
    (gen_random_uuid(), p3_id,  v_usuario_id, 'DOC-2026-0007', 'foto_fachada_techzone.jpg',         'JPG',  '4.5 MB', NULL, NOW()),
    (gen_random_uuid(), p7_id,  v_usuario_id, 'DOC-2026-0008', 'contrato_otica_clareza.pdf',        'PDF',  '1.8 MB', NULL, NOW()),
    (gen_random_uuid(), p8_id,  v_usuario_id, 'DOC-2026-0009', 'proposta_urban_style.pdf',          'PDF',  '1.5 MB', NULL, NOW()),
    (gen_random_uuid(), p9_id,  v_usuario_id, 'DOC-2026-0010', 'proposta_cafe_brasil.pdf',          'PDF',  '900 KB', NULL, NOW());

  -- ============================================================
  -- PropostaHistorico — snapshots de p1, p2, p3, p7, p8
  -- ============================================================
  INSERT INTO "PropostaHistorico" (
    id_ph, id_proposta_ph, id_usuario_ph, editado_em_ph,
    codigo_unidade_ph, segmento_ph, tipo_operacao_ph,
    valor_proposto_ph, area_ph, abl_ph,
    status_ph, data_criacao_ph, data_vencimento_ph, nome_fantasia_ph,
    aluguel_percent_ph, prazo_locacao_meses_ph, aluguel_por_m2_ph,
    condominio_aprox_ph, fpp_aprox_ph,
    inicio_contrato_ph, fim_contrato_ph, data_inauguracao_ph,
    observacoes_ph, atualizado_em_snapshot_ph
  ) VALUES
    -- p1-a: valor inicial menor
    (ph1a_id, p1_id, v_usuario_id, NOW() - INTERVAL '10 days',
     'L1-001', 'Moda', 'Nova Locação',
     17000.00, 290.00, 270.00,
     'Aguardando análise financeira', '2026-01-10', '2026-04-10', 'Studio Veste Bem',
     7.5, 36, 58.62, 2100.00, 450.00,
     '2026-06-01', '2029-05-31', '2026-06-15',
     'Versão inicial com valor menor.', NOW() - INTERVAL '10 days'),

    -- p1-b: valor ajustado após negociação
    (ph1b_id, p1_id, v_usuario_id, NOW() - INTERVAL '5 days',
     'L1-001', 'Moda', 'Nova Locação',
     18000.00, 290.00, 270.00,
     'Aguardando análise financeira', '2026-01-10', '2026-04-10', 'Studio Veste Bem',
     8.0, 36, 62.07, 2100.00, 450.00,
     '2026-06-01', '2029-05-31', '2026-06-15',
     'Valor ajustado após negociação preliminar.', NOW() - INTERVAL '5 days'),

    -- p2-a: status antes de envio ao comitê
    (ph2a_id, p2_id, v_usuario_id, NOW() - INTERVAL '15 days',
     'L1-015', 'Alimentação', 'Transferência',
     30000.00, 85.00, 80.00,
     'Aguardando análise financeira', '2026-01-15', '2026-05-15', 'Sabor & Cia',
     8.5, 48, 352.94, 3200.00, 680.00,
     '2026-07-01', '2030-06-30', '2026-07-10',
     'Status inicial antes de envio ao comitê.', NOW() - INTERVAL '15 days'),

    -- p3-a: análise financeira
    (ph3a_id, p3_id, v_usuario_id, NOW() - INTERVAL '60 days',
     'L2-001', 'Eletrônicos', 'Cessão',
     50000.00, 290.00, 280.00,
     'Aguardando análise financeira', '2025-11-01', '2026-03-01', 'TechZone Store',
     10.0, 60, 172.41, 4800.00, 950.00,
     '2026-04-01', '2031-03-31', '2026-04-20',
     'Proposta recebida para análise.', NOW() - INTERVAL '60 days'),

    -- p3-b: enviada ao comitê com valor ajustado
    (ph3b_id, p3_id, v_usuario_id, NOW() - INTERVAL '30 days',
     'L2-001', 'Eletrônicos', 'Cessão',
     52000.00, 290.00, 280.00,
     'Aguardando análise do comitê', '2025-11-01', '2026-03-01', 'TechZone Store',
     10.0, 60, 179.31, 4800.00, 950.00,
     '2026-04-01', '2031-03-31', '2026-04-20',
     'Ajuste de valor após análise financeira.', NOW() - INTERVAL '30 days'),

    -- p3-c: aprovado pelo comitê
    (ph3c_id, p3_id, v_usuario_id, NOW() - INTERVAL '10 days',
     'L2-001', 'Eletrônicos', 'Cessão',
     55000.00, 290.00, 280.00,
     'Aprovado', '2025-11-01', '2026-03-01', 'TechZone Store',
     10.5, 60, 189.66, 4800.00, 950.00,
     '2026-04-01', '2031-03-31', '2026-04-20',
     'Proposta aprovada pelo comitê.', NOW() - INTERVAL '10 days'),

    -- p7-a: estado inicial durante análise financeira
    (ph7a_id, p7_id, v_usuario_id, NOW() - INTERVAL '120 days',
     'L2-030', 'Outros', 'Transferência',
     17500.00, 180.00, 170.00,
     'Aguardando análise financeira', '2025-06-10', '2025-10-10', 'Ótica Clareza',
     7.5, 36, 97.22, 2200.00, 460.00,
     '2025-11-01', '2028-10-31', '2025-11-15',
     'Versão inicial da proposta.', NOW() - INTERVAL '120 days'),

    -- p8-a: análise financeira
    (ph8a_id, p8_id, v_usuario_id, NOW() - INTERVAL '45 days',
     'L3-020', 'Moda', 'Cessão',
     35000.00, 77.00, 72.00,
     'Aguardando análise financeira', '2025-12-01', '2026-04-01', 'Urban Style',
     10.0, 48, 453.90, 3800.00, 760.00,
     '2026-05-01', '2030-04-30', '2026-05-10',
     'Proposta inicial submetida.', NOW() - INTERVAL '45 days'),

    -- p8-b: enviada ao comitê com valor revisado
    (ph8b_id, p8_id, v_usuario_id, NOW() - INTERVAL '20 days',
     'L3-020', 'Moda', 'Cessão',
     37000.00, 77.00, 72.00,
     'Aguardando análise do comitê', '2025-12-01', '2026-04-01', 'Urban Style',
     10.5, 48, 480.52, 3800.00, 760.00,
     '2026-05-01', '2030-04-30', '2026-05-10',
     'Valor revisado após análise financeira.', NOW() - INTERVAL '20 days');

  -- ============================================================
  -- PropostaLojaAnteriorHistorico
  -- ============================================================
  INSERT INTO "PropostaLojaAnteriorHistorico" (
    id_historico_plah,
    nome_fantasia_plah, segmento_plah, tipo_operacao_plah,
    cto_plah, abl_plah, amm_plah,
    divida_amm_plah, divida_negociada_plah, divida_condominio_plah, divida_fpp_plah,
    forma_pagamento_plah
  ) VALUES
    (ph3a_id, 'ElectroShop',  'Eletrônicos', 'Cessão',
     450000.00, 280.00, 26000.00, 78000.00, 68000.00, 14000.00, 2200.00, 'Parcelado em 6x'),
    (ph3b_id, 'ElectroShop',  'Eletrônicos', 'Cessão',
     450000.00, 280.00, 27000.00, 81000.00, 69000.00, 14500.00, 2300.00, 'Parcelado em 6x'),
    (ph3c_id, 'ElectroShop',  'Eletrônicos', 'Cessão',
     450000.00, 280.00, 28000.00, 84000.00, 70000.00, 15000.00, 2500.00, 'Parcelado em 6x'),
    (ph7a_id, 'Ótica Visão',  'Outros',      'Transferência',
     130000.00, 170.00, 7500.00,  22500.00, 18000.00,  4500.00,  800.00, 'À vista'),
    (ph8a_id, 'Moda Clássica','Moda',        'Cessão',
     200000.00, 72.00,  14000.00, 42000.00, 36000.00,  8500.00, 1400.00, 'Parcelado em 4x'),
    (ph8b_id, 'Moda Clássica','Moda',        'Cessão',
     210000.00, 72.00,  15000.00, 45000.00, 38000.00,  9000.00, 1500.00, 'Parcelado em 4x');

  -- ============================================================
  -- PropostaNecessidadesTecnicasHistorico
  -- ============================================================
  INSERT INTO "PropostaNecessidadesTecnicasHistorico" (
    id_historico_pnth,
    demanda_eletrica_kva_pnth, tensao_necessaria_pnth, circuitos_especiais_pnth, obs_eletrica_pnth,
    ponto_agua_pnth, quantidade_pontos_agua_pnth, ponto_esgoto_pnth, vazao_necessaria_lmin_pnth,
    caixa_gordura_pnth, obs_hidraulica_pnth,
    necessita_gas_pnth, tipo_gas_pnth, consumo_gas_m3h_pnth, obs_gas_pnth,
    necessita_exaustao_pnth, vazao_exaustao_m3h_pnth, necessita_make_up_ar_pnth, obs_ventilacao_pnth,
    area_minima_m2_pnth, area_maxima_m2_pnth, pe_direito_minimo_m_pnth,
    carga_piso_kgm2_pnth, necessita_mezanino_pnth, obs_estrutura_pnth,
    frente_minima_m_pnth, tipo_fachada_pnth, comunicacao_visual_led_pnth, obs_fachada_pnth,
    pontos_dados_pnth, necessita_fibra_pnth, obs_telecom_pnth,
    status_pnth, id_usuario_responsavel_pnth, criado_em_pnth, atualizado_em_pnth
  ) VALUES
    -- ph3b: TechZone — necessidades em análise
    (ph3b_id,
     70.00, '380V', TRUE, 'Circuito dedicado para servidores.',
     FALSE, NULL, FALSE, NULL, FALSE, NULL,
     FALSE, NULL, NULL, NULL,
     FALSE, NULL, TRUE, 'Renovação de ar para exposição.',
     260.00, 320.00, 3.20, 600.00, FALSE, NULL,
     15.00, 'Aberta', TRUE, 'LED obrigatório.',
     18, TRUE, 'Fibra para demos.',
     'Em análise', v_usuario_id, NOW() - INTERVAL '30 days', NULL),

    -- ph3c: TechZone — necessidades aprovadas
    (ph3c_id,
     75.00, '380V', TRUE, 'Necessita circuito dedicado para servidores.',
     FALSE, NULL, FALSE, NULL, FALSE, NULL,
     FALSE, NULL, NULL, NULL,
     FALSE, NULL, TRUE, 'Exige renovação de ar para sala de exposição.',
     260.00, 320.00, 3.20, 600.00, FALSE, NULL,
     15.00, 'Aberta', TRUE, 'LED obrigatório por contrato.',
     20, TRUE, 'Fibra para demonstrações ao vivo.',
     'Aprovado', v_usuario_id, NOW() - INTERVAL '10 days', NOW() - INTERVAL '10 days'),

    -- ph8a: Urban Style — rascunho inicial
    (ph8a_id,
     22.00, '220V', FALSE, NULL,
     FALSE, NULL, FALSE, NULL, FALSE, NULL,
     FALSE, NULL, NULL, NULL,
     FALSE, NULL, FALSE, NULL,
     60.00, 90.00, 3.00, 400.00, FALSE, NULL,
     6.00, 'Fechada', FALSE, NULL,
     4, FALSE, NULL,
     'Rascunho', v_usuario_id, NOW() - INTERVAL '45 days', NULL),

    -- ph8b: Urban Style — aprovado
    (ph8b_id,
     25.00, '220V', FALSE, NULL,
     FALSE, NULL, FALSE, NULL, FALSE, NULL,
     FALSE, NULL, NULL, NULL,
     FALSE, NULL, FALSE, NULL,
     60.00, 90.00, 3.00, 400.00, FALSE, NULL,
     6.00, 'Fechada', FALSE, NULL,
     4, FALSE, NULL,
     'Aprovado', v_usuario_id, NOW() - INTERVAL '20 days', NOW() - INTERVAL '20 days');

  -- ============================================================
  -- PropostaCessaoDireitosHistorico
  -- ============================================================
  INSERT INTO "PropostaCessaoDireitosHistorico" (
    id_historico_pcdh,
    res_sperata_proposta_pcdh, referencia_mercado_por_m2_pcdh,
    sinal_res_sperata_pcdh, forma_pagamento_saldo_pcdh, num_parcelas_pcdh,
    status_res_sperata_pcdh, observacoes_pcdh
  ) VALUES
    (ph3a_id, 500000.00, 1724.14, 100000.00, 'Parcelado', 6, 'Em análise', NULL),
    (ph3b_id, 520000.00, 1793.10, 104000.00, 'Parcelado', 6, 'Em análise', 'Revisão de valor pendente.'),
    (ph3c_id, 550000.00, 1896.55, 110000.00, 'Parcelado', 6, 'Aprovado',   'Res sperata aprovada pelo comitê.'),
    (ph8a_id, 350000.00, 4545.45,  70000.00, 'À vista',   NULL, 'Em análise', NULL),
    (ph8b_id, 380000.00, 4935.06,  76000.00, 'À vista',   NULL, 'Aprovado',   NULL);

  -- ============================================================
  -- PropostaTaxaTransferenciaHistorico
  -- ============================================================
  INSERT INTO "PropostaTaxaTransferenciaHistorico" (
    id_historico_ptth,
    tt_contratual_ptth, tt_proposta_ptth, tt_proposta_num_amm_ptth,
    sinal_tt_ptth, forma_pagamento_tt_ptth,
    justificativa_tt_ptth, status_tt_ptth
  ) VALUES
    (ph2a_id, 37500.00, 28000.00, 2.24, 14000.00, 'Parcelado em 2x',
     'Proposta inicial antes de aprovação.', 'Em análise'),
    (ph7a_id, 25500.00, 18000.00, 2.12,  9000.00, 'À vista',
     NULL, 'Em análise');

  -- ============================================================
  -- PropostaParecerComiteHistorico
  -- ============================================================
  INSERT INTO "PropostaParecerComiteHistorico" (
    id_historico_ppch,
    presidente_ppch,      presidente_data_ppch,
    diretoria_comp1_ppch, diretoria_comp1_data_ppch,
    diretoria_comp2_ppch, diretoria_comp2_data_ppch,
    superintendente_ppch, superintendente_data_ppch,
    in_networking_ppch,   in_networking_data_ppch
  ) VALUES
    -- ph3b: comitê em andamento
    (ph3b_id, FALSE, NULL,         TRUE, '2025-12-20', FALSE, NULL,         TRUE, '2025-12-18', FALSE, NULL),
    -- ph3c: comitê completo
    (ph3c_id, TRUE,  '2026-01-15', TRUE, '2026-01-10', TRUE,  '2026-01-12', TRUE, '2026-01-08', TRUE, '2026-01-14'),
    -- ph7a: nenhum membro tinha assinado ainda
    (ph7a_id, FALSE, NULL,         FALSE, NULL,         FALSE, NULL,         FALSE, NULL,         FALSE, NULL),
    -- ph8b: comitê em andamento
    (ph8b_id, FALSE, NULL,         TRUE,  '2026-02-10', FALSE, NULL,         TRUE,  '2026-02-08', FALSE, NULL);

END $$;
