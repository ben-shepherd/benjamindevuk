import { getAuthUser, loggedIn } from '../_services/auth.service'
import authActions from '../_actions/auth.action'

let user = loggedIn() ? getAuthUser() : null

const initialState = {
    logoutHandle: () => {},
    loggedIn: loggedIn(),
    loginRedirect: null,
    user,
    credential: null,
}

const app = (state = initialState, action) => {
    switch(action.type) {
        case authActions.types.LOGIN:
            return {
                ...state,
                loggedIn: true,
                user: action.payload,
            }
        case authActions.types.LOGIN_REDIRECT:
            return {
                ...state,
                loginRedirect: action.payload,
            }
        case authActions.types.LOGOUT:
            return {
                ...state,
                loggedIn: false,
                user: null,
                credential: null,
            }
        case authActions.types.CREDENTIAL:
            return {
                ...state,
                credential: action.payload,
            }
        default:
            return state
    }
}

export default app