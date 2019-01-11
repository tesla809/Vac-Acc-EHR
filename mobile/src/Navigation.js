import { Navigation } from 'react-native-navigation'

export const toHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'Home',
            children: [
                {
                    component: {
                        name: 'Home',
                    }
                }
            ],
        }
    }
});

export const toAdmin = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'Admin',
            children: [
                {
                    component: {
                        name: 'admin.Admin',
                    }
                }
            ],
        }
    }
});

export const toPatient = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'Patient',
            children: [
                {
                    component: {
                        name: 'patient.Patient',
                    }
                }
            ],
        }
    }
});



export const toApprovalList = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'ApprovalList',
            children: [
                {
                    component: {
                        name: 'admin.ApprovalList',
                    }
                }
            ],
        }
    }
});
 
export const toApproveAttest = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'ApproveAttest',
            children: [
                {
                    component: {
                        name: 'admin.ApproveAttest', 
                  
                    }
                }
            ],
        }
    }
});