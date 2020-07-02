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

export const get = async (collectionName, options) => await posts(collectionName, options)

export const posts = async (collectionName, options = []) => {
    try {
        // const response = await axios({
        //     method: 'post',
        //     url: getUrl('collections/get/'+collectionName, options),
        //     data: options,
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        const res = await fetch(getUrl('collections/get/'+collectionName, options), {
            method: 'post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(options)
        })
        const json = await res.json()
        
        return json
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