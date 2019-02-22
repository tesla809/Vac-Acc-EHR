import React from 'react';  
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

  componentWillMount() {
    const { userSession } = this.props 
    if (userSession.isUserSignedIn()) {
      const user = userSession.loadUserData()
      this.setState({ user }) 
    }
  }
  componentDidMount() {
    this.fetchAttestedData()
  }
 
  fetchAttestedData = async () => { 
    this.setState({ isLoading: true }) 
    const { userSession } = this.props 

    try {  
      const { user }  = this.state 
      const options = { decrypt: false, username: user.username} 

      const file  = await userSession.getFile(ATTEST_INDEX_FILE, options)
      const patientAttestations = await JSON.parse( file || '[]')  
      
      this.setState({...this.state, patientAttestations})
    } catch (err) {
      console.log("Could not fetch attestation data:\n", err)
    } finally {
      this.setState({ isLoading: false })
    } 
  }

  render() {   
    
    const { patientAttestations } = this.state;   
    return ( 
          <div>  
              <div className="heading p-4">Attestations</div> 
              { patientAttestations.length === 0 ?
                <div> None </div>
                :
                <div>
                { patientAttestations.map( (patientAttestation, index) => 
                   <AttestRecordItem key={index} patientAttestation={patientAttestation} />)}
              </div> 
              } 
          </div> 
    ); 
  }  
}

export default AttestRecordsList;