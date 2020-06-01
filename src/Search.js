import React, {Component} from "react";
import SearchHeader from './SearchHeader.js'
import SearchBar from './SearchBar.js'
import Books from './Books.js'
import * as BooksAPI from './utils/BooksAPI.js'

class Search extends Component {
    state = {
        hasBooks: false,
        books: []
    }

    search = async (q) => {
        if(q.trim() !== ''){
            const searchResults = await BooksAPI.search(q)
            if(Array.isArray(searchResults)){
                this.setState({hasBooks: true, books: searchResults})
            }else {
                this.setState({hasBooks: false, books: []})
            }
        }else {
            this.setState({hasBooks: false, books: []})
        }
    }

    render() {
        return(
            <div>
                <SearchHeader />
                <SearchBar search={this.search}/>
                {this.state.hasBooks ? <Books allBooks={this.props.allBooks} books={this.state.books} update={this.props.update}/> :
                    <div className="container">
                        <div className="text-center">
                            <h2>No books found!</h2>
                            <p>No books found matching your search query. Please try searching something else.</p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Search