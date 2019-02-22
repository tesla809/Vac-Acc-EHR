import React from 'react'; 
import { Link } from 'react-router-dom';

function RecordItem(props) {
    const immunId = props.immunIndex.id; 
    const str = `/Record/${immunId}`;
    return ( 
      <div> 
        <Link to={str}>{props.immunIndex.description}</Link> 
      </div> 
    ); 
}

export default RecordItem;