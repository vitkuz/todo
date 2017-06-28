export function cartReducers(state={cart:[]}, action) {

    // let index;
    // let firstPart;
    // let secondPart;


    switch (action.type) {
        case "ADD_TO_CART":
            return {cart:[...state.cart, action.book]};
        // break;
        default:
            return state;
    }
}


