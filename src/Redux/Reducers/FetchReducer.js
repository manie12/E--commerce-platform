import { FETCHDATA, POSTFETCH } from '../Actions/Constants';
const Products = (Products = [], action) => {
    switch (action.type) {

        case FETCHDATA:
            return action.payload;
        case POSTFETCH:
            return [...Products, action.payload];

        default:
            return Products;

    }
}
export default Products;