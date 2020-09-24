import React, {useState, useEffect} from 'react'
import fetchData from 'services/fetch-data'
import '../styles/TablePage.css'
import Table from './Table'
import { ModelFields } from 'enum'
import Button from 'modules/shared/button/components/Button'
import AdicionarProdutoForm from '../../../cadastros/components/produtos/AdicionarProduto'


interface TablePageProps {
    title: string,
    tableHeaders: (keyof typeof ModelFields)[],
    apiUrl: string

}

export default function TablePage(props: TablePageProps){
    const [items, setItems] = useState<any[]>([])
    const [adicionarVisible, setAdicionarVisible] = useState(false)


    useEffect(() => {
        const fetchItems = async () => {
            await fetchData(props.apiUrl).then(data => setItems(data))
        }
        fetchItems()
    }, [props.apiUrl])



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
            <Button text='ADICIONAR' color='green' activate={toggleAdicionar().show}/>
            {adicionarPopUp()}
            <Button text='REMOVER' color='red' activate={() => null}/>
            <hr/>
            <Table 
                headers={props.tableHeaders}
                data={items}
            />
        </div>
    )
}