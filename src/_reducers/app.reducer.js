
import appServices from '../_services/app.service'
import config from "../config";
import appAction from '../_actions/app.action';
import helperService from '../_services/helper.service'
import { DefaultButton } from '../components/Modal'

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
    modal: {
        title: null,
        body: null,
        buttons: [DefaultButton()],
    },
    sidebarFull: false,
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
        case appAction.CREATE_MODAL:
            return {
                ...state,
                modal: {
                    title: action.payload.title || null,
                    body: action.payload.body,
                    buttons: action.payload.buttons,
                }
            }
        case appAction.HIDE_MODAL:
            return {
                ...state,
                modal: {
                    ...initialState.modal,
                }
            }
        case appAction.SIDEBAR_FULL:
            return {
                ...state,
                sidebarFull: action.payload
            }
        default:
            return state
    }
}

export default app