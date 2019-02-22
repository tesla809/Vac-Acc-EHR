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
    }
   
    this.fetchImmunizationData()
  }

  fetchImmunizationData = () => { 
    const username = this.props.username
    console.log("   USERNAME: ", username);  
    const options = { decrypt: false, username: username}   
    this.setState({ isLoading: true }) 

    const { userSession } = this.props 
    userSession.getFile(IMMUN_INDEX_FILE, options)
      .then( (data) => { 
        const immunizations = JSON.parse( data || '[]')  
        this.setState({...this.state, immunizations})
      })
      .catch(err => {
        console.err("Could not fetch immunization data:\n", err)
      })  
      .finally(() => {
        this.setState({ isLoading: false })
      })
  }
  
  render() {
    const { immunizations } = this.state;
    const { userSession, username } = this.props ; 
    return (
       <section className="container">
        <div>
          <div className="col-2"></div> 
          <div className="col-8">  
            <Header label="Patient Immunization List" userSession={userSession}/>
          </div>
          <div className="col-2"></div> 
        </div>
        
        <div>
          <div className="col-2"></div>
          <div className="col-8">   
                { immunizations === 'undefined' ? <div>NO RECORD</div>:
                  immunizations.map( (immunIndex, index) => 
                    <RecordItem key={index} immunIndex={immunIndex} userSession={userSession}/>)}
          </div>
          <div className="col-2"></div>
        </div> 
        <div>
          <div className="col-2"></div>
          <div className="col-8">    
            <button className="btn btn-success m-4" onClick = {() => { 
              this.props.onHistory.push(`/Patient/${username}`);
            }}> Back </button> 
          </div>
          <div className="col-2"></div>
        </div> 
      </section>
    ); 
  }
}
  

export default RecordsList;