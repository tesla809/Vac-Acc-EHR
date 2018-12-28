import React from 'react'; 
import { Link } from 'react-router-dom';

function Login(props)  { 
    return (
      <div className="container">
        <div className="col-8 p-4 ">
            Sign-in as
        </div>
        <div>
          <div className="col-2"></div>
          <div className="col-8">   
              <div className="m-2"><Link to="/VacAdmin"> uport as doctor </Link></div>
              <div className="m-2"><Link to="/Patient"> uport as patient </Link></div> 
          </div>
        </div>
      </div> 
    );
  
}

export default Login;
