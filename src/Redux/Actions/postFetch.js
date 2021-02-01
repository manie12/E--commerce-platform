import * as api from '../../Api/api';
import { POSTFETCH } from './Constants';

export const postFetch = (post) => async (dispatch) => {

    try {
        const { data } = await api.postfetch(post);
        console.log(data)
        dispatch({ type: POSTFETCH, payload: data });
    } catch (error) {
        //console.log(error);
    }

}

