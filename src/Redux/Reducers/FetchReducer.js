import { FETCHDATA } from '../Actions/Constants';
const Products = (Products = [], action) => {
    switch (action.type) {

        case FETCHDATA:
            return action.payload;
        default:
            return Products;

    }
}
export default Products;