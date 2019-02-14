import React, { Component } from 'react'
  
class Login extends Component { 

  signIn = (e) => {
    const { userSession } = this.props 
    e.preventDefault()
    userSession.redirectToSignIn()  
  }

  render() {
    console.log("--- Login.js render() ----")
    return (
        <div>
            <button type="submit" className="btn btn-success m-4" onClick = {this.signIn}> Sign In with Blockstack </button> 
        </div>
    );
  }
}

export default Login
