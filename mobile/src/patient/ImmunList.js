import React, { Component } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { toHome } from '../navigation';
 
 

class ImmunListItem extends Component {
    
    onPress = () => { 
      this.props.onPressItem(this.props.id);
    };
  
    render() { 
        return (
            <TouchableOpacity onPress={this.onPress}>
                <View>
                    <Text>
                      {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default class ImmunList extends Component { 
    
    constructor(props) {
        super(props)
        this.showDetails = this.showDetails.bind(this)
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
   
    showDetails = async (itemId) => {   
        Navigation.push(this.props.componentId, {
            component: {
              name: 'patient.ImmunDetails', 
                passProps: {
                    itemId: itemId,
                    data: this.props.data, 
                }                  
            }
        });
    }

    // See: https://facebook.github.io/react-native/docs/flatlist

    renderItem = ({item}) => (
        <ImmunListItem 
            id={item.id}
            onPressItem={this.showDetails} 
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
    }
})
