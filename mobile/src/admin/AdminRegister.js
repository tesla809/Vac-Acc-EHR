import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import Register from '../components/admin/Register'
import { layout } from '../appStyles';

export default class AdminRegister extends Component {
    static options(props) {
        return {
            topBar: {
                title: {
                    text: 'Register'
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
                <Register onUpdateSubmit={this.onAddInput} /> 
            </View>
        ) 
    }
}
 
