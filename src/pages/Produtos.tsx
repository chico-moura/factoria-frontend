import React from 'react'
/* import TablePage from '../modules/table-page'
import mockProduct from '../modules/table-page/mock-api-fetch' */
import apiUrl from '../services/build-url'
import fetchData from '../services/fetch-data'

const url = apiUrl().estoque.produtos.url
const data = fetchData(url)

export default function Produtos(){
    console.log(data)
    return <div></div>
}