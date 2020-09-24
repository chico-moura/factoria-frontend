import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/NavButton.css'


interface NavLinkButtonProps {
    text: string,
    to: string,
}


export default function NavLinkButton(props: NavLinkButtonProps){
    return (
        <Link to={props.to} className='nav-button'>
            {props.text}
        </Link>
    )
}