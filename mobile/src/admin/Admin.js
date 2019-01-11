import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { toHome } from '../Navigation';

export default class Admin extends Component {
    static options(props) {
        return {
            topBar: {
                title: {
                    text: 'Admin'
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
                <Text>Admin Menu</Text>
               
                <Button
                    onPress={ () => {
                        Navigation.push(this.props.componentId, {
                            component: {
                                name: 'admin.AdminRegister',
                            }
                        })  
                    }} title="Register as Provider" 
                />

                <Button
                    onPress={ () => {
                        Navigation.push(this.props.componentId, {
                            component: {
                                name: 'admin.ApprovalList',
                            }
                        })  
                    }} title="Attestations Approval" 
                />
               
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
