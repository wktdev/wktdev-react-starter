import React, { Component } from 'react';
import Landing from './components/Landing'
import About from './components/About'
import { Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import combineReducers from './reducers';
import logo from './logo.svg';
import './App.css';


const store = createStore(combineReducers);

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <main className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
        </main>
      </Provider>
    );
  }
}

export default App;
