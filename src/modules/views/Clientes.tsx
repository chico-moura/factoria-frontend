import React from 'react'
import TablePage from 'modules/table-page'
import apiUrl from 'services/build-url'
import { ModelFields } from 'enum'


const TABLE_HEADERS: (keyof typeof ModelFields)[] = [
    'id',
    'nome',
    'cpf_cnpj',
    'cidade',
    'telefone',
    'email',
]

export default function Clientes(){

    return <TablePage 
        title='Clientes'
        buttonRow={[]}
        tableHeaders={TABLE_HEADERS}
        apiUrl={apiUrl().estoque.contatos.url}
    />
}