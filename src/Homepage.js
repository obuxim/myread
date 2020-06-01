import React, {Component} from 'react'
import HomeHeader from './HomeHeader.js'
import Shelf from './Shelf.js'

class Homepage extends Component {

    render() {
        return (
            <div>
                <HomeHeader />
                <div className="my-5"></div>
                <Shelf
                    header="Currently Reading"
                    books={this.props.currentlyReading}
                    update={this.props.update}
                />
                <Shelf
                    header="Want to Read"
                    books={this.props.wantToRead}
                    update={this.props.update}
                />
                <Shelf
                    header="Read"
                    books={this.props.read}
                    update={this.props.update}
                />
            </div>
        );
    }

}

export default Homepage