import React, { Component } from 'react';

import TimerContainer from './containers/TimerContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Pomo-React</h2>
        </div>
        <TimerContainer />
      </div>
    );
  }
}

export default App;
