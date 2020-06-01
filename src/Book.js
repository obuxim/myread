import React, {Component} from "react";

class Book extends Component {

    render() {
        const { book } = this.props
        return (
            <div className="col-4 col-md-3 col-lg-2 p-2">
                {console.log("Props of Book.js: ",this.props)}
                <div className="card shadow">
                    <img className="card-img-top" src={book.imageLinks ? book.imageLinks.thumbnail : ''} alt={book.title} />
                </div>
            </div>
        );
    }

}

export default Book