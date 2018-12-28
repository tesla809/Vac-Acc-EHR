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
import PatientUploadImmun from './components/patients/PatientUploadImmun';
import PatientConfig from './components/patients/PatientConfig'; 
import RecordsList from './components/patients/records/RecordsList'; 
import Record from './components/patients/records/Record';
import AttestRecordsList from './components/patients/records/AttestRecordsList'; 
import AttestRecord from './components/patients/records/AttestRecord';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
        forAttestations: [],
        attested: [], 
        registrations: [],
        immunizations: [],
        patientAttestations: [],      
    } 
    
    this.attest = this.attest.bind(this);
    
  }
  componentDidMount() {
    const forAttestations = SimulateFetchForAttestionFromDb();
    const attested = SimulateFetchAttestedFromDb();
    const immunizations = SimulatePatientRecord();
    const patientAttestations = SimulatePatientAttestationsRecord();
    this.setState({
      forAttestations,
      attested,
      immunizations,
      patientAttestations,            
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

         <Route exact path="/VacAdmin" render={ (params) => (
              <VacAdmin  onHistory={params.history} />   
         )} />
         
         <Route exact path="/Register" render={ (params) => (
              <Register onRegister = {(registerData) => {
                  this.register(registerData)
                  params.history.push('/');
                }} onHistory={params.history} />   
         )} />

         <Route exact path="/AttestList" render={ (params) => (
              <AttestList attestations={this.state.forAttestations} onAttest={this.attest} onHistory={params.history}/>
         )} />

         <Route exact path="/Attest/:id" render={ ( params) => (
              <Attest {...params} attestations={this.state.forAttestations} onAttest={this.attest} onHistory={params.history} /> 
               
         )} />

         <Route exact path="/Patient" render={ (params) => (
              <Patient onHistory={params.history} />   
         )} />
           
         <Route exact path="/PatientUploadImmun" render={ (params) => (
              <PatientUploadImmun onHistory={params.history} />
         )} />
 
         <Route exact path="/PatientConfig" render={ ({history}) => (
              <PatientConfig />
         )} />
         <Route exact path="/RecordsList" render={ (params) => (
              <RecordsList immunizations = {this.state.immunizations} onHistory={params.history} />
         )} />

         <Route exact path="/Record/:id" render={ ( params) => (
              <Record {...params} immunizations={this.state.immunizations} onHistory={params.history} recordid={this.state.immunizations.id} /> 
               
         )} />

         <Route exact path="/AttestRecordsList/:id" render={ ( params ) => (
              <AttestRecordsList {...params} patientAttestations = {this.state.patientAttestations} onHistory={params.history}/>
         )} />

         <Route exact path="/AttestRecord/:parentid/:id" render={ ( params) => (
              <AttestRecord {...params} patientAttestations={this.state.patientAttestations} onHistory={params.history} /> 
               
         )} />
      </div>
    );
  }
}



function SimulateFetchForAttestionFromDb() {
  return [{
      id: 1,
      name: "attestion 1", 
      }, 
      {
      id: 2,
      name: "attestion 2",  
      }, 
      {
      id: 3,
      name: "attestion 3", 
      }, 
      {
      id: 4,
      name: "attestion 4", 
      }, 
      {
      id: 5,
      name: "attestion 5", 
      },
  ]
} 

function SimulateFetchAttestedFromDb() {
  return [{}] 
} 


function SimulatePatientRecord() {
  return [{
      id: 1,
      description: "Tetanus vaccination", 
      dateadmin: "2001-01-12",
      adminby: "Dr. John Doe",
      location: "ABC Clinic Main St. Anytown, AnyState"
      }, 
      {
      id: 2,
      description: "Anti Polio vaccination", 
      dateadmin: "2001-10-07",
      adminby: "Dr. Jane Smith",
      location: "St. John Medical First St. Anytown, AnyState"  
      }, 
      
  ]
} 

function SimulatePatientAttestationsRecord() {
  return [{
      id: 1,
      description: "Tetanus vaccination attestation 1", 
      image: "./tetanus1.jpg",  
      }, 
      {
      id: 2,
      description: "Tetanus vaccination attestation 2", 
      image: "./tetanus2.jpg",
      },  
  ]
} 
export default App;
