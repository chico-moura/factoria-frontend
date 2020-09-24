import React, { ReactNode } from 'react'
import '../styles/Table.css'
import { ModelFields } from 'enum'


interface TableProps {
    data: any[],
    headers: (keyof typeof ModelFields)[],
}

export default function Table(props: TableProps) {
    const headerRow = () => tableRow(mapHeaders())
    const tableBody = () => mapItems()

    const tableRow = (content: ReactNode[]) => 
        <tr>{content}</tr>

    const mapHeaders = () => 
        props.headers.map((header) => 
            <th key={header}>
                {ModelFields[header]}
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
            <tbody>
                {headerRow()}
                {tableBody()}
            </tbody>
        </table>
    )
}
