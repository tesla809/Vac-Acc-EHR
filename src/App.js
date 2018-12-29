import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './img/Vac-Acc-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button bsStyle='danger'>
            Insert Blockstack
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
