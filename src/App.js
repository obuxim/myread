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

    componentDidMount() {
        this.getAllBooks()
    }

    getAllBooks = async () => {
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
    }

    update = async (book, shelf) => {
        await BooksAPI.update(book, shelf)
        this.getAllBooks()
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
                    update={this.update}
                />
            )}
          />
          <Route exact path="/search" render={({history}) => (
              <Search allBooks={this.state.allBooks} update={this.update}/>
          )}
          />
        </div>
    )
  }
}

export default App;
