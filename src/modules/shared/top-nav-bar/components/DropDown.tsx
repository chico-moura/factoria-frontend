import React from 'react'
import '../styles/DropDown.css'


interface DropDownProps {
    children: JSX.Element,
}


export default function DropDown(props: DropDownProps){
    return(
        <div className='drop-down'>
            {props.children}
        </div>
    )
}