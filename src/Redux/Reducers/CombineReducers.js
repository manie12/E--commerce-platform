import { combineReducers } from 'redux';
import Products from './FetchReducer';
import Users from './UserReducer';

export default combineReducers({
    Products,
    Users
});