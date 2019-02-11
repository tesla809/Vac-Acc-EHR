import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './img/Vac-Acc-logo.png';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return ( 
      <div className="App">
       
         <Route exact path="/" render={ () => (
            <div>
              Main Page
            </div>    
         )} />

         <Route exact path="/Attestation" render={ () => (
            <div>
              Attestation Page
            </div>    
         )} /> 
      </div>
    );
  }
}

export default App;
