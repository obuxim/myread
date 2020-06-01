import React, {Component} from "react";

class Book extends Component {

    render() {
        const { book } = this.props
        return (
            <div className="col-4 col-md-3 p-2">
                {console.log("Props of Book.js: ",this.props)}
                <div className="card shadow">
                    <img className="card-img-top" src={book.imageLinks ? book.imageLinks.thumbnail : ''} alt={book.title} />
                    <div className="card-body">
                        <h3 className="card-title">{book.title}</h3>
                        {book.authors ?
                            <p>Authors: {book.authors.join(", ")}</p> :
                            ''
                        }
                        <select className="custom-select" value={book.shelf ? book.shelf : ''} onChange={(event => this.props.update(book, event.target.value))}>
                            <option disabled={true} value="">Add to shelf</option>
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