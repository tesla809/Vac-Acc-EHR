import React, { PureComponent } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation' 
import ApprovalListItem from './ApprovalListItem';

export default class ApprovalList extends PureComponent { 
    constructor(props) {
        super(props)
        this.goApproveAttest = this.goApproveAttest.bind(this)
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
  

    goApproveAttest = async (itemId) => {   
        Navigation.push(this.props.componentId, {
            component: {
              name: 'admin.ApproveAttest', 
                passProps: {
                    itemId: itemId,
                    data: this.props.data, 
                }                  
            }
        });
    }

    // See: https://facebook.github.io/react-native/docs/flatlist

    renderItem = ({item}) => (
        <ApprovalListItem 
            id={item.id}
            onPressItem={this.goApproveAttest} 
            title={item.description + "(" + item.dateAdministered + ")"}             
        />
     );

    render() {
        const { data } = this.props        
        const dataList = Array.from( data.values() )
        return ( 
           <View style={styles.container}>
                 
                <FlatList 
                    data={ dataList } 
                    extraData={this.state}
                    keyExtractor={(item, index) => `${item.id}`}
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
