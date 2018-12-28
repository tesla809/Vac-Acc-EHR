import React from 'react';  
import { Link } from 'react-router-dom';

class Record extends React.Component { 
    
    
    render () { 
        const {match, immunizations, onHistory} = this.props;
        console.log("[Record] match:", match);
        const id = match.params.id; 
        console.log("[Record] match.params.id:", match.params.id);
        
        const str = `/AttestRecordsList/${id}`;

        const immunization = immunizations.find( (immunization) => immunization.id === Number(id));
        console.log("[Record] immunization:", immunization);
        return ( 
            <div className="container"> 
               
                  <div className="col-12 p-2">{immunization.description}</div>
                   
                    <div className="col-2"></div>
                    <div className="col-8">   

                            <div>Date Administered:{immunization.dateadmin}</div>  
                            <div>Administered By:{immunization.adminby}</div>  
                            <div>Location: {immunization.location}</div>
                            <div><Link to={str}> Attestations </Link></div>
                            
                    </div>  
                    <button className="btn btn-success m-4" onClick = {() => {    
                            onHistory.push('/RecordsList');
                        }}> Back </button>
                    
            </div> 
        );
    }
}

export default Record;
