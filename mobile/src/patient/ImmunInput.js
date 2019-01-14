import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import ImmunizationInput from '../components/patient/ImmunInput';
import { layout } from '../appStyles';

export default class ImmunInput extends Component {

    constructor(props) {
        super(props)
        this.onAddInput = this.onAddInput.bind(this)
    }
    static options(props) {
        return {
            topBar: {
                title: {
                    text: 'Input' 
                }
            }
        }
    }
  
    onAddInput = () => {
        alert('onAddInput')
    }

    render() {
        return (
            <View style={layout.container}>
                <ImmunizationInput onUpdateSubmit={this.onAddInput} />
            </View>
        )
       
    }
}
 