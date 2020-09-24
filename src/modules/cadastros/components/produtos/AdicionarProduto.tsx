import React from 'react'
import 'modules/shared/AdicionarPopUp.css'


export interface AdicionarProdutoProps {
    hide(): void   
}

export default function AdicionarProduto(hide: () => void){
    return (
        <div className='form-container' >
            <div className='header'>
                <h1>Adicionar produto</h1>
                <div className='close' onClick={hide}>X</div>
            </div>
            <form action=''>
                <label htmlFor='nome'>Nome</label>
                <input type='text' id='nome' name='nome'/><br/>
                <label htmlFor='categoria'>Categoria</label>
                <input type='text' id='categoria' name='categoria'/><br/>
                <label htmlFor='unidade-medida'>Unidade de medida</label>
                <input type='text' name='unidade-medida' id='unidade-medida'/><br/>
                <label htmlFor='preco-compra'>Preço de compra</label>
                <input type='text' id='preco-compra' name='preco-compra'/><br/>
                <label htmlFor='preco-venda'>Preço de venda</label>
                <input type='text' id='preco-venda' name='preco-venda'/><br/>
                <label htmlFor='ean-gtin'>EAN-GTIN</label>
                <input type='text' id='ean-gtin' name='ean-gtin'/><br/>
                <label htmlFor='ncm'>NCM</label>
                <input type='text' id='ncm' name='ncm'/><br/>
                <label htmlFor='produzido'>Produzido</label>
                <input type='checkbox' id='produzido' name='produzido'/><br/>
                <label htmlFor='observacoes'>Observações</label>
                <input type='text' id='observacoes' name='observacoes'/><br/>
            </form>
        </div>
    )
}