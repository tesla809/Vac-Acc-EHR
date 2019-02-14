import React from 'react';   
import Header from '../../Header'
import { ATTEST_FILENAME_PREFIX, ATTEST_INDEX_FILE, IMMUN_FILENAME_PREFIX } from '../../../constants'

const uuidv4 = require('uuid/v4');

class UploadAttestation extends React.Component { 

    state = { 
        attestIndex: [],  
        immunId: "",
        user: {},
        isLoading: false
    }

    componentDidMount() {
        const { userSession } = this.props
    
        if (userSession.isUserSignedIn()) {
          const user = userSession.loadUserData()
          this.setState({ user })
        }  
        const {match} = this.props; 
        const immunId = match.params.immunId 
        this.setState({ immunId })
    }
  
    submitAttestation = async (event) => {
        event.preventDefault();
        const description = event.target.elements.description.value; 
        const filePath = event.target.elements.file.value;
        const id = uuidv4();  
        const immunId = this.state.immunId 

        if (description && filePath) {
            
            const input = {
                id: id,
                immunId: immunId,
                description: description, 
                file: filePath  
            }
            await this.saveNewAttestation(input)
        } 
    }

    saveNewAttestation = async (data) => { 
         
        const attestIndex = {
            id: data.id,
            immunId: data.immunId,
            description: data.description,
            file: data.file  
        }
        const { userSession } = this.props
        const options = { encrypt: false }  
        

        console.log("----- saveNewAttestation -----")
 
        console.log("Index Filename: ", ATTEST_INDEX_FILE)
        console.log(attestIndex)
        console.log(JSON.stringify([...this.state.attestIndex, attestIndex]))


        const file = ATTEST_FILENAME_PREFIX + data.id + ".json"

        console.log("----- saveNewAttestation  -----") 
        console.log("Filename: ", file)
        console.log("Data:\n", JSON.stringify(data)) 
         
        // await userSession.putFile(ATTEST_FILENAME_PREFIX, JSON.stringify([...this.state.attestIndex, attestIndex]), options)
        // await userSession.putFile(file, JSON.stringify(data), options)

        this.props.onHistory.push(`/Record/${this.state.immunId}`)
    }

    render () { 
        const { onHistory } = this.props; 
        const { userSession } = this.props  
        return (
            <Header userSession={userSession}>
                <div className="container">
                    <div className="d-flex flex-row justify-content-start">
                        <div className="heading m-4">
                            Upload Attestation Image File 
                        </div>
                    </div> 
                    <div className="d-flex flex-row justify-content-start">
                        <div >
                            <form onSubmit={this.submitAttestation}>
                                <div className="form-group m-4">
                                    <label htmlFor="name">Description</label>
                                    <input className="form-control" type="text" id="description" placeholder="Name of immunization"/>
                                </div>   
                                <div className="form-group m-4 ">
                                    <label htmlFor="file">Upload attestation file</label>
                                    <input className="form-control-file btn  " type="file" id="file" />
                                    <small className="form-text text-muted" id="helpFile">Upload image file for attestation approval</small>
                                </div>
                                <button type="submit" className="btn btn-success m-4">Save</button> 
                                <button type="submit" className="btn btn-success m-4" onClick = {() => { 
                                        onHistory.push(`/Record/${this.state.immunId}`);
                                    }}>Cancel</button> 
                            </form>
                                
                        </div>
                    </div>
                </div>

            </Header>
           
        );
    } 
}

export default UploadAttestation;
