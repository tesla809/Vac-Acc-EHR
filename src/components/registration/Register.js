import React, { Component } from 'react';

class Register extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const license = event.target.elements.license.value;
        const post = {
            id: Number(new Date()),
            name: name,
            license: license,
        }
        if (name && license) {
            this.props.onRegister(post);
        }

    }

    render() {
        return (
            <div>
                <div className="col-8 p-4">
                    Vaccine Administrator Registration 
                </div> 
                <div className="row">
                    <div className="col-sm-9">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group m-4">
                                <label for="name">Vaccine Admin Name</label>
                                <input className="form-control" type="text" id="name" placeholder="Enter your name"/>
                            </div>

                            <div className="form-group m-4">
                                <label for="license">License No.</label>
                                <input className="form-control" type="text" id="name" placeholder="Enter your license no."/>
                            </div>
                        </form>

                        <button type="submit" className="btn btn-success m-4">Submit</button> 
                        <button type="submit" className="btn btn-success m-4" onClick = {() => { 
                            this.props.onHistory.push('/VacAdmin');
                        }}> Cancel </button> 
                    </div>
                </div>
            </div>
        
        )
    }
}

export default Register;