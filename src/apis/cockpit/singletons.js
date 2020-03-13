import axios from 'axios';
import { getUrl } from './index'

export const get = async (singletonName) => {
    try {
        const response = await axios.get(getUrl('singletons/get/'+singletonName));
        
        return response.data
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export default {
    get
};