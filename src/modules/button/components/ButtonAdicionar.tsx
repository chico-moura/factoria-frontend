import React from 'react'
import '../styles/Button.css'

interface AdicionarProps{
    activate(): void
}


export default function ButtonAdicionar(props: AdicionarProps) {
    return (
        <button className='button adicionar' onClick={props.activate}>
            ADICIONAR
        </button>
    )
}

