import React, {useState, useEffect} from 'react'
import fetchData from 'services/fetch-data'
import '../styles/TablePage.css'
import Table from './Table'
import { ModelFields } from 'enum'
import ButtonAdicionar from 'modules/button/components/ButtonAdicionar'
import ButtonRemover from 'modules/button/components/ButtonRemover'
import AdicionarProdutoForm from './Adicionar'


interface TablePageProps {
    title: string,
    tableHeaders: (keyof typeof ModelFields)[],
    apiUrl: string

}

export default function TablePage(props: TablePageProps){
    const [items, setItems] = useState<any[]>([])
    const [adicionarVisible, setAdicionarVisible] = useState(false)

    const fetchItems = async () => {
        await fetchData(props.apiUrl).then(data => setItems(data))
    }
    useEffect(() => {fetchItems()}, [])

    const toggleAdicionar = () => {
        const toggle = (bool: boolean) => setAdicionarVisible(bool)
        return {
            show(){toggle(true)},
            hide(){toggle(false)},
        }
    }

    const adicionarPopUp = () => {
        if (adicionarVisible){
            return <AdicionarProdutoForm hide={toggleAdicionar().hide}/>
        }
    }

    return(
        <div className='table-page'>
            <h1>{props.title}</h1>
            <ButtonAdicionar activate={toggleAdicionar().show}/>
            {adicionarPopUp()}
            <ButtonRemover/>
            <hr/>
            <Table 
                headers={props.tableHeaders}
                data={items}
            />
        </div>
    )
}