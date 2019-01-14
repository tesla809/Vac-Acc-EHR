import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
 

export default class ApprovalListItem extends React.PureComponent {
    
    onPress = () => {
        //alert(this.props.id)
      this.props.onPressItem(this.props.id);
    };
  
    render() {
        //const textColor = this.props.selected ? "red" : "black";

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