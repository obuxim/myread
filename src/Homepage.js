import React, {Component} from 'react'
import HomeHeader from './HomeHeader.js'
import Shelf from './Shelf.js'

class Homepage extends Component {

    render() {
        return (
            <div>
                {console.log("Props of Homepage.js: ",this.props)}
                <HomeHeader />
                <div className="my-5"></div>
                <Shelf
                    header="Currently Reading"
                    books={this.props.currentlyReading}
                />
                <Shelf
                    header="Want to Read"
                    books={this.props.wantToRead}
                />
                <Shelf
                    header="Read"
                    books={this.props.read}
                />
            </div>
        );
    }

}

export default Homepage