import React from 'react'; 
import { Link } from 'react-router-dom';

function VacAdmin(props) { 
    return (
      <div> 
        <Link to="/Register"> Register </Link>
        <Link to="/AttestList"> Attest </Link>
      </div>
    );
   
}

export default VacAdmin;
