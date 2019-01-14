import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
//import { toApprovalList } from '../navigation';

export default class ApproveAttest extends Component {
    static options(props) {
        return {
            topBar: {
                title: {
                    text: 'Approve Attestation' 
                }
            }
        }
    }
 
    // goToApprovalList = () => {
    //     toApprovalList()
    // }

    async goBack() {
       
        try {
            await Navigation.pop(this.props.componentId);
        } catch (err) {
            alert('ApproveAttest error:' + err)
        }
        
    }

    /*
id: 11,
                    patient: 'A',
                    description: 'Anti Tetanus Immunization',
                    dateAdministered: '2001-05-23',
                    location: 'ABC Medical Clinic 123 Main St. Anytown, Anystate, USA',
                    adminBy: 'Dr. John Smith'

    */
    render() { 
        
        const { data, itemId } = this.props; 
        const selectedItem =  data.get(itemId) 
   
        return (
            <View style={styles.container}>
                 
                 
                    <Text> Description: {selectedItem.description}</Text>
                 
                
                <Button
                    onPress={this.goBack}
                    title="Go Back"
                />
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
