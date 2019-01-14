import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { Navigation } from 'react-native-navigation' 
import Icon from 'react-native-vector-icons/Ionicons';
import { field, layout } from './appStyles';
  
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
        //this.state = {data: data}; 

        const patientdata = new Map();
        patientdata.set(11, 
                {  
                    id: 11,
                    patient: 'A',
                    description: 'Anti Tetanus Immunization',
                    dateAdministered: '2001-05-23',
                    location: 'ABC Medical Clinic 123 Main St. Anytown, Anystate, USA',
                    adminBy: 'Dr. John Smith'
                }
            )
        patientdata.set(12, 
            {  
                id: 12,
                patient: 'A',
                description: 'Anti Rabies Immunization',
                dateAdministered: '2002-07-28',
                location: 'ABC Medical Clinic 123 Main St. Anytown, Anystate, USA',
                adminBy: 'Dr. Jane Dane'
            }
        )

        patientdata.set(13, 
            {  
                id: 13,
                patient: 'B',
                description: 'Anti Polio Vaccination',
                dateAdministered: '2005-06-15',
                location: 'ABC Medical Clinic 101 Main St. Anytown, Anystate, USA',
                adminBy: 'Dr. Terry Taylor'
            }
        ) 
        this.state = {data, patientdata }; 

        //this.approveAttestHandler = this.approveAttestHandler.bind(this)
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
 
    

    render() {
        return (
             <View style={styles.container}>
                <Text style={layout.h1}> Welcome to Vac-Acc-EHR </Text> 
                <TouchableOpacity style={field.button}>
                    <Button onPress={this.goToAdmin} title="Login as Vacc Admin" />
                </TouchableOpacity>    
                <TouchableOpacity style={field.button}>    
                    <Button onPress={this.goToPatient} title="Login as Patient" /> 
                </TouchableOpacity>
                

                
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
                                                        text: 'Home',
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

    goToPatient = async () => { 
        try { 
            const home_image = await Icon.getImageSource("ios-home", 30);
            const records_image = await Icon.getImageSource("ios-albums", 30);
            const input_image = await Icon.getImageSource("ios-add", 30);
            
            //await Navigation.dismissAllModals();
            await Navigation.setRoot({
            root: {
                    bottomTabs: {
                        id: 'Admin',
                        children: [
                            {
                                stack: {
                                    id: 'Patient',
                                    children: [
                                        {
                                            component: {
                                                name: 'patient.Patient',
                                                options: {
                                                    topBar: {
                                                        visible: true,
                                                        animate: true,
                                                        title: {
                                                            text: 'Home'
                                                        }
                                                    },
                                                    bottomTab: {
                                                        text: 'Home',
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
                                    id: 'Immunizations',
                                    children: [
                                        {
                                            component: {
                                                name: 'patient.ImmunList',
                                                passProps: { 
                                                    data: this.state.patientdata
                                                },
                                                options: {
                                                    topBar: {
                                                        visible: true,
                                                        animate: true,
                                                        title: {
                                                            text: 'My Immunizations'
                                                        }
                                                    },
                                                    bottomTab: {
                                                        text: 'My Immunizations',
                                                        icon: records_image 
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
                                    id: 'Input',
                                    children: [
                                        {
                                            component: {
                                                name: 'patient.ImmunInput', 
                                                options: { 
                                                    topBar: {
                                                    visible: true,
                                                    animate: true,
                                                    title: {
                                                        text: 'Immunization Input'
                                                    }
                                                }, 
                                                    bottomTab: {
                                                        text: 'Input',
                                                        icon: input_image 
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