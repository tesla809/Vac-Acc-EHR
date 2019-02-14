import React, { Component } from 'react'

class Header extends Component {

    render() {

        const { userSession } = this.props
        const isUserSignedIn = userSession.isUserSignedIn()
        console.log("------- Header.js -------")
        return (
            <div>
            
            { 
              isUserSignedIn &&  
              <button type="submit" className="btn btn-success m-4" onClick = {this.signOut}> Sign Out </button> 
            }
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