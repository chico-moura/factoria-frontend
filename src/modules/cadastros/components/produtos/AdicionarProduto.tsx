import React from 'react'
import 'modules/shared/styles/AdicionarPopUp.css'
import Button from 'modules/shared/button'

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
            <form action='POST'>
                <div className='center'>
                    <div className='column'>
                        <label htmlFor='nome'>Nome</label>
                        <input type='text' id='nome' name='nome'/><br/>
                        <label htmlFor='categoria'>Categoria</label>
                        <input type='text' id='categoria' name='categoria'/><br/>
                        <label htmlFor='unidade-medida'>Unidade de medida</label>
                        <input type='text' name='unidade-medida' id='unidade-medida'/><br/>
                        <label htmlFor='preco-compra'>Preço de compra</label>
                        <input type='text' id='preco-compra' name='preco-compra'/><br/>
                    </div>
                    <div className='column'>
                        <label htmlFor='preco-venda'>Preço de venda</label>
                        <input type='text' id='preco-venda' name='preco-venda'/><br/>
                        <label htmlFor='ean-gtin'>EAN-GTIN</label>
                        <input type='text' id='ean-gtin' name='ean-gtin'/><br/>
                        <label htmlFor='ncm'>NCM</label>
                        <input type='text' id='ncm' name='ncm'/><br/>
                        <div className='radius'>
                            <input type='checkbox' id='produzido' name='produzido'/><br/>
                            <label htmlFor='produzido'>Produzido</label>
                        </div>
                    </div>
                </div>    
                <div className='obs'>
                    <label htmlFor='observacoes'>Observações</label>
                    <input type='text' id='observacoes' name='observacoes'/><br/>
                </div>
                <div className='button-container'>
                    <Button text='DESCARTAR' color='red' activate={hide}/>
                    <Button text='ADICIONAR' color='green' activate={()=>null}/>
                </div>
            </form>
        </div>
    )
}