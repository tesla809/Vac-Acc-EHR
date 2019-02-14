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
    const { onHistory } = this.props;
    // console.log("====== Patient ====") 
    const { userSession } = this.props 
    const { user } = this.state

    // console.log("++++ USERNAME: ", user.username)

    return (  
      <Header userSession={userSession}>
        <section className="container">
          <div className="heading col-12 p-4">
            Patient Options
          </div> 
          <div>
            <div className="col-2"></div>
            <div className="col-8">   
                <div className="m-2"><Link to={`/RecordsList/${user.username}`}> View Records </Link></div>
                <div className="m-2"><Link to={`/PatientUploadImmun/${user.username}`}> Input Immunization </Link></div>
                <div className="m-2"><Link to={`/PatientConfig/${user.username}`}> Settings </Link></div>  
            </div>
          </div>
          <button type="submit" className="btn btn-success m-4" onClick = {() => { 
            onHistory.push('/');
          }}> Back </button> 
        </section>

      </Header>
      
    ); 
  }


  
}

export default Patient;