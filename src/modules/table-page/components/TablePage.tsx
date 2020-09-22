import React, {useState, useEffect} from 'react'
import fetchData from 'services/fetch-data'
import '../styles/TablePage.css'
import Table from './Table'
import { ModelFields } from 'enum'


interface TablePageProps {
    title: string,
    buttonRow: [],
    tableHeaders: (keyof typeof ModelFields)[],
    apiUrl: string
}

export default function TablePage(props: TablePageProps){
    const [items, setItems] = useState<any[]>([])

    let setState = async () => {
        await fetchData(props.apiUrl).then(data => setItems(data))
    }

    useEffect(() => {setState()}, [])

    return(
        <div className='table-page'>
            <h1>{props.title}</h1>
            <hr/>{props.buttonRow}<hr/>
            <Table 
                headers={props.tableHeaders}
                data={items}
            />
        </div>
    )
}