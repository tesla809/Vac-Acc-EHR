import React from 'react'; 
import AttestItem from './AttestItem';

function AttestList(props) { 
    return (
      <div className="container"> 
        <div className="heading m-4">Attestations For Approval</div>
         
        <div className="m-4">
            {props.attestations.map( (attestation, index) => 
               <AttestItem key={index} attestation={attestation} onAttest={props.onAttest} />)}
        </div>
        
        <button className="btn btn-success m-4" onClick = {() => { 
            props.onHistory.push('/VacAdmin');
        }}> Back </button>
      </div>
    );
   
}

export default AttestList;