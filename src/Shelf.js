import React, {Component} from 'react'
import ShelfHeader from './ShelfHeader'
import Books from './Book'

class Shelf extends Component {
    render() {
        return(
            <div>
                <ShelfHeader />
                <Books />
            </div>
        )
    }
}

export default Shelf