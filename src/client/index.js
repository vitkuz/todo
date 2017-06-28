import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {createLogger} from 'redux-logger'

import reducers from "./reducers/index";
import {addToCart} from "./actions/cartActions";
import {postBooks, updateBook, removeBook} from "./actions/booksActions";

const logger = createLogger({
    diff: true
});

const store = createStore(reducers, applyMiddleware(logger));

store.subscribe(() => {
    console.log("current state is:", store.getState());
});


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


// store.dispatch(postBooks([{
//     id: 1,
//     title: "A Merciful Death (Mercy Kilpatrick Book 1)",
//     description: "book description"
// },
//     {
//         id: 2,
//         title: "After You Left",
//         description: "book description"
//     }
// ]));
//
//
// store.dispatch(postBooks([{
//     id: 3,
//     title: "A Merciful Death (Mercy Kilpatrick Book 1)",
//     description: "book description"
// }
// ]));

// store.dispatch(removeBook({id: 3}));
// //
// store.dispatch(updateBook({id: 2, title: "UP! Split Second"}));
// //
// store.dispatch(addToCart({id: 2}));