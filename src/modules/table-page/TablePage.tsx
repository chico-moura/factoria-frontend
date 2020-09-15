import React from 'react'
import './TablePage.css'
import Table from './Table'
import { Produto } from '../../types'


interface TablePageProps {
    header: string,
    buttonRow: [],
    tableContent: Produto[],

}

export default function TablePage(props: TablePageProps){

    return(
        <div className='table-page'>
            <h1>{props.header}</h1>
            <hr/>
            {props.buttonRow}
            <hr/>
            {Table(props.tableContent)}
        </div>
    )
}