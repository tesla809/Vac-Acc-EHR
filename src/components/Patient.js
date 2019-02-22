import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
import Header from './Header'

class Patient extends Component { 
  state = { user: {}}
  componentWillMount() { 
    const { userSession } = this.props 
    if (userSession.isUserSignedIn()) {
      const user = userSession.loadUserData()
      this.setState({ user }) 
    } 
  }

  render() { 
    const { userSession } = this.props 
    const { user } = this.state 
    return (  
       <section className="container">
        <div>
          <div className="col-2"></div> 
          <div className="col-8">   
            <Header label="Patient Menu" userSession={userSession} />  
          </div> 
          <div className="col-2"></div> 
        </div>
        <div>
          <div className="col-2"></div>
          <div className="col-8">   
              <div className="m-2"><Link to={`/RecordsList/${user.username}`}> View Records </Link></div>
              <div className="m-2"><Link to={`/PatientUploadImmun/${user.username}`}> Input Immunization </Link></div>
              <div className="m-2"><Link to={`/PatientConfig/${user.username}`}> Settings </Link></div>  
          </div>
          <div className="col-2"></div> 
        </div>  
      </section> 
    ); 
  } 
}

export default Patient;