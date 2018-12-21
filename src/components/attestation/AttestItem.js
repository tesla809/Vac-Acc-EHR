import React from 'react'; 
import { Link } from 'react-router-dom';

function AttestItem(props) {
    const id = props.attestation.id; 
    const str = `/Attest/${id}`;
    return (

      <div> 
       <Link to={str}>{props.attestation.name}</Link> 
      </div>


    );
   
}

export default AttestItem;