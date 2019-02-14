import React, { Component } from 'react'; 
import { UserSession} from 'blockstack'
import Login from './Login'
import Routes from './Routes'
import { appConfig } from "./constants"

class App extends Component {
  
  constructor() {
    super();
    this.state = {
        userRole: "",
        userSession: new UserSession({ appConfig }),
        user: {}
    }   
  }

  // componentWillMount = async () => {
   
  // }

  componentWillMount = async () => {   
    //const userSession = new UserSession({ appConfig })
    const { userSession } = this.state;
    let user;
    if(!userSession.isUserSignedIn() && userSession.isSignInPending()) {
      user =  await userSession.handlePendingSignIn() 
      if (!user.username) {
        throw new Error('This app requires a username.')
      } 
    
      this.setState({ userSession: userSession , user: user }) 

      console.log("++++++ Apps this.state.user.username +++++")
      console.log(user.username) 

      if (this.state.userRole === "admin") {
        this.setState({userRole: "admin"})
        window.location =   `/VacAdmin/${user.username}`
      } else {
        this.setState({userRole: "patient"})
        window.location = `/Patient/${user.username}`
      }  

    }

    
  }

  render() { 
    console.log("--- App.js render() ---")
    console.log("Username: ", this.state.user.username)
    
    const { userSession } = this.state; 
    console.log("UserSession: ", this.state.userSession)
    return (
       <div className="App">
          {userSession && userSession.isUserSignedIn() ?
            <Routes userSession={userSession} />
          :
            <Login userSession={userSession} />
          }
      </div>
    );
  }
}
 
export default App;
