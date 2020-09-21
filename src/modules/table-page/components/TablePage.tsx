import React from 'react'
import '../styles/TablePage.css'
import Table from './Table'
import { Produto } from 'types'


interface TablePageProps {
    title: string,
    buttonRow: [],
    tableData: Produto[],
    tableHeaders: (keyof Produto)[]
}

export default function TablePage(props: TablePageProps){
    return(
        <div className='table-page'>
            <h1>{props.title}</h1>
            <hr/>{props.buttonRow}<hr/>
            <Table 
                headers={props.tableHeaders}
                data={props.tableData}
            />
        </div>
    )
}