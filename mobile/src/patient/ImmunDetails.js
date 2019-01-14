import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation' 

export default class ImmunDetails extends Component {
    static options(props) {
        return {
            topBar: {
                title: {
                    text: 'Immunization Details' 
                }
            }
        }
    } 
    
    render() { 
        
        const { data, itemId } = this.props; 
        const selectedItem =  data.get(itemId) 
   
        return (
            <View style={styles.container}>  
                <Text> Description: {selectedItem.description}</Text>  
            </View>
        )
       
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start' 
    } 
})
