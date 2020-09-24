import React, { ReactNode } from 'react'
import '../styles/Table.css'
import { ModelFields } from 'enum'


interface TableProps {
    data: any[],
    headers: (keyof typeof ModelFields)[],
}

export default function Table(props: TableProps) {
    const headerRow = () => tableRow(mapHeaders(), 'header')
    const tableBody = () => makeBody()

    const tableRow = (content: ReactNode[], key: string) => 
        <tr key={key}>{content}</tr>

    const mapHeaders = () => 
        props.headers.map((header) => 
            <th key={header}>
                {ModelFields[header]}
            </th>
        )
    
    const makeBody = () => {
        let count = 0
        return props.data.map(item => {
            let key = 'datarow-' + count.toString()
            count ++
            return tableRow(mapAttributes(item), key)
        })
    }

    
    const mapAttributes = (item: any) => 
        props.headers.map(attr => 
            <td key={attr}>{item[attr]}</td>
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
