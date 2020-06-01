import React, {Component} from 'react'
import Book from './Book.js'

class Books extends Component {

    render() {
        return (
            <div className="container">
                {console.log("Props of Books.js: ",this.props)}
                <div className="row">
                    {this.props.books.map(b => <Book key={b.id} book={b} />)}
                </div>
            </div>
        );
    }

}

export default Books