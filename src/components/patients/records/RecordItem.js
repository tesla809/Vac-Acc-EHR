import React from 'react'; 
import { Link } from 'react-router-dom';

function RecordItem(props) {
    const id = props.immunization.id; 
    const str = `/Record/${id}`;
    return ( 
      <div> 
       <Link to={str}>{props.immunization.description}</Link> 
      </div>


    );
   
}

export default RecordItem;