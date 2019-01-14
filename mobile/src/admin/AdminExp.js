import React, { PureComponent } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { toHome } from '../Navigation';
import Icon from 'react-native-vector-icons/Ionicons';

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

    // approveAttestHandler =  async (itemId) => {
    //     //await alert("Admin approveAttestHandler itemId: " + itemId)
    //     selectedItem = await this.pros.data.filter( (item) => { return item.id  === itemId })
    //     //await alert("Admin approveAttestHandler desc: " + this.state.data[1].description)
    //     this.display(selectedItem)
    // }

    // display(item) {
    //     alert(item.description);
    // }
    render() {
        return (
            <View style={styles.container}>
                <Text>Admin Menu</Text>
                <Text>
                    As Administering provider for immunization....

                </Text>
               
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
