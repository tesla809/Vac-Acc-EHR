import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
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

    async goBack() {
        //alert('ApproveAttest componentId: ' + this.props.componentId)
        try {
            await Navigation.pop(this.props.componentId);
        } catch (err) {
            alert('ApproveAttest error:' + err)
        }
        
    }

    render() {
        //const selectedItem =  this.props.data.filter( (item) => { return item.id  === this.props.itemId })
        const { data, itemId } = this.props;
        //const selectedItem =  data.filter( (item) => { return item.id  === itemId })
        const selectedItem =  data.get(itemId) 
        //const selectedItem =  this.props.data[this.props.itemId - 1]
        return (
            <View style={styles.container}>
                <Text>Attestation For Approval</Text>
                <Text>{selectedItem.description}</Text>
                <Text>{itemId}</Text>
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
      justifyContent: 'center',
      alignItems: 'center'
    }
})
