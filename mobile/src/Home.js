import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation' 
import Icon from 'react-native-vector-icons/Ionicons';

import { toAdmin, toPatient } from './Navigation';
  
class Home extends Component {
     
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
        //approveAttestHandler = this.approveAttestHandler.bind(this)
    }

    static options(props) {
        return {
            topBar: {
                title: {
                    text: 'Home'
                },
            }
        };
    } 

    // goToAdmin = () => { 
    //     toAdmin()
    // }

    goToPatient = () => { 
        toPatient()
    }

    render() {
        return (
             <View style={styles.container}>
                <Text> Welcome to Vac-Acc-EHR </Text> 

                <Button onPress={this.goToAdmin} title="Login as Vacc Admin" />

                <Button onPress={this.goToPatient} title="Login as Patient" /> 
            </View>
        )
    }

    goToAdmin = async () => {
        try { 
        const home_image = await Icon.getImageSource("ios-home", 30);
        const register_image = await Icon.getImageSource("ios-person-add", 30);
        const list_image = await Icon.getImageSource("ios-list", 30);

        //await Navigation.dismissAllModals();
        await Navigation.setRoot({
            root: {
                bottomTabs: {
                    id: 'Admin',
                    children: [
                        {
                            stack: {
                                id: 'Register',
                                children: [
                                    {
                                        component: {
                                            name: 'admin.Admin',
                                            options: {
                                                topBar: {
                                                    visible: true,
                                                    animate: true,
                                                    title: {
                                                        text: 'Home'
                                                    }
                                                },
                                                bottomTab: {
                                                    text: 'Admin Home',
                                                    icon: home_image 
                                                }
                                            }
                                        }
                                    }
                                ],
                                options: {
                                  topBar: {
                                    visible: true
                                  }
                                }
                            }
                        },
                        {
                            stack: {
                                id: 'Register',
                                children: [
                                    {
                                        component: {
                                            name: 'admin.AdminRegister',
                                            options: {
                                                topBar: {
                                                    visible: true,
                                                    animate: true,
                                                    title: {
                                                        text: 'Register as Provider'
                                                    }
                                                },
                                                bottomTab: {
                                                    text: 'Register',
                                                    icon: register_image 
                                                }
                                            }
                                        }
                                    }
                                ],
                                options: {
                                  topBar: {
                                    visible: true
                                  }
                                }
                            }
                        },
                        {
                            stack: {
                                id: 'ApproveList',
                                children: [
                                    {
                                        component: {
                                            name: 'admin.ApprovalList',
                                            passProps: {
                                                approveAttest: this.approveAttestHandler,
                                                data: this.state.data
                                            },
                                            options: { 
                                                topBar: {
                                                visible: true,
                                                animate: true,
                                                title: {
                                                    text: 'Attestations for Approval'
                                                }
                                            }, 
                                                bottomTab: {
                                                    text: 'For Approval',
                                                    icon: list_image 
                                                }
                                            } 
                                        }
                                    }
                                ],
                                options: {
                                  topBar: {
                                    visible: true
                                  }
                                }
                            }
                        },
                    ],
                    options: {
                      bottomTabs: {
                        titleDisplayMode: 'alwaysShow' 
                      }
                    }
                }
            }
        })
        } catch (err) {
            alert(err)
        }
    }
}

export default Home; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    button: {
        backgroundColor: 'black',
        margin: 50
    }
})