import React, { PureComponent } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { toHome } from '../Navigation';

export default class Admin extends PureComponent {
    
    constructor(props) {
        super(props)
       
        const data = new Map();
        data.set(11, 
                {  
                    id: 11,
                    patient: 'A',
                    description: 'Anti Tetanus Immunization',
                    dateAdministered: '2001-05-23',
                    location: 'ABC Medical Clinic 123 Main St. Anytown, Anystate, USA',
                    adminBy: 'Dr. John Smith'
                }
            )
        data.set(12, 
            {  
                id: 12,
                patient: 'A',
                description: 'Anti Rabies Immunization',
                dateAdministered: '2002-07-28',
                location: 'ABC Medical Clinic 123 Main St. Anytown, Anystate, USA',
                adminBy: 'Dr. Jane Dane'
            }
        )

        data.set(13, 
            {  
                id: 13,
                patient: 'B',
                description: 'Anti Polio Vaccination',
                dateAdministered: '2005-06-15',
                location: 'ABC Medical Clinic 101 Main St. Anytown, Anystate, USA',
                adminBy: 'Dr. Terry Taylor'
            }
        )

        this.state = {data: data};

        // this.state = {data: 
        //     [
        //         { 
        //             id: 1,
        //             patient: 'A',
        //             description: 'Anti Tetanus Immunization',
        //             dateAdministered: '2001-05-23',
        //             location: 'ABC Medical Clinic 123 Main St. Anytown, Anystate, USA',
        //             adminBy: 'Dr. John Smith'
        //         },
        //         { 
        //             id: 2,
        //             patient: 'A',
        //             description: 'Anti Rabies Immunization',
        //             dateAdministered: '2002-07-28',
        //             location: 'ABC Medical Clinic 123 Main St. Anytown, Anystate, USA',
        //             adminBy: 'Dr. Jane Dane'
        //         },
        //         { 
        //             id: 3,
        //             patient: 'B',
        //             description: 'Anti Polio Vaccination',
        //             dateAdministered: '2005-06-15',
        //             location: 'ABC Medical Clinic 101 Main St. Anytown, Anystate, USA',
        //             adminBy: 'Dr. Terry Taylor'
        //         }  
        //     ]
        // } 
        
        //approveAttestHandler = this.approveAttestHandler.bind(this)
    }
    static options(props) {
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

    approveAttestHandler =  async (itemId) => {
        //await alert("Admin approveAttestHandler itemId: " + itemId)
        selectedItem = await this.state.data.filter( (item) => { return item.id  === itemId })
        //await alert("Admin approveAttestHandler desc: " + this.state.data[1].description)
        this.display(selectedItem)
    }

    display(item) {
        alert(item.description);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Admin Menu</Text>
               
                <Button
                    onPress={ () => {
                        Navigation.push(this.props.componentId, {
                            component: {
                                name: 'admin.AdminRegister'
                            }
                        })  
                    }} title="Register as Provider" 
                />

                <Button
                    onPress={ () => {
                        Navigation.push(this.props.componentId, {
                            component: {
                                name: 'admin.ApprovalList',
                                passProps: {
                                    approveAttest: this.approveAttestHandler,
                                    data: this.state.data
                                },
                                
                            }
                        })  
                    }}  
                    title="Attestations Approval" 
                />
               
                <Button
                    onPress={this.goToHome}
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
