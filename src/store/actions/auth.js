import axios from './../../axios/axios-quiz'
import { AUTH_SUCCESS, AUTO_LOGOUT } from './actionsType'


export default function auth(email, password, isLogin) {
    return async dispatch => {
        const authData = {
            email,
            password,
            returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_Kya3IiZXG640EmuoOR4-VorLmjCFLc0'

        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_Kya3IiZXG640EmuoOR4-VorLmjCFLc0'
        }

        const response = await axios.post(url, authData)
        const data = response.data
        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('expirationDate', expirationDate)

        dispatch(authSuccess(data.idToken))
        dispatch(autoLogout(data.expiresIn))
    }
}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    return {
        type: AUTO_LOGOUT
    }
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}