import React from 'react'
import classes from './FinishedQuiz.module.css'
import Button from './../UI/Button'
import { Link } from 'react-router-dom'

const FinishedQuiz = props => {
    return(
        <div className={classes.FinishedQuiz}>
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.result[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.result[quizItem.id]]
                    ]

                    return (
                    <li key={index}>
                        <strong>{index + 1}</strong>.&nbsp;
                        {quizItem.questions}
                        <i className={cls.join(' ')} />
                    </li>
                    )
                })}
            </ul>

            <p>Правильно 4 из 12</p>

            <div>
                <Button type='primary' onClick={props.onRetry}>Повторить</Button>
                <Link to='/'>
                <Button type='success'>Перейти в список тестов</Button>
                </Link>
            </div>
        </div>
    )
}

export default FinishedQuiz