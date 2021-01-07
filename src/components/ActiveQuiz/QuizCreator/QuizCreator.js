import React from 'react'
import { Component } from 'react/cjs/react.development';
import classes from './QuizCreator.module.css'
import Button from './../UI/Button'
import {createControl} from './../../../form/formFramework'
import Input from './../UI/Input/Input'

function createOptionControl(number) {
    return createControl({
        label: `Вариант ${number}`,
        errorMessage: 'Значение не может быть пустым',
        id: number
    }, { required: true })
}

function createFormControls() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMessage: 'Вопрос не может быть пустым',
        }, { required: true }),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4),
    }
}

class QuizCreator extends Component {

    state = {
        quiz: [],
        formControls: createFormControls()
    }

    onSubmitHandler = event => {
        event.preventDefault()
    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    changeHandler = (value, controlName) => {
        return 
    }

    renderControls = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]

            return (
                <>
                <Input
                    label={control.label}
                    valid={control.valid}
                    value={control.value}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    onChange={event => this.changeHandler(event.target.value, controlName)}
                />
                {index == 0 ? <hr /> : null}
                </>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div >
                    <h1>Создание теста</h1>
                    <form onSubmit={this.onSubmitHandler}>

                        {this.renderControls()}

                        <select></select>

                        <Button
                            onClick={this.addQuestionHandler}
                            type='primary'
                        >
                            Добавить вопрос
                    </Button>
                        <Button
                            onClick={this.createQuizHandler}
                            type='success'
                        >
                            Создать тест
                    </Button>

                    </form>
                </div>
            </div>
        )
    }
}

export default QuizCreator