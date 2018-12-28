import React from 'react'; 
import RecordItem from './RecordItem';

function RecordsList(props) { 
    return (
      <div className="container">
        <div className="heading col-12 p-1">
            Patient Immunization List
        </div>
        <div>
          <div className="col-2"></div>
          <div className="col-8">   
                {props.immunizations.map( (immunization, index) => 
                    <RecordItem key={index} immunization={immunization}   />)}
          </div>
        </div>  
        <button className="btn btn-success m-4" onClick = {() => { 
            props.onHistory.push('/Patient');
        }}> Back </button>
      </div>
    );
   
}

export default RecordsList;