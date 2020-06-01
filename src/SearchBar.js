import React, {Component} from 'react'

class SearchBar extends Component {

    state = {
        query: ''
    }

    searchQuery = (q) => {
        this.setState({query: q})
        if(q.trim() !== ''){
            this.props.search(q)
        }
    }

    render() {
        return (
            <div className="container my-5">
                <input type="text" placeholder="   Search for books..." className="form-control" value={this.state.query} onChange={(event => this.searchQuery(event.target.value))}/>
            </div>
        );
    }

}

export default SearchBar