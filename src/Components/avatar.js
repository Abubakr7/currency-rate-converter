import React from 'react'


export default function Avatar(props) {
    return (
        <>
          <img src={props.src} alt={props.alt} width={props.width} height={props.height} />  
        </>
    )
}
