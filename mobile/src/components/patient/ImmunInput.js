import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, Text, TextInput, Button} from 'react-native';

import ViewSection from '../ViewSection';

import { input } from '../../appStyles';

class ImmunInput extends Component {
  state = {
    description: '',
    adminDate: '',
    adminBy: '',
    location: ''
  }; 

  onSubmit = () => {
    // if (this.state.description.trim() === "") {
    //   return;
    // }

    this.props.onUpdateSubmit({
      description: this.state.description,
      adminDate: this.state.adminDate,
      adminBy: this.state.adminBy,
      location: this.state.location 
    });

    this.setState({
      description: '',
      adminDate: '',
      adminBy: '',
      location: ''
    })
  };

  render() {
    return (
      <ScrollView>
        
        <KeyboardAvoidingView style={input.container} behavior="padding" enabled>
          <ViewSection>
            <Text style={input.label}>Description:</Text>
            <TextInput
              placeholder="Immunization event description ..."
              value={this.state.description}
              onChangeText={ text => this.setState({text}) } 
              style={input.field}
            />
          </ViewSection>

          <ViewSection >
            <Text style={input.label}>Date:</Text>
            <TextInput
              placeholder="Date administered ..."
              value={this.state.adminDate}
              onChangeText={ text => this.setState({text}) }
              style={input.field}
            />
          </ViewSection>


          <ViewSection>
            <Text style={input.label}>Administered By:</Text>
            <TextInput
              placeholder="Administering person ..."
              value={this.state.adminBy}
              onChangeText={ text => this.setState({text}) }
              style={input.field} 
            />
          </ViewSection>

          <ViewSection >
            <Text style={input.label}>Location:</Text>
            <TextInput
              placeholder="Where was administered ..."
              value={this.state.location}
              onChangeText={ text => this.setState({text}) } 
              style={input.field}
            />
          </ViewSection>

          <ViewSection>
            <Button
              title="Add" 
              onPress={this.onSubmit}
              style={input.button}
            /> 
          </ViewSection>
        
        </KeyboardAvoidingView>
      
      </ScrollView>
    );
  }
}

export default ImmunInput;