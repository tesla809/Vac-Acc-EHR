import React from 'react';  

class PatientUploadImmun extends React.Component { 

    submitImmunization(event) {
        event.preventDefault();
        const description = event.target.elements.description.value;
        const dateAdmin = event.target.elements.dateAdmin.value;
        const adminBy = event.target.elements.adminBy.value;
        const location = event.target.elements.location.value;
        const file = event.target.elements.file.value;
        const post = {
            id: Number(new Date()),
            description,
            dateAdmin,
            adminBy,
            location,
            file
        }

        console.log("[PatientUploadImmun] submitImmunization post:", post);
        if (description && dateAdmin && adminBy && location) {
            //this.props.onInputImmun(post);
            // Save post here
        }

    }
    render () { 
        const { onHistory } = this.props;
        
        return (
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
                                <label for="name">Description</label>
                                <input className="form-control" type="text" id="description" placeholder="Name of immunization"/>
                            </div>
                            <div className="form-group m-4">
                                <label for="dateAdmin">Date administered</label>
                                <input className="form-control" type="text" id="dateAdmin" placeholder="yyyy-mm-dd"/>
                            </div>
                            <div className="form-group m-4">
                                <label for="adminBy">Administered by</label>
                                <input className="form-control" type="text" id="adminBy" placeholder="Name of person"/>
                            </div>
                            <div className="form-group m-4">
                                <label for="location">Location</label>
                                <input className="form-control" type="text" id="location" placeholder="Company and address"/>
                            </div>
                            <div className="form-group m-4 ">
                                <label for="file">Upload attestation file</label>
                                <input className="form-control-file btn  " type="file" id="file" />
                                <small className="form-text text-muted" id="helpFile">Upload image file for attestation approval</small>
                            </div>
                            <button type="submit" className="btn btn-success m-4">Save</button> 
                            <button type="submit" className="btn btn-success m-4" onClick = {() => { 
                                    onHistory.push('/Patient');
                                }}>Cancel</button> 
                        </form>
                        
                    </div>
                </div>
            </div>
        );
    } 
}

export default PatientUploadImmun;
