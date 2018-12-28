import React from 'react';  

function Attest(props) { 
    const {match, attestations} = props;
    const id = match.params.id; 
    const attestation = attestations.find( (attestation) => attestation.id === Number(id));
 
    return ( 
      <div className="container"> 
        <div className="heading m-4">Attestation Approval</div>
        <div className="m-4">            
          <div>ID: {attestation.id}</div>  
          <div>Description: {attestation.name}</div>  
        </div> 
        <div className="m-4"> 
          <div>Image:</div>     
          <img src="../img/doc1.jpg" alt="" height="150" width="150"/> 
        </div>  
        <div className="m-4">
          <button className="btn btn-success m-4" onClick = {() => {
              props.onAttest(attestation);
              props.onHistory.push('/AttestList');
          }}> Attest Now </button>

          <button className="btn btn-success m-4" onClick = {() => { 
              props.onHistory.push('/AttestList');
          }}> Cancel </button>
        </div>
      </div> 
    );
   
}

export default Attest;
