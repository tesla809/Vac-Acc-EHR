import React, { Component } from 'react';  
import PropTypes from 'prop-types'
import RecordItem from './RecordItem';
import Header from '../../Header';
import { IMMUN_INDEX_FILE } from '../../../constants'

class RecordsList extends Component { 
  constructor(props) {
    super(props)
    this.state = {
      immunizations: [], 
      isLoading: false
    }
  }
  static propTypes = { 
    userSession: PropTypes.object.isRequired,
    username: PropTypes.string.isRequired, 
  }

  componentDidMount() { 
    const { userSession } = this.props 
    if (userSession.isUserSignedIn()) {
      const user = userSession.loadUserData()
      this.setState({ user })
      console.log("---[RecordsList] user is signed in:", user.username)
    }
   
    this.fetchImmunizationData()
  }

  fetchImmunizationData = () => {
    console.log(" ------ [RecordsList]  start fetching immunization data")
    
    
    const username = this.props.username
    console.log("   USERNAME: ", username); 

    const options = { decrypt: false, username: username}  //"renegmed.id.blockstack" }
     
    this.setState({ isLoading: true })

    

    const { userSession } = this.props 
    userSession.getFile(IMMUN_INDEX_FILE, options)
      .then( (data) => {
        
        const immunizations = JSON.parse( data || '[]')
        //console.log(" ------ [RecordsList]  immunization data:\n", immunizations)

        this.setState({...this.state, immunizations})
      })
      .catch(err => {
        console.log("Could not fetch immunization data:\n", err)
      })  
      .finally(() => {
        this.setState({ isLoading: false })
      })
  }
  
  render() {
    const { immunizations } = this.state;
    const { userSession, username } = this.props ;
    //console.log("---[RecordsList] render", immunizations)
    return (
       <Header userSession={userSession}>
        <div className="container">
          <div className="heading col-12 p-1">
              Patient Immunization List
          </div>
          <div>
            <div className="col-2"></div>
            <div className="col-8">  

                  { immunizations === 'undefined' ? <div>NO RECORD</div>:
                    immunizations.map( (immunIndex, index) => 
                      <RecordItem key={index} immunIndex={immunIndex} userSession={userSession}/>)}
            </div>
          </div>  
          <button className="btn btn-success m-4" onClick = {() => { 
              this.props.onHistory.push(`/Patient/${username}`);
          }}> Back </button>
        </div>
      </Header>
     
    ); 
  }
}
  

export default RecordsList;