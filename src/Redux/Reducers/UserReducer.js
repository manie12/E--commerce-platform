import { FETCHUSER, POSTUSER } from '../Actions/Constants';
const Users = (Users = [], action) => {
    switch (action.type) {

        case FETCHUSER:
            return action.payload;
        case POSTUSER:
            return [...Users, action.payload]
        default:
            return Users;

    }
}
export default Users;