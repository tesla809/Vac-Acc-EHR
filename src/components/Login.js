import React, { Component } from 'react'; 


class Login extends Component  { 

    render () { 
      
      return (
          <div>
            <button type="submit" className="btn btn-success m-4" onClick = {this.handleSignIn}> Sign In with Blockstack </button> 
          </div>
      );
    } 

    handleSignIn = (e) => {  
      const { userSession } = this.props 
      e.preventDefault()
      userSession.redirectToSignIn()  
    }
}

export default Login;
 