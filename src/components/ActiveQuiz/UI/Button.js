import React from 'react'
import classes from './../UI/Button.module.css'

const Button = props => {
    const cls = [
        classes.Button,
        classes[props.type]
    ]

    return (
        <button
        disabled={props.disabled}
        className={cls.join(' ')}
        onClick={props.onClick}
        >

            {props.children}

        </button>
    )
}

export default Button