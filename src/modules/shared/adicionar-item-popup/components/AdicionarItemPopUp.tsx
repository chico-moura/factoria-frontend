import React from 'react'
import '../styles/AdicionarItemPopUp.css'
import Button from 'modules/shared/button'

export interface AdicionarItemPopUpProps {
    title: string,
    hide(): void, 
    children: JSX.Element[],
}

export default function AdicionarProduto(props: AdicionarItemPopUpProps){
    return (
        <div className='form-container' >
            <div className='header'>
    <h1>{props.title}</h1>
                <div className='close' onClick={props.hide}>x</div>
            </div>
            <form action='POST'>
                {props.children}
                <div className='button-container'>
                    <Button text='DESCARTAR' color='red' activate={props.hide}/>
                    <Button text='ADICIONAR' color='green' activate={()=>null}/>
                </div>
            </form>
        </div>
    )
}