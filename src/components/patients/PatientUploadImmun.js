import React from 'react';   
import Header from '../Header'
import { IMMUN_FILENAME_PREFIX, IMMUN_INDEX_FILE } from '../../constants'

const uuidv4 = require('uuid/v4');

class PatientUploadImmun extends React.Component { 

    state = {
        dateAdmin: new Date(),
        immunIndex: [],
        isLoading: false
    }

    componentDidMount() {
        const { userSession } = this.props
    
        if (userSession.isUserSignedIn()) {
          const user = userSession.loadUserData()
          this.setState({ user })
        } 

        this.fetchImmunizationData()
    }

    fetchImmunizationData = () => {
        this.setState({ isLoading: true })
        const options = { decrypt: false }  
        const { userSession } = this.props 
        userSession.getFile(IMMUN_INDEX_FILE, options)
          .then( (file) => { 
            const immunizations = JSON.parse( file || '[]') 
            this.setState({...this.state, immunizations})
          })
          .catch(err => {
            console.log("Could not fetch immunization data:\n", err)
          })  
          .finally(() => {
            this.setState({ isLoading: false })
          })
    }

    onDateAdminChange = date => this.setState({ dateAdmin: date })
 
    submitImmunization = async (event) => {
        event.preventDefault();
        const description = event.target.elements.description.value;
        const dateAdmin = this.state.dateAdmin;
        const adminBy = event.target.elements.adminBy.value;
        const location = event.target.elements.location.value;
        const file = event.target.elements.file.value;
        const id = uuidv4();  
        //console.log("[PatientUploadImmun] submitImmunization post:", post);
        if (description && dateAdmin && adminBy && location) {
            //this.props.onInputImmun(post);
            const input = {
                id: id,
                description: description,
                dateAdmin: dateAdmin,
                adminBy: adminBy,
                location: location,
                file: file  
            }
            await this.saveNewUnAttestedImmun(input)
        } 
    }

    saveNewUnAttestedImmun = async (data) => { 
         
        const immunIndex = {
            id: data.id,
            description: data.description
        }
        const { userSession } = this.props
        const options = { encrypt: false }  

        console.log("----- saveNewUnAttestedImmun all immunizations -----")
        console.log("Index Filename: ", IMMUN_INDEX_FILE)
        console.log(JSON.stringify([...this.state.immunIndex, immunIndex]))


        const file = IMMUN_FILENAME_PREFIX + data.id + ".json"

        console.log("----- saveNewUnAttestedImmun immunization post -----") 
        console.log("Filename: ", file)
        console.log(JSON.stringify(data)) 
         
        await userSession.putFile(IMMUN_INDEX_FILE, JSON.stringify([...this.state.immunIndex, immunIndex]), options)
        await userSession.putFile(file, JSON.stringify(data), options)
    }

    render () { 
        const { onHistory } = this.props; 
        const { userSession } = this.props  
        return (
            <Header userSession={userSession}>
            <div className="container">
                <div className="d-flex flex-row justify-content-start">
                    <div className="heading m-4">
                        Patient Immunization Input 
                    </div>
                </div> 
                <div className="d-flex flex-row justify-content-start">
                    <div >
                        <form onSubmit={this.submitImmunization}>
                            <div className="form-group m-4">
                                <label htmlFor="name">Description</label>
                                <input className="form-control" type="text" id="description" placeholder="Name of immunization"/>
                            </div>
                            <div className="form-group m-4">
                                <label htmlFor="dateAdmin">Date administered</label>
                                <input className="form-control" type="text" id="dateAdmin" placeholder="yyyy-mm-dd"/>
                            </div>
                            <div className="form-group m-4">
                                <label htmlFor="adminBy">Administered by</label>                               
                                <input className="form-control" type="text" id="adminBy" placeholder="Name of person"/>
                            </div>
                            <div className="form-group m-4">
                                <label htmlFor="location">Location</label>
                                <input className="form-control" type="text" id="location" placeholder="Company and address"/>
                            </div>
                            <div className="form-group m-4 ">
                                <label htmlFor="file">Upload attestation file</label>
                                <input className="form-control-file btn  " type="file" id="file" />
                                <small className="form-text text-muted" id="helpFile">Upload image file for attestation approval</small>
                            </div>
                            <button type="submit" className="btn btn-success m-4">Save</button> 
                            <button type="submit" className="btn btn-success m-4" onClick = {() => { 
                                    onHistory.push(`/Patient/${this.state.user.username}`);
                                }}>Cancel</button> 
                        </form>
                        
                    </div>
                </div>
            </div>

            </Header>
           
        );
    } 
}

export default PatientUploadImmun;
