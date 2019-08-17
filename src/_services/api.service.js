import { getAuthHeader, getCsrfToken } from "./auth.service";
import store from '../store'
import config from '../config'
import axios from 'axios'
import authAction from "../_actions/auth.action";
import appAction from "../_actions/app.action";

const API_URL_PRIMARY   = 'API_URL_PRIMARY'
const API_URL_SECONDARY = 'API_URL_SECONDARY'
let apiUrlType          = API_URL_PRIMARY

const setApiURL = (API_URL_TYPE) => {
    console.log('API Service - URL changed', {API_URL_TYPE})
    apiUrlType = API_URL_TYPE
}

const apiUrlPrimary   = config.apiUrlPrimary || config.apiUrl
const apiUrlSecondary = config.apiUrlSecondary
const initialHeader   = {
    'Content-Type': 'application/json'
}

/**
 * Fetch with Authorization token, and csrf token
 * @param {*} url 
 * @param {*} method 
 * @param {*} body 
 * @param {*} headers 
 */
export const fetch = async(url, method = 'post', body, headers = initialHeader) => {
    return new Promise((resolve, reject) => {
        try {
            // Remove start foward slash
            if(url.length && url.charAt(0) === '/') {
                url = url.substr(1)
            }

            console.log('APIAuthService', {
                url, method, headers, body,
                isFormData: body instanceof FormData ? 'yes' : 'no'
            })

            // Add CSRF token
            headers = {...headers, 'x-csrf-token': getCsrfToken(), ...getAuthHeader()}
    
            const options = {
                headers,
                method
            }
            
            const currentApiUrl = apiUrlType === API_URL_PRIMARY ? apiUrlPrimary : apiUrlSecondary
            console.log('API Current URL: ', {currentApiUrl})
            
            if(method.toLowerCase() === 'post') {
                axios.post(`${currentApiUrl}/`+url, body, options).then(response => {
                    resolve(handleResponse(response, url))
                }).catch(err => {
                    handleError(err)
                    reject(err)
                })
            }
            else {
                axios.get(`${currentApiUrl}/`+url, body, options).then(response => {
                    resolve(handleResponse(response, url))
                }).catch(err => {
                    handleError(err)
                    reject(err)
                })       
            }
        }
        catch (err) {
            handleError(err)
            reject(err)
        }
    })
}

const handleError = (err, url = null) => {
    console.log('API response error', {url, status: err.status, response: err.response} )
    
    if(typeof err.response === 'undefined') {
        store.dispatch(appAction.alert(err.message, 'danger'))
        return {
            status: 'error',
            code: 'Network Error',
            message: 'Network Error'
        }        
    }
    const code = err.response.status

    if(code === 401) {
        store.dispatch(authAction.logout())
        return {
            status: 'error',
            code: err.response.status,
            message: 'Unauthorized'
        }
    }
    else {
        return {
            status: 'error',
            code: err.response.status,
            message: err.response.data
        }
    }
}

/**
 * Handle Fetch Response
 * If response is 401 (Unauthorized), dispatch LogoutAction
 * @param {*} response 
 * @param {*} resolve 
 * @param {*} reject 
 */
const handleResponse = (response, url = null) => {
    try {
        console.log('API response', response.statusText, {
            url,
            status: response.status,
            data: response.data,
            headers: response.headers,
            response
        })

        if(response.status === 200) {
            return response.data
        }
    }
    catch (err) {
        console.log('handleResponse Error', err, {response})
    }
}

const apiService = {
    API_URL_PRIMARY,
    API_URL_SECONDARY,
    setApiURL,
    fetch,
}

export default apiService