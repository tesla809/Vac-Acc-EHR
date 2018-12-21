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
                <h1> Vaccine Administrator Registration </h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Name" name="name"/>
                        <input type="text" placeholder="License No." name="license"/>
                        <button> Save </button>                        
                    </form>
                </div>
            </div>
        
        )
    }
}

export default Register;