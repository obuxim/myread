import React, {Component} from 'react'
import {Link} from "react-router-dom";

class SearchHeader extends Component {
    render() {
        return(
            <nav className="navbar navbar-light bg-light">
                <div className="container justify-content-center">
                    <Link to="/"><span className="navbar-brand">MY READ</span></Link>
                </div>
            </nav>
        )
    }
}

export default SearchHeader