import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getBooks} from "../../actions/booksActions";

import {Grid,Row,Button,Col} from "react-bootstrap";

import BookItem from "../bookItem";
import BookForm from "../bookForm";

class BookList extends Component {

    componentDidMount() {
        this.props.getBooks();
    }

    render() {

        const bookList = this.props.books.map((book,i) => {
            return (
                <BookItem id={book.id}
                          title={book.title}
                          description={book.description}
                          price={book.price} />
            )
        })

        return (
            <Grid>
                <Row>

                    <Col xs={12} md={8}>
                        {bookList}
                    </Col>
                    <Col xs={6} md={4}>
                        <BookForm/>
                    </Col>


                    <br/>

                </Row>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {
        books:state.books.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({getBooks:getBooks}, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList)