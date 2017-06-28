import React, {Component} from 'react';
import './App.less';
import BookList from "./components/pages/bookList";


class App extends Component {
    render() {
        return (
            <div>


                <BookList test="test1"/>


            </div>
        );
    }
}

export default App;
