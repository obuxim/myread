import React, {Component} from "react";

class Book extends Component {

    state = {
        shelf: "none"
    }

    update = (book, _shelf) => {
        this.setState({shelf: _shelf})
        this.props.update(book, _shelf)
    }

    render() {
        const { book } = this.props
        return (
            <div className="col-4 col-md-3 p-2">
                <div className="card shadow">
                    <img className="card-img-top" src={book.imageLinks ? book.imageLinks.thumbnail : ''} alt={book.title} />
                    <div className="card-body">
                        <h3 className="card-title">{book.title}</h3>
                        {book.authors ?
                            <p>Authors: {book.authors.join(", ")}</p> :
                            ''
                        }
                        <select className="custom-select" value={this.state.shelf === "none" ? (this.props.book.shelf ? this.props.book.shelf : this.state.shelf) : this.state.shelf} onChange={(event => this.update(book, event.target.value))}>
                            <option value="none">None</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }

}

export default Book