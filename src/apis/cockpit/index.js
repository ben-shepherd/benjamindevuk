import React from 'react'

export { default as singletons } from './singletons'
export { default as collections } from './collections'

export const API_BASE    = 'https://cockpit.benjamindev.uk/'
export const API_URL     = `${API_BASE}api/`
export const API_TOKEN   = 'account-e74be613e2fe81ed85cf5e77b6b2ed';

export const getUrl = (path, filters = []) => {
    return `${API_URL}${path}?token=${API_TOKEN}`;
}

export const getStorageUrl = (path) => {
    return `${API_BASE}${path}`;
}

export const hasValue = (value) => {
    
    return(typeof value !== 'undefined'
        && value !== null
    )
}

export const getHtml = (htmlStr) => {
    return (
        <div dangerouslySetInnerHTML={{__html: htmlStr}}></div>
    )
}

export default {
    getUrl,
    getStorageUrl,
    getHtml
}