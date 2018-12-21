import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import logo from './img/Vac-Acc-logo.png';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import VacAdmin from './components/VacAdmin';
import Patient from './components/Patient';
import Register from './components/registration/Register'; 
import AttestList from './components/attestation/AttestList';
import Attest from './components/attestation/Attest';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
        forAttestations: [],
        attested: [], 
        registrations: []      
    } 
    
    this.attest = this.attest.bind(this);

  }
  componentDidMount() {
    const forAttestations = SimulateFetchForAttestionFromDb();
    const attested = SimulateFetchAttestedFromDb();
    this.setState({
      forAttestations,
      attested,            
    });

    console.log("componentDidMount");
  }
  register(registrationData) {
    console.log("[App] registrationData: ", registrationData);

    this.setState( (registrationData) => ({registrations: this.state.registrations.concat([registrationData])}));
  };


  attest(attestData) {
    console.log("[App] attest: ", attestData);

    // remove for attestion data
    this.setState( (state) => ({    
      forAttestations: state.forAttestations.filter( attestation => attestation !== attestData),    
    }));

    // add to attested data
    this.setState( (attestData) => ({attested: this.state.attested.concat([attestData])}));
  
  };

  render() {
    return (
      <div>
         <Route exact path="/" render={ () => (
            <div>
              <Login />
            </div>    
         )} />

         <Route exact path="/Attestation" render={ () => (
            <div>
              Attestation Page
            </div>    
         )} /> 

         <Route exact path="/VacAdmin" render={ ({history}) => (
              <VacAdmin />   
         )} />
         
         <Route exact path="/Register" render={ ({history}) => (
              <Register onRegister = {(registerData) => {
                  this.register(registerData)
                  history.push('/');
                }} />   
         )} />

         <Route exact path="/AttestList" render={ ({history}) => (
              <AttestList attestations={this.state.forAttestations} onAttest={this.attest}/>
         )} />

         <Route exact path="/Attest/:id" render={ ( params) => (
              <Attest {...params} attestations={this.state.forAttestations} onAttest={this.attest} onHistory={params.history} /> 
              
             
         )} />

         <Route exact path="/Patient" render={ ({history}) => (
              <Patient />   
         )} />

      </div>
    );
  }
}



function SimulateFetchForAttestionFromDb() {
  return [{
      id: 1,
      name: "for attestion 1", 
      }, 
      {
      id: 2,
      name: "for attestion 2",  
      }, 
      {
      id: 3,
      name: "for attestion 3", 
      }, 
      {
      id: 4,
      name: "for attestion 4", 
      }, 
      {
      id: 5,
      name: "for attestion 5", 
      },
  ]
} 

function SimulateFetchAttestedFromDb() {
  return [{}] 
} 

export default App;
