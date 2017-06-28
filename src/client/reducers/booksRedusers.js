export function bookReducers(state = {
    books: [{
        id: 1,
        title: "A Merciful Death (Mercy Kilpatrick Book 1)",
        description: "book description"
        },
        {
            id: 2,
            title: "After You Left",
            description: "book description"
        }
        ,
        {
            id: 3,
            title: "A Merciful Death (Mercy Kilpatrick Book 1)",
            description: "book description"
        }], categories: []
}, action) {

    let index;
    let firstPart;
    let secondPart;


    switch (action.type) {
        case "POST_BOOK":
            return {books: [...state.books, ...action.books]};
        // break;
        case "REMOVE_BOOK":

            index = state.books.findIndex((book) => {

                return book.id === action.book.id
            });
            firstPart = state.books.slice(0, index);
            secondPart = state.books.slice(index + 1);
            return {books: [...firstPart, ...secondPart]};

        // break;
        case "UPDATE_BOOK":

            index = state.books.findIndex((book) => {
                return book.id === action.book.id
            });
            firstPart = state.books.slice(0, index);
            secondPart = state.books.slice(index + 1);
            return {books: [...firstPart, action.book, ...secondPart]};
        // break;
        case "GET_BOOKS":
            return {...state.books, books: [...state.books]};
        default:
            return state;
    }
}


