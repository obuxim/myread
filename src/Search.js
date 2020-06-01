import React, {Component} from "react";
import SearchHeader from './SearchHeader.js'
import Books from './Books.js'

class Search extends Component {
    render() {
        return(
            <div>
                <SearchHeader />
                <Books />
            </div>
        )
    }
}

export default Search