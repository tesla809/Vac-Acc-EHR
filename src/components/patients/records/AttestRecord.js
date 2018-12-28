import React from 'react';   

function AttestRecord(props) { 
    const {match, patientAttestations} = props;
    const parentid = match.params.parentid; 
    const id = match.params.id; 
    const patientAttestation = patientAttestations.find( (patientAttestation) => patientAttestation.id === Number(id));
 
    return ( 
      <div className="container"> 
        <div> 
            <div>{patientAttestation.id}</div>  
            <div>{patientAttestation.description}</div> 
        </div>  
        <button className="btn btn-success m-4" onClick = {() => { 
            props.onHistory.push('/AttestRecordsList/' + parentid);
        }}> Back </button>
      </div> 
    );
   
}

export default AttestRecord;
