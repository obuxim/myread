import React, {Component} from 'react';
import { Route } from 'react-router-dom'

import Homepage from './Homepage.js';
import Search from './Search.js';

class App extends Component {
  render() {
    return(
        <div className="app">
          <Route exact path="/"
            render={({history}) => (
                <Homepage />
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
