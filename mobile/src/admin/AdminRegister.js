import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'

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
 
    render() {
        return (
            <View style={styles.container}>
                <Text> Register as Admin</Text>
                <Button
                    onPress={() => Navigation.pop(this.props.componentId)}
                    title="Go Back"
                /> 
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
