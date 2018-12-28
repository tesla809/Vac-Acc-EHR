import React from 'react'; 
import { Link } from 'react-router-dom';

function Patient(props) { 
  const { onHistory } = props;
  return (
    <section className="container">
      <div className="heading col-12 p-4">
        Patient Options
      </div>
      <div>
        <div className="col-2"></div>
        <div className="col-8">   
            <div className="m-2"><Link to="/RecordsList"> View Records </Link></div>
            <div className="m-2"><Link to="/PatientUploadImmun"> Input Immunization </Link></div>
            <div className="m-2"><Link to="/PatientConfig"> Settings </Link></div>  
        </div>
      </div>
      <button type="submit" className="btn btn-success m-4" onClick = {() => { 
        onHistory.push('/');
      }}> Back </button> 
    </section>
  ); 
}

export default Patient;