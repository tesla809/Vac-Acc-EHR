import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { toApproveAttest, toHome } from '../Navigation'; 
import ApprovalListItem from './ApprovalListItem';

export default class ApprovalList extends Component {
     
    state = {data: 
        [
            { 
                id: 1,
                patient: 'A',
                description: 'Anti Tetanus Immunization',
                dateAdministered: '2001-05-23',
                location: 'ABC Medical Clinic 123 Main St. Anytown, Anystate, USA',
                adminBy: 'Dr. John Smith'
            },
            { 
                id: 2,
                patient: 'A',
                description: 'Anti Rabies Immunization',
                dateAdministered: '2002-07-28',
                location: 'ABC Medical Clinic 123 Main St. Anytown, Anystate, USA',
                adminBy: 'Dr. Jane Dane'
            },
            { 
                id: 3,
                patient: 'B',
                description: 'Anti Polio Vaccination',
                dateAdministered: '2005-06-15',
                location: 'ABC Medical Clinic 101 Main St. Anytown, Anystate, USA',
                adminBy: 'Dr. Terry Taylor'
            }  
        ]
    } 
    
    static options(props) {
        return {
            topBar: {
                title: {
                    text: 'Attestations To Approve'
                }
            }
        }
    }
 
    approveAttest = async () => { 
        const itemId = 3;
        await alert(itemId)
        //const selectedItem = this.state.data[1]
        const selectedItem = await this.state.data.filter( (item) => { return item.id  === itemId })
        await alert(selectedItem.description)
        toApproveAttest(selectedItem) 
    }

    // See: https://facebook.github.io/react-native/docs/flatlist

    renderItem = ({item}) => (
        <ApprovalListItem 
            id={item.id}
            onPressItem={this.approveAttest} 
            title={item.description + "(" + item.dateAdministered + ")"}             
        />
     );

    render() {
        return (
           <View style={styles.container}>
                 
                <FlatList 
                    data={ this.state.data} 
                    keyExtractor={(item, index) => item.id}
                    renderItem={this.renderItem} 
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
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
})
