import React, { Component } from 'react'

class Header extends Component {

    render() {

        const { label, userSession } = this.props
        const isUserSignedIn = userSession.isUserSignedIn() 
        return (

            <div> 
                <div>{label}</div>
                <div>
                { 
              isUserSignedIn &&  
              <button type="submit" className="btn btn-success m-4" onClick = {this.signOut}> Sign Out </button> 
            }
                </div>   
            
                <div>
                   {this.props.children} 
                </div>
           
            </div>
        )
    } 
    signOut = (e) => { 
        e.preventDefault();
        const { userSession } = this.props
        userSession.signUserOut() 
        window.location = '/'
    } 
}

export default Header