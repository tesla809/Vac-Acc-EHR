import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native' 
import { toHome } from '../navigation';
import { layout, field } from '../appStyles';

export default class Patient extends Component {
    static options(props) {
        return {
            topBar: {
                title: {
                    text: 'Patient' 
                }
            }
        }
    }
 
    goToHome = () => {
        toHome()
    }

    render() {
        return (
            <View style={layout.container}>
                <Text style={layout.h1}>Patient Home Page</Text>
                <Text style={layout.h2}>About patient application text here....</Text>
                <TouchableOpacity style={field.button}>     
                    <Button
                        onPress={this.goToHome}
                        title="Go Back"
                    />
                </TouchableOpacity>
                
            </View>
        ) 
    }
}
 