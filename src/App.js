import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
