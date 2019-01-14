import React, { PureComponent } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
 
import { toHome } from '../navigation'; 
import { layout, field } from '../appStyles';

export default class Admin extends PureComponent {
   
    static async options(props) {
       
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
            <View style={layout.container}>
                <Text style={layout.h1}>Admin Menu</Text>
                <Text style={layout.h3}> 
                    As Administering provider for immunization.... 
                </Text>
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
 
