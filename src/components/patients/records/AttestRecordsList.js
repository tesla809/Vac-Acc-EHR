import React from 'react'; 
import { getFile } from 'blockstack'
import { ATTEST_INDEX_FILE } from '../../../constants'
import AttestRecordItem from './AttestRecordItem';

class AttestRecordsList extends React.Component {   

  constructor(props) {
    super(props)
    this.state = {
      patientAttestations: [],
      immunId: "",
      user: {},
      isLoading: false
    }
  }

  componentDidMount() {
    this.fetchAttestedData()
  }
 
  fetchAttestedData = async () => {
    
    const { userSession } = this.props 
    if (userSession.isUserSignedIn()) {
      const user = userSession.loadUserData()
      this.setState({ user })
      console.log("---[AttestRecordsList] user is signed in:", user.username)
    }

    this.setState({ isLoading: true })
    
    try {
      
      console.log(" ------ [AttestRecordsList]  start fetching attestions data")
      
      const { user }  = this.state
      console.log("   USERNAME: ", user.username); 

      const options = { decrypt: false, username: user.username} 

      const file  = await userSession.getFile(ATTEST_INDEX_FILE, options)
      const patientAttestations = JSON.parse( file || '[]')

      console.log(" ------ [AttestRecordsList]  patientAttestations:\n", patientAttestations)

      this.setState({...this.state, patientAttestations})
    } catch (err) {
      console.log("Could not fetch attestation data:\n", err)
    } finally {
      this.setState({ isLoading: false })
    } 
  }

  render() { 
    const {immunId, onHistory}  = this.props; 
    const { patientAttestations } = this.state;
    
    console.log(" ----- [AttestRecordsList] immun id:", immunId)

    return (
      <div className="container">  
          <div className="heading p-4">Attestations</div> 
          <div>
            { patientAttestations.map( (patientAttestation, index) => 
               <AttestRecordItem key={index} parentid={immunId} patientAttestation={patientAttestation}   />)}
          </div> 
         
        
      </div>
    ); 
  }  
}

export default AttestRecordsList;