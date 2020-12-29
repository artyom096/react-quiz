import React from 'react'
import classes from './ActiveQuiz.module.css'
import AnswersList from './AnwersList/AnswersList'

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Questions}>
                <span>
                    <strong>{props.answerNumber}.</strong>&nbsp;
                {props.questions}
            </span>
                <small>
                    {props.answerNumber} из {props.answerLength}
            </small>
            </p>
            <AnswersList 
            answers={props.answers} 
            onAnswerClick={props.onAnswerClick}
            state={props.state}
            result={props.result}
            />
        </div>
    )
}

export default ActiveQuiz