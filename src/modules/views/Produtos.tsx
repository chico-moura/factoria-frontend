import React, {useState, useEffect} from 'react'
import TablePage from 'modules/table-page'
import apiUrl from 'services/build-url'
import fetchData from 'services/fetch-data'
import { Produto } from 'types'

const TABLE_HEADERS: (keyof Produto)[] = [
    'id',
    'nome',
    'categoria',
    'preco_compra',
    'preco_venda',
]


const url = apiUrl().estoque.produtos.url

export default function Produtos(){
    const [produtos, setProdutos] = useState<Produto[]>([])

    let setState = async () => {
        await fetchData(url).then(data => setProdutos(data))
    }

    useEffect(() => {setState()}, [])

    return <TablePage 
        title='Produtos'
        buttonRow={[]}
        tableData={produtos}
        tableHeaders={TABLE_HEADERS}

    />


}