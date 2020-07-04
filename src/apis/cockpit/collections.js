import axios from 'axios';
import { getUrl } from './index'

export const list = async () => {
    try {
        const response = await axios.get(getUrl('collections/listCollections'));
        
        return response.data
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export const get = async (collectionName, options) => {
    const response = await posts(collectionName, options).entries
    console.log('collections.get', {collectionName, options})
    return response.entries
}

export const posts = async (collectionName, options = []) => {
    try {
        const response = await axios({
            url: getUrl('collections/get/'+collectionName, options),
            method: 'post',
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            data: {
                populate: 1,
                filters: {
                    ...options,
                }
            }
        })
        
        return response.data
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export default {
    list,
    get,
    posts
};