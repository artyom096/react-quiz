import React from 'react'
import { Component } from 'react/cjs/react.development';
import Button from '../UI/Button';
import Input from '../UI/Input/Input';
import classes from './Auth.module.css'
import is from 'is_js'

class Auth extends Component {

    state = {
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }

            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                }
            }
        }
    }

    submitHandler = event => {
        event.preventDefault()
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    validateControl(value, validation){

        if(!validation){
            return true
        }

        let isValid = true

        if(validation.required){
            isValid = value.trim() !== '' && isValid
        }

        if(validation.minLength){
            isValid = value.length >= validation.minLength && isValid
        }

        if(validation.email){
            isValid = is.email(value) && isValid
        }

        return isValid
    }


    onChangeHandler = (event, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        this.setState({
            formControls
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    label={control.label}
                    type={control.type}
                    value={control.value}
                    key={index}
                    valid={control.valid}
                    errorMessage={control.errorMessage}
                    touched={control.touched}
                    shouldValidate={!!control.validation}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )

        })
    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form className={classes.AuthForm} onSubmit={this.submitHandler}>
                        {this.renderInputs()}

                        <Button type='success'>Войти</Button>
                        <Button type='primary'>Зарегистрироваться</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth