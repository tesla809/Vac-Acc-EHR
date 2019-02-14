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
        username: "",
    }   
  }

  componentDidMount = async () => {
    const { userSession } = this.state 
   
    if(!userSession.isUserSignedIn() && userSession.isSignInPending()) {
      const userData = await userSession.handlePendingSignIn()

      if (!userData.username) {
        throw new Error('This app requires a username.')
      }
       
      console.log("++++++ Apps userData.username +++++")
      console.log(userData.username)

      this.setState({ username: userData.username })

      if (this.state.userRole === "admin") {
        this.setState({userRole: "admin"})
        window.location =   `/VacAdmin/${userData.username}`
      } else {
        this.setState({userRole: "patient"})
        window.location = `/Patient/${userData.username}`
      } 
    }
  }

  render() { 
    console.log("--- App.js render() ---")
    console.log("Username: ", this.state.username)
    
    const { userSession } = this.state;
    console.log("    IsUserSignedIn:", userSession.isUserSignedIn(),  " username:");

    return (
       <div className="App">
          {userSession.isUserSignedIn() ?
            <Routes userSession={userSession} username={this.state.username}/>
          :
            <Login userSession={userSession} />
          }
      </div>
    );
  }
}
 
export default App;
