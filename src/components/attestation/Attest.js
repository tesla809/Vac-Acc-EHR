import React from 'react';  

function Attest(props) { 
    const {match, attestations} = props;
    const id = match.params.id; 
    const attestation = attestations.find( (attestation) => attestation.id === Number(id));
 
    return ( 
      <div> 
        <div><img src="doc1.jpg" alt="attestation 1" height="150" width="150"/></div>
        <div>{attestation.id}</div>  
        <div>{attestation.name}</div> 
        
        <button onClick = {() => {
            props.onAttest(attestation);
            props.onHistory.push('/AttestList');
        }}> Attest Now </button>
      </div> 
    );
   
}

export default Attest;
