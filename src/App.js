import React, { Component } from 'react';
import './App.css';

import Todo from './Todo';
import Plus from './Plus';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todo />
        <Plus name="+증가"/>       
      </div>
    );
  }
}

export default App;
