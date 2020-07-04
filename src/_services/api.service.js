import { getAuthHeader, getCsrfToken } from "./auth.service";
import axios from 'axios'

const initialHeader   = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

/**
 * Fetch with Authorization token, and csrf token
 * @param {*} url 
 * @param {*} method 
 * @param {*} body 
 * @param {*} headers 
 */
export const fetch = async(url, body, headers = initialHeader) => {
    return new Promise((resolve, reject) => {
        try {
            // Remove start foward slash
            if(url.length && url.charAt(0) === '/') {
                url = url.substr(1)
            }

            // Add CSRF token
            headers = {...headers, 'x-csrf-token': getCsrfToken(), ...getAuthHeader()}
    
            const options = {
                headers,
                method: 'post',
            }
            const postUrl = `${process.env.REACT_APP_API_URL}${url}`

            axios.post(postUrl, body, options).then(response => {

                if(response.data.status && response.data.status === 1) {
                    resolve(handleResponse(response))
                }
                else {
                    reject(handleError(response))
                }
            }).catch(err => {
                console.log('API fetch error (1)', err, {url})
                reject(err)
            })
        }
        catch (err) {
            console.log('API fetch error (2)', err, {url}, err.response)
            reject(err)
        }
    })
}

/**
 * Handle Fetch Response
 * If response is 401 (Unauthorized), dispatch LogoutAction
 * @param {*} response 
 * @param {*} resolve 
 * @param {*} reject 
 */
const handleResponse = (response, url = null) => {
    return response.data
}

const handleError = (response) => {
    return {
        status: 'error',
        code: response.status,
        message: response.data.message,
    }
}

export default fetch