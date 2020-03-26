import React from 'react'

export default function Input(props) {
    return (
        <>
         <input type={props.type} disabled={props.disabled} value={props.value} disabled name={props.name} className={props.class} />   
        </>
    )
}
