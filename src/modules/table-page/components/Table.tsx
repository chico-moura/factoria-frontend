import React, { ReactNode } from 'react'
import '../styles/Table.css'
import { Produto } from 'types'


interface TableProps {
    data: any[],
    headers: (keyof Produto)[],
}


export default function Table(props: TableProps) {
    const headerRow = () => tableRow(mapHeaders())
    const tableBody = () => mapItems()

    const tableRow = (content: ReactNode[]) => 
        <tr>{content}</tr>

    const mapHeaders = () => 
        props.headers.map((header: string) => 
            <th key={header}>
                {header}
            </th>
        )
    
    const mapItems = () => 
        props.data.map(item => 
            tableRow(mapAttributes(item))
        )
    
    const mapAttributes = (item: any) => 
        props.headers.map(attr => 
            <td>{item[attr]}</td>
        )

    return (
        <table>
            {headerRow()}
            {tableBody()}
        </table>
    )
}
