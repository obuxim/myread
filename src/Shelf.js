import React, {Component} from 'react'
import ShelfHeader from './ShelfHeader'
import Books from './Books'

class Shelf extends Component {
    render() {
        return(
            <div>
                {console.log("Props of Shelf.js: ",this.props)}
                <ShelfHeader header={this.props.header}/>
                <Books books={this.props.books}/>
            </div>
        )
    }
}

export default Shelf