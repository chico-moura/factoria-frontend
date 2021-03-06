import React from 'react'
import TablePage from 'modules/shared/table-page'
import apiUrl from 'services/build-url'
import { ModelFields } from 'enum'
import AdicionarProduto from 'modules/cadastros/components/produtos/AdicionarProduto'


const TABLE_HEADERS: (keyof typeof ModelFields)[] = [
    'id',
    'nome',
    'categoria',
    'preco_compra',
    'preco_venda'
]

export default function Produtos(){

    return <TablePage 
        title='Produtos'
        tableHeaders={TABLE_HEADERS}
        apiUrl={apiUrl().estoque.produtos.url}
        adicionarItemPopUp={AdicionarProduto}
    />
}