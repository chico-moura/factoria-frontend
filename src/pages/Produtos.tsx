import React, {useState, useEffect} from 'react'
import TablePage from '../modules/table-page'
import apiUrl from '../services/build-url'
import fetchData from '../services/fetch-data'
import {Produto} from '../types'

const url = apiUrl().estoque.produtos.url


export default function Produtos(){
    const [produtos, setProdutos] = useState()
/* 
    useEffect = (() => {
        
    }, []) */
    return <TablePage 
        header='Produtos'
        buttonRow={[]}
        tableContent={[]}
    />


}