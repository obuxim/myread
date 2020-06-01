import React, {Component} from 'react'
import ShelfHeader from './ShelfHeader'
import Books from './Books'

class Shelf extends Component {
    render() {
        return(
            <div>
                <ShelfHeader header={this.props.header}/>
                <Books books={this.props.books} update={this.props.update}/>
            </div>
        )
    }
}

export default Shelf