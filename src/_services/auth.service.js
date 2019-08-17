const FACEBOOK = 'facebook.com'
const GOOGLE = 'google.com'
const EMAILANDPASSWORD = 'EmailAndPassword'

export const providers = {
    FACEBOOK,
    GOOGLE,
    EMAILANDPASSWORD,
}


const MEMBER = 'member'
const MOD = 'mod'
const ADMIN = 'admin'

export const roles = {
    MEMBER,
    MOD,
    ADMIN,
}

export const getRole = () => {
    if(loggedIn()) {
        const user = getAuthUser()
        return typeof user.role !== 'undefined' ? user.role : null
    }
    return null
}
export const isMember = () => getRole() === roles.MEMBER
export const isMod = () => getRole() === roles.MOD || getRole()
export const isAdmin = () => getRole() === roles.ADMIN
export const isAdminOrMod = () => loggedIn() && (getRole() === roles.MOD || getRole() === roles.ADMIN)

/**
 * Set the user
 * @param {*} user 
 */
export const setAuthUser = user => {
    localStorage.setItem('user', JSON.stringify(user))
}

/**
 * Get the user
 */
export const getAuthUser = () => {
    let user = localStorage.getItem('user')

    if(user) {
        return JSON.parse(user)
    }
}

/**
 * Check if we're logged in
 */
export const loggedIn = () => {
    let user = getAuthUser()
    return typeof user === 'object'
}


/**
 * Get auth token
 */
export const getAuthToken = () => {
    return localStorage.getItem('token')
}

/**
 * Set auth token
 * @param {*} token 
 */
export const setAuthToken = (token) => {
    localStorage.setItem('token', token)
}

/**
 * Get Authorization header
 */
export const getAuthHeader = () => {
    let token = getAuthToken()

    if(token) {
        return {
            'Authorization': 'Bearer ' + token
        }
    }
}

/**
 * Get CSRF token
 */
export const getCsrfToken = () => {
    try {
        let user = getAuthUser()

        if(typeof user !== 'undefined') {
            return user.csrf_token
        }
        
        return null
    }
    catch (err) {
        console.log('Error getting csrf token', err)
    }
}

/**
 * Logout
 * Remove user from storage
 * Remove token from storage
 */
export const LogoutService = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
}
