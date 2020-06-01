import React, {Component} from 'react'
import {Link} from "react-router-dom";

class HomeHeader extends Component {
    render() {
        return(
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <Link to="/"><span className="navbar-brand">MY READ</span></Link>
                    <Link to="/search"><i className="fa-2x fas fa-search"></i></Link>
                </div>
            </nav>
        )
    }
}

export default HomeHeader