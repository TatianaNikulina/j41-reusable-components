import React from 'react'

export const Button = (props) => {

    const clickHandle = (e) => {
        e.preventDefault()
        props.clickButton(e.target.id)
    }

    return (
        <button
            id={props.id}
            className={props.className}
            type={props.type}
            onClick={clickHandle}
        >{props.title}</button>
    )

}