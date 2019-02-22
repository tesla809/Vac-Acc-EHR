import React from 'react';  

const AttestRecordItem = (props) => { 
    return ( 
      <div> 
       <div>{props.patientAttestation.description}</div>  
       <img src={`https://ipfs.io/ipfs/${props.patientAttestation.ipfsHash}`}  height="400" width="400" alt=""/>
      </div>  
    ); 
}

export default AttestRecordItem;