import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation' 
import { toAdmin, toPatient } from './Navigation';
  
export default class Home extends Component {
    
    static options(props) {
        return {
            topBar: {
                title: {
                    text: 'Home'
                },
            }
        };
    } 

    goToAdmin = () => { 
        toAdmin()
    }

    goToPatient = () => { 
        toPatient()
    }

    render() {
        return (
             <View style={styles.container}>
                <Text> Welcome to Vac-Acc-EHR </Text> 

                <Button onPress={this.goToAdmin} title="Login as Vacc Admin" />

                <Button onPress={this.goToPatient} title="Login as Patient" /> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    button: {
        backgroundColor: 'black',
        margin: 50
    }
})