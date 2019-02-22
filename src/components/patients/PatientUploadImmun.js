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
            const immunIndex = JSON.parse( file || '[]') 
            this.setState({...this.state, immunIndex})
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
       
        const id = uuidv4();  
        
        if (description && dateAdmin && adminBy && location) { 
            const input = {
                id: id,
                description: description,
                dateAdmin: dateAdmin,
                adminBy: adminBy,
                location: location 
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
        console.log(this.state.immunIndex)
        console.log(JSON.stringify([...this.state.immunIndex, immunIndex]))


        const file = IMMUN_FILENAME_PREFIX + data.id + ".json"

        console.log("----- saveNewUnAttestedImmun immunization post -----") 
        console.log("Filename: ", file)
        console.log(JSON.stringify(data)) 
         
        await userSession.putFile(IMMUN_INDEX_FILE, JSON.stringify([...this.state.immunIndex, immunIndex]), options)
        await userSession.putFile(file, JSON.stringify(data), options)

        this.props.onHistory.push(`/RecordsList/${this.state.user.username}`)

    }

    render () { 
        const { onHistory } = this.props; 
        const { userSession } = this.props  
        return ( 
        <section className="container">
            <div>
                <div className="col-2"></div> 
                <div className="col-8 d-flex flex-row justify-content-start">  
                    <Header label="Patient Immunization Input"  userSession={userSession}/>
                </div>
                <div className="col-2"></div> 
            </div> 
            <div className="container"> 
                <div className="col-2"></div> 
                <div className="col-8">  
                    <div className="d-flex flex-row justify-content-start">
                   
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
                            
                            <button type="submit" className="btn btn-success m-4">Save</button> 
                            <button type="submit" className="btn btn-success m-4" onClick = {() => { 
                                    onHistory.push(`/Patient/${this.state.user.username}`);
                                }}>Cancel</button> 
                        </form>
                        
                    </div>
                    <div className="col-2"></div> 
                </div>
            </div>

        </section>
           
        );
    } 
}

export default PatientUploadImmun;
