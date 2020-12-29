import React, {Component} from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.module.css'
import FinishedQuiz from './../../components/ActiveQuiz/FinishedQuiz/FinishedQuiz'

class Quiz extends Component{

    state = {
        isFinished: false,
        result: {},
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                questions: 'Какого цвета небо?',
                rightAnswerId: 2,
                answers: [
                    {text: 'Зелёное', id: 1},
                    {text: 'Голубое', id: 2},
                    {text: 'Красное', id: 3},
                    {text: 'Жёлтое', id: 4},
                ],
            },
            {
                id: 2,
                questions: 'Год основания Санкт-Петербурга',
                rightAnswerId: 3,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1705', id: 2},
                    {text: '1703', id: 3},
                    {text: '1710', id: 4},
                ],
            }
        ]
    }

    isQuesionFinished(){
        return this.state.activeQuestion + 1 == this.state.quiz.length
    }

    onAnswerClick = answerId => {
        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key] === 'success'){
                return
            }
        }

        const result = this.state.result
        const question = this.state.quiz[this.state.activeQuestion]

        if(answerId == question.rightAnswerId){
            if(!result[question.id]){
                result[question.id] = 'success'
            }
            
            this.setState({
                answerState: {[answerId]: 'success'},
                result
            })


            const timeout = window.setTimeout(() => {
                if(this.isQuesionFinished()){
                    console.log('Finish');
                    
            this.setState({isFinished: true})
                }else{
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
        }, 1000)
    }else{
        result[question.id] = 'error'
        this.setState({
            answerState: {[answerId]: 'error'},
            result
        })
        }
    }

    onRetry = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            result: {}
        })
    }

    

    render(){
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>

                <h1>Ответьте на все вопросы</h1>

                {this.state.isFinished 
                ? <FinishedQuiz 
                result={this.state.result}
                quiz={this.state.quiz}
                onRetry={this.onRetry}
                /> : <ActiveQuiz 
                answers={this.state.quiz[this.state.activeQuestion].answers}
                questions={this.state.quiz[this.state.activeQuestion].questions}
                onAnswerClick={this.onAnswerClick}
                answerNumber={this.state.activeQuestion + 1}
                answerLength={this.state.quiz.length}
                state={this.state.answerState}
                />}

                

                </div>
            </div>
        )
    }
}

export default Quiz