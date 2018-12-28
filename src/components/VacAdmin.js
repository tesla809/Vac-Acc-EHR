import React from 'react'; 
import { Link } from 'react-router-dom';

function VacAdmin(props) { 
    const { onHistory } = props;
    return (
      <section className="container">
        <div className="col-12 p-1">
          Vaccine Admin Options
        </div>
        <div>
          <div className="col-2"></div>
          <div className="col-8">   
              <div className="m-2"><Link to="/Register"> Register </Link></div>
              <div className="m-2"><Link to="/AttestList"> Attest </Link></div> 
          </div>
        </div>
        <button type="submit" className="btn btn-success m-4" onClick = {() => { 
          onHistory.push('/');
        }}> Back </button> 
      </section>
    );
   
}

export default VacAdmin;
