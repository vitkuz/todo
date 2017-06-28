import React, {Component} from "react";

import {Grid,Row,Button,Col, Well} from "react-bootstrap";

class BookItem extends Component {


    render() {

        return (
            <Well>
                <Row>
                    <Col xs="12">
                        <h6>{this.props.title}</h6>
                        <p>{this.props.description}</p>
                        <p>usd. {this.props.price}</p>
                        <Button bsStyle="warning">Warning</Button>
                    </Col>
                </Row>
            </Well>
        )
    }
}

// function mapStateToProps(state) {
//     return {
//         books:state.books.books
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators ({getBooks:getBooks}, dispatch)
// }

// export default connect(mapStateToProps,mapDispatchToProps)(BookList)
export default BookItem;