import React from 'react'; 
import AttestRecordItem from './AttestRecordItem';

class AttestRecordsList extends React.Component {   

  render() { 
    const {match, patientAttestations, onHistory}  = this.props; 
    const recordid = match.params.id; 
    console.log("[AttestRecordsList] recordid:", recordid)

    return (
      <div className="container"> 
        <div className="heading p-4">Patient Attestation List</div> 
        <div>
            { patientAttestations.map( (patientAttestation, index) => 
               <AttestRecordItem key={index} parentid={recordid} patientAttestation={patientAttestation}   />)}
        </div>
        <button className="btn btn-success m-4" onClick = {() => { 
            //console.log("[AttestRecordsList]   recordid:",  recordid)
            onHistory.push('/Record/' +  recordid);
        }}> Back </button>
      </div>
    ); 
  }  
}

export default AttestRecordsList;