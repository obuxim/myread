import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI.js'

import Homepage from './Homepage.js';
import Search from './Search.js';

class App extends Component {
    state = {
        allBooks: [],
        currentlyReading: [],
        wantToRead: [],
        read: []
    }

    async componentDidMount() {
        const _allBooks = await BooksAPI.getAll()
        const _currentlyReading = _allBooks.filter(book => book.shelf === 'currentlyReading')
        const _wantToRead = _allBooks.filter(book => book.shelf === 'wantToRead')
        const _read = _allBooks.filter(book => book.shelf === 'read')
        this.setState({
            allBooks: _allBooks,
            currentlyReading: _currentlyReading,
            wantToRead: _wantToRead,
            read: _read,
        })
        console.log("State of App.js: ",this.state)
    }

    render() {
    return(
        <div className="app">
          <Route exact path="/"
            render={({history}) => (
                <Homepage
                    currentlyReading={this.state.currentlyReading}
                    wantToRead={this.state.wantToRead}
                    read={this.state.read}
                />
            )}
          />
          <Route exact path="/search" render={({history}) => (
              <Search />
          )}
          />
        </div>
    )
  }
}

export default App;
