// ============================================================
// entities/responses.go — Tipos de resposta da API
// ============================================================
//
// Diferença entre entities/*.go (gerado) e responses.go (manual):
//
//  entities/*.go    — espelham EXATAMENTE as colunas do banco,
//                     gerados pelo codegen a partir das migrations.
//                     NÃO devem ser editados manualmente.
//
//  responses.go     — definem o que a API RETORNA ao cliente.
//                     Podem omitir campos sensíveis (ex: senha_hash_u),
//                     renomear campos para camelCase, adicionar campos
//                     calculados (ex: status em UnidadeResponse) ou
//                     aliases de compatibilidade (ex: unidade, tipo).
//
// UnidadeResponse: campos de Unidade + status calculado (Disponível/Ocupado)
// PropostaResponse: campos de Proposta + JOIN com Unidade e Usuário
//                   + aliases 'unidade' e 'tipo' para o frontend legado
// ============================================================
// responses.go — Tipos de resposta da API (derivados das entidades do banco).
// Estes tipos NÃO são gerados pelo codegen — são criados manualmente
// para expor apenas os campos necessários em cada endpoint.
package entities

// UnidadeResponse é a representação de Unidade retornada pela API.
type UnidadeResponse struct {
	ID       string  `json:"id"`
	Codigo   string  `json:"codigo"`
	Piso     string  `json:"piso"`
	Corredor string  `json:"corredor"`
	Area     float64 `json:"area"`
	Status   string  `json:"status"`
	CriadoEm string `json:"criadoEm"`
}

// PropostaResponse é a representação de Proposta retornada pela API.
type PropostaResponse struct {
	ID            string   `json:"id"`
	IDUnidade     string   `json:"idUnidade"`
	CodigoUnidade string   `json:"codigoUnidade"`
	Unidade       string   `json:"unidade"`       // alias de CodigoUnidade
	Piso          string   `json:"piso"`
	Corredor      string   `json:"corredor"`
	Segmento      string   `json:"segmento"`
	TipoOperacao  string   `json:"tipoOperacao"`
	Tipo          string   `json:"tipo"`          // alias de TipoOperacao
	ValorProposto float64  `json:"valorProposto"`
	Area          float64  `json:"area"`
	Status        string   `json:"status"`
	Responsavel   string   `json:"responsavel"`
	NomeFantasia  string   `json:"nomeFantasia"`
	DataCriacao   string   `json:"dataCriacao"`
	AtualizadoEm  string   `json:"atualizadoEm"`
	DataVencimento *string `json:"dataVencimento"`
	FimContrato   *string  `json:"fimContrato"`
}
