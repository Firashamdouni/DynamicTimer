import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './timer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer/>
       
      </div>
    );
  }
}

export default App;