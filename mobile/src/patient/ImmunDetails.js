import React, { Component } from 'react'
import { View, ScrollView, Text, Image } from 'react-native'

import ViewSection from '../components/ViewSection';

import { field, input } from '../appStyles';

export default class ImmunDetails extends Component {
    static options(props) {
        return {
            topBar: {
                title: {
                    text: 'Immunization Details' 
                }
            }
        }
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
                    
                </View> 
                
            </ScrollView> 
        )
       
    }
}
 