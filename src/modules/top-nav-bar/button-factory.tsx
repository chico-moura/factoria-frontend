import React from 'react'
import {Link} from 'react-router-dom';


export default function button(text: string, alignRight = false) {
    const className = setClassName(alignRight);
    const key = join(text);

    const link = (to?: string) => {
        if (to === undefined){
            to = join(text)
        }
        return (
            <Link to={to} className={className} key={key}>
                {text}
            </Link>
        )
    };
    const withChild = (content: JSX.Element[], order: string) => {
        return (
        <div className={className} key={key}>
            {text}
            <div className={order} key={key}>
                {content}
            </div>
        </div>
        )
    };
    const childFactory = (order: string) => (content: JSX.Element[]) => withChild(content, order);
    const withFirstChild = childFactory('first child shadow');
    const withSecondChild = childFactory('second child shadow');

    return {
        link, 
        withFirstChild, 
        withSecondChild,
    }
};

const setClassName = (alignRight: boolean) => {
    let className: string;
    if (alignRight){
        className = 'button float-right'
    } else {
        className = 'button'
    };
    return className;
};

const join = (string: string) => string.split(' ').join('');
