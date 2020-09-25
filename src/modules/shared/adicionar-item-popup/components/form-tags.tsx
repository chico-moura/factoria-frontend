import React from 'react'
import '../styles/AdicionarItemPopUp.css'


interface MetaInputProps {
    text: string,
    id: string,
    type: string,
    className?: string,
}


function Input(props: MetaInputProps) {
    let textBefore, textAfter

    props.type==='checkbox' ? textAfter=props.text : textBefore=props.text

    return (
        <label htmlFor={props.id}>
            {textBefore}
            <input type={props.type} id={props.id} name={props.id}/>
            {textAfter}
        </label>
    )
}


interface InputProps {
    children: string,
    id: string,
}

export function TextInput(props: InputProps) {
    return (
        <Input 
            type='text' 
            text={props.children} 
            id={props.id}
        />
    )
}

export function ObsInput(props: InputProps) {
    return (
        <Input 
            type='text' 
            className='big-text' 
            text={props.children} 
            id={props.id}
        />
    )
}

export function CheckboxInput(props: InputProps) {
    return (
        <Input 
            type='checkbox' 
            text={props.children} 
            id={props.id}
        />
    )
}

interface SimpleProps {
    children: JSX.Element|JSX.Element[],
    className: string,
}

function SimpleDiv(props: SimpleProps) {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

interface ChildrenOnlyProps {
    children: JSX.Element|JSX.Element[],
}

export function ColumnContainer(props: ChildrenOnlyProps) {
    return (
        <SimpleDiv className='columns-container'>{props.children}</SimpleDiv>
    )
}

export function Column(props: ChildrenOnlyProps) {
    return (
        <SimpleDiv className='column'>{props.children}</SimpleDiv>
    )
}

export function CheckboxContainer(props: ChildrenOnlyProps) {
    return (
        <SimpleDiv className='checkbox-container'>{props.children}</SimpleDiv>
    )
}

export function ObsContainer(props: ChildrenOnlyProps) {
    return (
        <SimpleDiv className='obs-container'>{props.children}</SimpleDiv>
    )
}