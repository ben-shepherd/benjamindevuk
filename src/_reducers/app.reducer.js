
import appServices from '../_services/app.service'
import config from "../config";
import appAction from '../_actions/app.action';
import helperService from '../_services/helper.service'

const initialState = {
    dev: appServices.envDevelopment(),
    beta: appServices.isBeta(),
    path: window.location.pathname,
    apiUrl: config.apiUrl,
    darkMode: false,
    formSuccess: null,
    formError: null,
    alert: {
        text: null,
        alert_type: null,
    },
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case appAction.DARK_MODE:
            helperService.setDarkMode(!state.darkMode)
            return {
                ...state,
                darkMode: !state.darkMode,
            }
        case appAction.APP_PATH:
            return {
                ...state,
                path: action.payload,
            }
        case appAction.FORM_ERROR:
            return {
                ...state,
                formSuccess: null,
                formError: action.payload,
            }
        case appAction.FORM_SUCCESS:
            return {
                ...state,
                formSuccess: action.payload,
                formError: null,
            }
        case appAction.ALERT:
            return {
                ...state,
                alert: {
                    text: action.text,
                    alert_type: action.alert_type
                }
            }
        case appAction.ALERT_CLEAR:
            return {
                ...state,
                alert: initialState.alert,
            }
        case appAction.DEFAULT_PROFILE_PICTURE:
            return {
                ...state,
                defaultProfilePicture: action.payload,

            }
        default:
            return state
    }
}

export default app