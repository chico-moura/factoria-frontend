import React from 'react'
import './Table.css'
import { Product } from '../../types'


export default function Table(props: Product[]) {
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
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
