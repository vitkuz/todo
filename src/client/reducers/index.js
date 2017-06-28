import {combineReducers} from "redux"
import {bookReducers} from "./booksRedusers";
import {cartReducers} from "./cartRedusers";


export default combineReducers({
    books:bookReducers,
    cart:cartReducers
});