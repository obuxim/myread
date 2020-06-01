import React, {Component} from 'react'
import HomeHeader from './HomeHeader.js'
import Shelf from './Shelf.js'

class Homepage extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <Shelf />
            </div>
        );
    }

}

export default Homepage