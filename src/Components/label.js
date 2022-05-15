import React from 'react'
import Input from './input'
import Avatar from './avatar'

export default function Label(props) {
    return (
        <>
         <label htmlFor={props.for} className={props.className}>
            <Avatar src={props.src} width={props.width}  height={props.height} alt={props.alt} />&ensp;
            {props.title}
            <Input type={props.type} disbaled={props.disabled} value={props.value} class={props.class} name={props.name} />
         </label>   
        </>
    )
}
