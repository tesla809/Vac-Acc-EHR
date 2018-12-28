import React from 'react'; 
import { Link } from 'react-router-dom';

function AttestRecordItem(props) {
    const parentid = props.parentid; 
    const id = props.patientAttestation.id; 
    const str = `/AttestRecord/${parentid}/${id}`;
    return ( 
      <div> 
       <Link to={str}>{props.patientAttestation.description}</Link> 
      </div>


    );
   
}

export default AttestRecordItem;