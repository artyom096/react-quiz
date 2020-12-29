
import React from 'react'
import classes from './Input.module.css'

const Input = props => {

    function isInvalid({valid, touched, shouldValidate}){
        return !valid && shouldValidate && touched
    }

    const cls = [classes.Input]
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`

    if(isInvalid(props)){
        cls.push(classes.invalid)
    }

    return(
        <div className={cls.join(' ')}>
            <label htmlFor={props.label}>{props.label}</label>
            <input 
            id={htmlFor}
            type={inputType} 
            value={props.value}
            onChange={props.onChange}
            />
            {isInvalid(props) ?
            <span>{props.errorMessage || 'Введите корректное значение'}</span>
            : null
        }
            
        </div>
    )
}

export default Input