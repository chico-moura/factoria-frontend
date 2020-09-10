import React from 'react'
import TablePage from '../modules/table-page'
import mockProduct from '../modules/table-page/mock-api-fetch'

const mock = mockProduct().array(10)

export default function Produtos(){
    return <TablePage 
                header='Produtos' 
                buttonRow={[]}
                tableContent={mock}
            />
}