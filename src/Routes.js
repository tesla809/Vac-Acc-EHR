import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'; 
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
import UploadAttestation from './components/patients/records/UploadAttestation';

class Routes extends Component {

    constructor() {
        super();
        this.state = {  
            user: {},
        }   
    }

    componentWillMount() { 
    
        const { userSession } = this.props 
        if (userSession.isUserSignedIn()) {
          const user = userSession.loadUserData()
          this.setState({ user })   
        }   
    } 
      
    render() {         
        const { userSession } = this.props   
        const { user } = this.state 
        
        return ( 
          <div>  
             <Route 
                    exact
                    path="/"
                    render = { () => window.location.pathname=== '/' && 
                              <Redirect to={`/Patient/${user.username}`}/> }  
             /> 
     
             <Route exact path="/VacAdmin/:username" render={ (params) => (
                  <VacAdmin userSession={userSession}  onHistory={params.history} />   
             )} />
             
             <Route exact path="/Register"  render={ (params) => (
                  <Register onRegister = {(registerData) => {
                      this.register(registerData)
                      params.history.push('/');
                    }} onHistory={params.history} />   
             )} />
    
             <Route exact path="/AttestList" render={ (params) => (
                  <AttestList onHistory={params.history}/>
             )} />
    
             <Route exact path="/Attest/:id" render={ ( params) => (
                  <Attest {...params} onHistory={params.history} /> 
                   
             )} />
    
             <Route exact path="/Patient/:username" render={ (params) => ( 
                  <Patient userSession={userSession} onHistory={params.history} />   
             )} />
               
             <Route exact path="/PatientUploadImmun/:username" render={ (params) => (
                  <PatientUploadImmun userSession={userSession} username={user.username} onHistory={params.history} />
             )} />
     
             <Route exact path="/PatientConfig" render={ ({params}) => (
                  <PatientConfig />
             )} />
             <Route exact path="/RecordsList/:username" render={ (params) => (
                  <RecordsList  username={user.username} userSession={userSession} onHistory={params.history} />
             )} />
    
             <Route exact path="/Record/:immunId" render={ ( params) => (
                  <Record  userSession={userSession} 
                    {...params}  
                    onHistory={params.history} 
                  />  
             )} />
    
             <Route 
                    exact 
                    path="/AttestRecordsList/:immunId"  
                    userSession={userSession} 
                    render={ ( params ) => (
                  <AttestRecordsList {...params} onHistory={params.history}/>
             )} />
             
             <Route exact path="/UploadAttestation/:immunId" render={ (params) => (
                  <UploadAttestation {...params} userSession={userSession} onHistory={params.history} />
             )} />
             <Route exact path="/AttestRecord/:parentid/:id" render={ ( params) => (
                  <AttestRecord  
                    userSession={userSession} 
                    {...params} 
                    onHistory={params.history} /> 
             )} />
          </div>
        );
      }
}
 
export default Routes