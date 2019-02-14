import React from 'react';  
import { Link } from 'react-router-dom';
import { IMMUN_FILENAME_PREFIX } from '../../../constants'
import AttestRecordsList from './AttestRecordsList'

class Record extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
          immunization: {}, 
          user: {},
          isLoading: false
        }
    }

    componentDidMount() { 
      const { userSession } = this.props 
      if (userSession.isUserSignedIn()) {
        const user = userSession.loadUserData()
        this.setState({ user })
        console.log("---[Record] user is signed in:", user.username)
      }
      
      const {match} = this.props;
      const id = match.params.id
      console.log("++++++[Record] immun index id: ", id)
      
      this.fetchImmunizationData(id)
    }
    
    fetchImmunizationData = async (id) => {

        console.log(" ------ [Record]  start fetching immunization data")

        const { user} = this.state
        console.log("    USERNAME:  ", user.username )

        const { userSession } = this.props 

        const options = { decrypt: false, username: user.username}

        const fileName = IMMUN_FILENAME_PREFIX + id + ".json"
     
        console.log("Filename: ", fileName)
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
        const {match, onHistory} = this.props;
        const { immunization, user } = this.state;
        console.log("[Record] match:", match);
        const id = match.params.id; 
        console.log("[Record] match.params.id:", match.params.id);
        
        const str = `/AttestRecordsList/${id}`;
 
        console.log("[Record] render() user.username:", user.username)
        console.log("[Record] render() immunization:", immunization);
        return ( 
            <div className="container"> 
               
                  <div className="heading col-12 p-2">{immunization.description}</div>
                   
                    <div className="col-2"></div>
                    <div className="col-8">   

                            <div>Date Administered:{immunization.dateAdmin}</div>  
                            <div>Administered By:{immunization.adminBy}</div>  
                            <div>Location: {immunization.location}</div>
                            <hr/>
                            <AttestRecordsList userSession={this.props.userSession} immunId={immunization.id}/>
                           
                            
                    </div>  
                    <button className="btn btn-success m-4" onClick = {() => {    
                            onHistory.push('/UploadAttestation/' + immunization.id);
                        }}> Add Attestation </button>
                    
                    <button className="btn btn-success m-4" onClick = {() => {    
                            onHistory.push('/RecordsList/' + user.username);
                        }}> Back </button>
                    
            </div> 
        );
    }
}

export default Record;
