import React, {Component} from 'react'

class ShelfHeader extends Component {
    render() {
        return(
            <div className="container bg-light py-3 my-3 py-lg-3">
                <h2 className="my-0">{this.props.header}</h2>
            </div>
        )
    }
}

export default ShelfHeader