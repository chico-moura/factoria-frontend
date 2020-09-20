import React from 'react'
import '../../styles/Table.css'
import { Produto } from 'types'


export default function Table(props: Produto[]) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                </tr>
                {props.map(item =>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.preco_compra}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
