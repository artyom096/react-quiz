
import { AUTH_SUCCESS, AUTO_LOGOUT } from "../actions/actionsType"

const initialState = {
    token: null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.token
            }
        case AUTO_LOGOUT:
            return {
                ...state,
                token: null
            }
        default:
            return state
    }
}