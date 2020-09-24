import React from 'react'
import '../styles/Button.css'

interface AdicionarProps{
    text: string,
    color: 'red'|'green',
    activate(): void,
}


export default function Button(props: AdicionarProps) {
    const setClassName = () => 'button ' + props.color
    
    return (
        <button className={setClassName()} onClick={props.activate}>
            {props.text}
        </button>
    )
}

