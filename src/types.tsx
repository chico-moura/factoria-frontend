export type Produto = {
    id: number,
    nome: string,
    categoria: string,
    unidade_medida: string,
    preco_compra: number,
    preco_venda: number,
    ean_gtin: string,
    ncm: string,
    produzido: boolean,
    observacoes: string,
}

export type Contato = {
    id: number,
    nome: string,
    nome_fantasia: string,
    cpf_cnpj: string,
    indicador_ie: string,
    ie: string,
    nome_do_responsavel: string,
    telefone: string,
    email: string,
    cep: string,
    endereco: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
    pais: string,
    cliente: boolean,
    fornecedor: boolean,
    transportador: boolean,
}