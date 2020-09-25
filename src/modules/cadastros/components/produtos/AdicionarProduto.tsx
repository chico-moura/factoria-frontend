import React from 'react'
import AdicionarItemPopUp from 'modules/shared/adicionar-item-popup'

export interface AdicionarProdutoProps {
    hide(): void 
}

export default function AdicionarProduto(hide: () => void){
    return (
        <AdicionarItemPopUp title='Adicionar produto' hide={hide}>
            <div className='columns-container'>
                <div className='column'>
                    <label htmlFor='nome'>
                        Nome
                        <input type='text' id='nome' name='nome'/>
                    </label>
                    <label htmlFor='categoria'>
                        Categoria
                        <input type='text' id='categoria' name='categoria'/>
                    </label>
                    <label htmlFor='unidade-medida'>
                        Unidade de medida
                        <input type='text' name='unidade-medida' id='unidade-medida'/>
                    </label>
                    <label htmlFor='preco-compra'>
                        Preço de compra
                        <input type='text' id='preco-compra' name='preco-compra'/>
                    </label>
                </div>
                <div className='column'>
                    <label htmlFor='preco-venda'>
                        Preço de venda
                        <input type='text' id='preco-venda' name='preco-venda'/>
                    </label>
                    <label htmlFor='ean-gtin'>
                        EAN-GTIN
                        <input type='text' id='ean-gtin' name='ean-gtin'/>
                    </label>
                    <label htmlFor='ncm'>
                        NCM
                        <input type='text' id='ncm' name='ncm'/>
                    </label>
                    <div className='radius-container'>
                        <label htmlFor='produzido'>
                            <input type='checkbox' id='produzido' name='produzido'/>
                            Produzido
                        </label>
                    </div>
                </div>
            </div>    
            <div className='obs-container'>
                <label htmlFor='observacoes'>
                    Observações
                    <input type='text' id='observacoes' name='observacoes'/>
                </label>
            </div>
        </AdicionarItemPopUp>
    )
}