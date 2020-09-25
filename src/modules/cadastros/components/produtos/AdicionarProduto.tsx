import React from 'react'
import AdicionarItemPopUp from 'modules/shared/adicionar-item-popup'
import { 
    TextInput, 
    ObsInput, 
    CheckboxInput,
    ColumnContainer, 
    Column, 
    CheckboxContainer,
    ObsContainer,
} from 'modules/shared/adicionar-item-popup/components/form-tags'

export interface AdicionarProdutoProps {
    hide(): void 
}

export default function AdicionarProduto(hide: () => void){
    return (
        <AdicionarItemPopUp title='Adicionar produto' hide={hide}>
            <ColumnContainer>
                <Column>
                    <TextInput id='nome'>Nome</TextInput>
                    <TextInput id='categoria'>Categoria</TextInput>
                    <TextInput id='unidade-medida'>Unidade de medida</TextInput>
                    <TextInput id='preco-compra'>Preço de compra</TextInput>
                </Column>
                <Column>
                    <TextInput id='preco-venda'>Preço de venda</TextInput>
                    <TextInput id='ean-gtin'>EAN-GTIN</TextInput>
                    <TextInput id='ncm'>NCM</TextInput>
                    <CheckboxContainer>
                        <CheckboxInput id='produzido'>Produzido</CheckboxInput>
                    </CheckboxContainer>
                </Column>
            </ColumnContainer>  
            <ObsContainer>
                <ObsInput id='obs'>
                    Observações
                </ObsInput>
            </ObsContainer>
        </AdicionarItemPopUp>
    )
}