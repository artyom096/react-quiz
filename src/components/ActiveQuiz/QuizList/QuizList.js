import React from 'react'
import { NavLink } from 'react-router-dom';
import { Component } from 'react/cjs/react.development';
import classes from './QuizList.module.css'

class QuizList extends Component {

    renderQuizes = () => {
        return [1, 2, 3].map((link, index) => {
            return (<li key={index}>
                <NavLink to={'/quiz/' + link} >Тест {link}</NavLink >
            </li>
            )
        })
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div>
                <h1>
                    Список тестов
                </h1>
                <ul>
                    {this.renderQuizes()}
                </ul>
                
                </div>
            </div>
        )
    }
}

export default QuizList