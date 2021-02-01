import * as api from '../../Api/api';
import { POSTUSER } from './Constants';

export const getpostUser = (postdata) => async (dispatch) => {

    try {
        const data = await api.postUser(postdata);
        console.log(data)
        dispatch({ type: POSTUSER, payload: data });
    } catch (error) {
        //console.log(error);
    }

}

