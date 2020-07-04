import { LogoutService, setAuthUser, setAuthToken } from '../_services/auth.service'
import firebase from 'firebase'


const CREDENTIAL = 'CREDENTIAL'
const credential = (payload) => {
    return {type: CREDENTIAL, payload}
}

const LOGIN = 'LOGIN'
const login = (user, token) => {
    setAuthUser(user)
    setAuthToken(token)
    return {type: LOGIN, payload: user}
}

const LOGIN_REDIRECT = 'LOGIN_REDIRECT'
const loginRedirect = (redirectUrl) => {
    return {type: LOGIN_REDIRECT, payload: redirectUrl}
}

const LOGOUT = 'LOGOUT'
const logout = () => {
    LogoutService()
    firebase.auth().signOut()

    return {type: LOGOUT}
}

const updateMyAccount = (response) => {
    return dispatch => {
        dispatch(login(response.user, response.token.token))
    }
}

const authAction = {
    login,
    loginRedirect,
    logout,
    credential,
    updateMyAccount,
    
    types: {
        LOGIN,
        LOGIN_REDIRECT,
        LOGOUT,
        CREDENTIAL,
    },
}


export default authAction