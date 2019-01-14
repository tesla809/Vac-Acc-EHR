import React, { Component } from 'react'
import { View, ScrollView, Text, Button, Image } from 'react-native'
import { Navigation } from 'react-native-navigation' 

import ViewSection from '../components/ViewSection';
import { field, input } from '../appStyles';

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
  
    async goBack() { 
        try {
            await Navigation.pop(this.props.componentId);
        } catch (err) {
            alert('ApproveAttest error:' + err)
        } 
    }
 
    approve = () => {
          alert('attestation approved')
    }

    render() {         
        const { data, itemId } = this.props; 
        const selectedItem =  data.get(itemId)    
        return (
            <ScrollView>
                <View style={input.container}>
                    <Text style={field.label}>Patient:</Text>  
                    <Text style={field.text}>{selectedItem.patient}</Text>
                    <Text style={field.label}>Description:</Text>  
                    <Text style={field.text}>{selectedItem.description}</Text> 
                    <Text style={field.label}>Date Administered:</Text>  
                    <Text style={field.text}>{selectedItem.dateAdministered}</Text> 
                    <Text style={field.label}>Administered by:</Text>  
                    <Text style={field.text}>{selectedItem.adminBy}</Text> 
                    <Text style={field.label}>Location:</Text>  
                    <Text style={field.text}>{selectedItem.location}</Text>  
                </View>
                <ViewSection>
                    <Image    
                        style={{width: 350, height: 350}}
                        source={require("../images/doc1.jpg")}
                    />
                </ViewSection>
                
                <ViewSection>
                    <Image    
                        style={{width: 350, height: 350}}
                        source={require("../images/doc2.jpg")}
                    />
                </ViewSection>
                    
                <Button style={field.button} title="Approve" onPress={ () => this.approve}/>
                
            </ScrollView> 
        ) 
    }
}
 
