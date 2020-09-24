import React from 'react'
import '../styles/NavButton.css'
import DropDown from './DropDown'


interface NavDropButtonProps {
    text: string,
    children: any
}


export default function NavDropButton(props: NavDropButtonProps){
    return(
        <div className='nav-button'>
            {props.text}
            <DropDown>
                {props.children}
            </DropDown>
        </div>
    )
}