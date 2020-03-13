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

export const posts = async (collectionName) => {
    try {
        const response = await axios.get(getUrl('collections/get/'+collectionName));
        
        return response.data
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export default {
    list,
    posts
};