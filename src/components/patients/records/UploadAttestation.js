import React from 'react';    
import FileReaderInput from 'react-file-reader-input'; 
import Header from '../../Header'
import {  ATTEST_INDEX_FILE } from '../../../constants'
import ipfs from '../../../ipfs';

const uuidv4 = require('uuid/v4'); 

class UploadAttestation extends React.Component { 
    state = { 
        attestIndex: [],  
        immunId: "",
        user: {},
        isLoading: false,
        fileToUpload: "",
        ipfsHash: "",
        imageBuffer: null,
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
        if (this.state.imageBuffer == null) {
            console.log("ERROR: no file has been selected.")
            return;
        }

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
        
        this.setState({ isLoading: true})  
         
        const attestIndex = {
            id: data.id,
            immunId: data.immunId,
            description: data.description,
            fileName: this.state.fileToUpload,
            ipfsHash: '', 
            attestedBy: '',
            attestedOn: ''
        }
  
        const { userSession } = this.props
        const options = { encrypt: false }    
       
        // console.log("----- saveNewAttestation -----")
 
        // console.log("Index Filename: ", ATTEST_INDEX_FILE)
        // console.log(attestIndex)
        // console.log(JSON.stringify([...this.state.attestIndex, attestIndex])) 

        // const file = ATTEST_FILENAME_PREFIX + data.id + ".json" 
        // console.log("----- saveNewAttestation  -----") 
        // console.log("Filename: ", file)  
        // console.log("Image Buffer: ", this.state.imageBuffer);

        await ipfs.files.add(this.state.imageBuffer, (error, result) => {
            if(error) {
                console.error(error);
                return
            }  
            attestIndex.ipfsHash = result[0].hash; 
            userSession.putFile(ATTEST_INDEX_FILE, JSON.stringify([...this.state.attestIndex, attestIndex]), options)
            // await userSession.putFile(file, this.state.imageBuffer, options)  
        })

        this.setState({imageBuffer: null, fileToUpload: "" }) 
        this.props.onHistory.push(`/Record/${this.state.immunId}`)
    }
  

    handleChange = (e, results) => { 
        results.forEach(result => {
            const [e, file] = result; 
            const reader = new window.FileReader();
            reader.readAsArrayBuffer(file);
            reader.onloadend = () => {
                this.setState({imageBuffer: Buffer(reader.result), fileToUpload: file.name  });  
            }
            return; 
        }); 
    }

    render () { 
        const { onHistory } = this.props; 
        const { userSession } = this.props  
        return (
            <Header label="Upload Attestation Image File" userSession={userSession}>
                <div className="container"> 
                    <div className="d-flex flex-row justify-content-start"> 
                        <form onSubmit={this.submitAttestation}>
                            <div className="form-group m-4">
                                <label htmlFor="name">Description</label>
                                <input className="form-control" type="text" id="description" placeholder="Name of immunization"/>
                            </div>   
                            <div className="form-group m-4 ">
                                <label htmlFor="file">Upload attestation file</label>  
                                
                                <FileReaderInput as="binary" id="file"
                                        onChange={this.handleChange}>
                                    <button>Select a file!</button>
                                </FileReaderInput>

                                <label htmlFor="fileToUpload">File To Upload:</label>
                                <div>{this.state.fileToUpload}</div>
                                 
                            </div>
                            <button type="submit" className="btn btn-success m-4">Save</button> 
                            <button type="submit" className="btn btn-success m-4" onClick = {() => { 
                                    onHistory.push(`/Record/${this.state.immunId}`);
                                }}>Cancel</button> 
                        </form> 
                        
                    </div>
                </div> 
            </Header> 
        );
    } 
}

export default UploadAttestation;
