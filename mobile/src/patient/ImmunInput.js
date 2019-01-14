import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { toHome } from '../navigation';

export default class ImmunInput extends Component {
    static options(props) {
        return {
            topBar: {
                title: {
                    text: 'Input' 
                }
            }
        }
    }
  
    render() {
        return (
            <View style={styles.container}>
                <Text>Immunization Input</Text> 
            </View>
        )
       
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})
