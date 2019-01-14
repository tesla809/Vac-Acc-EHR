import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
 

export default class ApprovalListItem extends React.PureComponent {
    
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