import React from 'react';  
import { IMMUN_FILENAME_PREFIX } from '../../../constants'
import AttestRecordsList from './AttestRecordsList'
import Header from '../../Header';

class Record extends React.Component { 
  constructor(props) {
      super(props)
      this.state = {
        immunId: "",
        immunization: {}, 
        user: {},
        isLoading: false
      }
  }
  componentWillMount() {  
    const { userSession } = this.props 
    if (userSession.isUserSignedIn()) {
      const user = userSession.loadUserData()
      this.setState({ user }) 
    }
    
    const {match} = this.props;
    const immunId = match.params.immunId
    
    this.setState({ immunId })
    this.fetchImmunizationData(immunId)
  }
    
  fetchImmunizationData = async (id) => {

      const { user} = this.state 
      const { userSession } = this.props  
      const options = { decrypt: false, username: user.username} 
      const fileName = IMMUN_FILENAME_PREFIX + id + ".json"
    
      try {
        
        const file  = await userSession.getFile(fileName, options)
        const immunization = JSON.parse( file || '[]')
      
        this.setState({...this.state, immunization})
      } catch (err) {
        console.log("Could not fetch immunization data:\n", err)
      } finally {
        this.setState({ isLoading: false })
      }  
  } 
      
  render () { 
    const {onHistory} = this.props;
    const { immunization, user } = this.state;  
    const { userSession } = this.props ; 
    return ( 
      <section className="container">
        <div>
          <div className="col-2"></div> 
          <div className="col-8 d-flex flex-row justify-content-center">  
            <Header label="Patient Immunization" userSession={userSession}/>
          </div>
          <div className="col-2"></div> 
        </div> 
        <div>
          <div className="col-2"></div> 
          <div className="col-8 d-flex flex-row justify-content-start">  
            <div className="heading col-12 p-2">{immunization.description}</div>
          </div>
          <div className="col-2"></div> 
        </div>
        <div>
            <div className="col-2"></div>
            <div className="col-8 flex-row justify-content-start"> 
              <section className="row justify-content-start">
                <div><b>Date Administered:</b> &nbsp;{immunization.dateAdmin}</div>  
              </section>   
              <section className="row justify-content-start">      
                    <div><b>Administered By:</b> &nbsp;{immunization.adminBy}</div> 
              </section> 
              <section className="row justify-content-start">        
                    <div><b>Location:</b> &nbsp;{immunization.location}</div>  
              </section> 
            </div>  
          <div className="col-2"></div>      
        </div>
        <div>
            <div className="col-2"></div>
            <div className="col-8 ">     
                    <AttestRecordsList userSession={this.props.userSession} immunId={immunization.id}/> 
            </div>  
          <div className="col-2"></div>      
        </div>
        <div>
          <div className="col-2"></div>
          <div className="col-8 d-flex flex-row justify-content-center">  
            <button className="btn btn-success m-4" onClick = {() => {    
                    onHistory.push('/UploadAttestation/' + immunization.id);
                }}> Add Attestation </button>
              
            <button className="btn btn-success m-4" onClick = {() => {    
                    onHistory.push('/RecordsList/' + user.username);
                }}> Back </button> 
        </div> 
        <div className="col-2"></div>      
        </div>
      </section>
    );
  }
}

export default Record;
