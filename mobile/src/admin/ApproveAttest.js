import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
//import { Navigation } from 'react-native-navigation'
import { toApprovalList } from '../Navigation';

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
 
    goToApprovalList = () => {
        toApprovalList()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Attestation For Approval</Text>
                <Button
                    onPress={this.goToApprovalList}
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
