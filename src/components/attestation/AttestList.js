import React from 'react'; 
import AttestItem from './AttestItem';

function AttestList(props) { 
    return (
      <div> 
        <h1>Attestation</h1>
        <div><b>Attest the following immunizations:</b></div> 
        <div>
            {props.attestations.map( (attestation, index) => 
               <AttestItem key={index} attestation={attestation} onAttest={props.onAttest} />)}
        </div>
      </div>
    );
   
}

export default AttestList;