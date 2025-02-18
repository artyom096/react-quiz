import {CREATE_QUIZ_QUESTION, RESET_QUIZ_QUESTION} from './actionsType'
import axios from './../../axios/axios-quiz'

export function createQuizQuestions(item) {
    return {
        type: CREATE_QUIZ_QUESTION,
        item
    }
}

export function resetQuizCreation() {
    return {
        type: RESET_QUIZ_QUESTION
    }
}

export function finishCreateQuiz() {
    return async (dispatch, getState) => {
        await axios.post('/quizes.json', getState().create.quiz)
        dispatch(resetQuizCreation())
    }
}