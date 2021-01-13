import axios from './../../axios/axios-quiz'
import { FETCH_QUIZES_ERROR, 
    FETCH_QUIZES_START, 
    FETCH_QUIZES_SUCCESS, 
    FETCH_QUIZ_SUCCESS, 
    FETCH_QUIZ_START, 
    FETCH_QUIZ_ERROR } from "./actionsType"

    export function fetchQuizes() {
        return async dispatch => {
          dispatch(fetchQuizesStart())
          try {
            const response = await axios.get('/quizes.json')
      
            const quizes = []
      
            Object.keys(response.data).forEach((key, index) => {
              quizes.push({
                id: key,
                name: `Тест №${index + 1}`
              })
            })
      
            dispatch(fetchQuizesSuccess(quizes))
          } catch (e) {
            dispatch(fetchQuizesError(e))
          }
        }
      }
      
      export function fetchQuizById(quizId) {
        return async dispatch => {
          dispatch(fetchQuizesStart())
      
          try {
            const response = await axios.get(`/quizes/${quizId}.json`)
            const quiz = response.data
      
            dispatch(fetchQuizSuccess(quiz))
          } catch (e) {
            dispatch(fetchQuizesError(e))
          }
        }
      }
      
      export function fetchQuizSuccess(quiz) {
        return {
          type: FETCH_QUIZ_SUCCESS,
          quiz
        }
      }
      
      export function fetchQuizesStart() {
        return {
          type: FETCH_QUIZES_START
        }
      }
      
      export function fetchQuizesSuccess(quizes) {
        return {
          type: FETCH_QUIZES_SUCCESS,
          quizes
        }
      }
      
      export function fetchQuizesError(e) {
        return {
          type: FETCH_QUIZES_ERROR,
          error: e
        }
      }