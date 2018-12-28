import React from 'react';   

function AttestRecord(props) { 
    const {match, patientAttestations} = props;
    const parentid = match.params.parentid; 
    const id = match.params.id; 
    const patientAttestation = patientAttestations.find( (patientAttestation) => patientAttestation.id === Number(id));
 
    return ( 
      <div className="container"> 
        <div className="m-4"> 
            <div>ID: {patientAttestation.id}</div>  
            <div>Description: {patientAttestation.description}</div> 
        </div>  
         
        <div className="m-4"> 
          <div>Image:</div>     
          <img src="../../img/doc2.jpg" alt="" height="150" width="150"/> 
        </div> 
         
        <button className="btn btn-success m-4" onClick = {() => { 
            props.onHistory.push('/AttestRecordsList/' + parentid);
        }}> Back </button>
      </div> 
    );
   
}

export default AttestRecord;
