import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { toHome } from '../Navigation';

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
            <View style={styles.container}>
                <Text>Patient Menu</Text>
                <Button
                    onPress={this.goToHome}
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
