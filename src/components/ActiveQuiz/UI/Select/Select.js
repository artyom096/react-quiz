import React from 'react'
import classes from './../Select/Select.module.css'

const Select = props => {

    const htmlFor = `${props.label}-${Math.random()}`

    return (
        <div className={classes.Select}>
            <label htmlFor={htmlFor}></label>
            <select
            label={props.label}
            value={props.value}
            onChange={props.onChange}
            id={props.id}
            >
                {props.options.map((option, index) => {
                    return (
                        <option 
                        value={option.value}
                        key={index}
                        >
                            {option.text}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select