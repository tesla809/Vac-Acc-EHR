import React, { Component } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Text, TextInput, Button, StyleSheet } from 'react-native';

import ViewSection from '../ViewSection';

import { input } from '../../appStyles';

class Register extends Component {
  state = {
    name: '',
    license: '' 
  }; 

  onSubmit = () => { 
    this.props.onUpdateSubmit({
      name: this.state.name,
      license: this.state.license 
    });

    this.setState({
      name: '',
      license: '' 
    })
  };

  render() {
    return (
      <ScrollView>
        
        <KeyboardAvoidingView style={input.inputContainer} behavior="padding" enabled>
          <ViewSection>
            <Text style={input.label}>Name:</Text>
            <TextInput
              placeholder="Your name as immunization provider"
              value={this.state.name}
              onChangeText={ text => this.setState({text}) } 
              style={input.field}
            />
          </ViewSection>

          <ViewSection >
            <Text style={input.label}>License:</Text>
            <TextInput
              placeholder="Provide you license ..."
              value={this.state.license}
              onChangeText={ text => this.setState({text}) }
              style={input.field}
            />
          </ViewSection> 

          <ViewSection>
            <Button
              title="Register now" 
              onPress={this.onSubmit}
              style={input.button}
            /> 
          </ViewSection>
        
        </KeyboardAvoidingView>
      
      </ScrollView>
    );
  }
}

export default Register;