import React, {Component} from 'react'
import Book from './Book.js'

class Books extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.books.map(b => <Book key={b.id} book={b} update={this.props.update}/>)}
                </div>
            </div>
        );
    }

}

export default Books