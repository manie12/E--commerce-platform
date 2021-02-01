import * as api from '../../Api/api';
import { FETCHDATA } from './Constants';

export const fetchPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchdata();
       // console.log(data)
        dispatch({ type: FETCHDATA, payload: data });
    } catch (error) {
        // console.log(error)
    }

}

