import store from '../store'
import { DefaultButton } from '../components/Modal'

const ENV_DEVELOPMENT = 'ENV_DEVELOPMENT'
const ENV_PRODUCTION = 'ENV_PRODUCTION'

const APP_ENVIROMENT = 'APP_ENVIROMENT'
const APP_PATH = 'APP_PATH'
const AppPath = (payload) => {
    return {type: APP_PATH, payload}
}

const AppSetEnvAction = (payload) => {
    return {type: APP_ENVIROMENT, payload}
}

const DARK_MODE = 'DARK_MODE'
const darkMode = () => {
    return {type: DARK_MODE}
}

const FORM_ERROR = 'FORM_ERROR'
const formError = (payload) => {
    console.log('formError', {payload})
    return {type: FORM_ERROR, payload}
}

const FORM_SUCCESS = 'FORM_SUCCESS'
const formSuccess = (payload) => {
    return {type: FORM_SUCCESS, payload}
}

const ALERT = 'ALERT'
const alert = (text, alert_type = 'info') => {
    window.scrollTo(0,0)
    text = typeof text.message !== 'undefined' ? text.message : text 
    
    return {type: ALERT, text, alert_type}
}

const ALERT_CLEAR = 'ALERT_CLEAR'
const alertClear = () => {
    return {type: ALERT_CLEAR}
}

const CREATE_MODAL = 'CREATE_MODAL'
const createModal = (body, buttons = [DefaultButton()] ) => {
    store.dispatch({type: CREATE_MODAL, payload: { body, buttons} })
}
const createModalTitle = (title, body, buttons = [DefaultButton()] ) => {
    store.dispatch({type: CREATE_MODAL, payload: { title, body, buttons} })
}
const HIDE_MODAL = 'HIDE_MODAL'
const hideModal = () => {
    store.dispatch({type: HIDE_MODAL})
}

const COCKPIT = 'COCKPIT'
const cockpit = (payload) => {
    return {type: COCKPIT, payload};
}

export default {
    ENV_DEVELOPMENT,
    ENV_PRODUCTION,
    
    APP_ENVIROMENT,
    AppSetEnvAction,

    APP_PATH,
    AppPath,

    DARK_MODE,
    darkMode,

    FORM_ERROR,
    formError,

    FORM_SUCCESS,
    formSuccess,

    ALERT,
    alert,

    ALERT_CLEAR,
    alertClear,

    CREATE_MODAL,
    createModal,
    createModalTitle,

    HIDE_MODAL,
    hideModal,

    COCKPIT,
    cockpit,
}