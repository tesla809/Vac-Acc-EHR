import { Navigation } from 'react-native-navigation';

export function register() {
    Navigation.registerComponent('Home', () => require('./Home').default);
    Navigation.registerComponent('admin.Admin', () => require('./admin/AdminExp').default); 
    
    Navigation.registerComponent('admin.AdminRegister', () => require('./admin/AdminRegister').default);
    //Navigation.registerComponent('admin.ApprovalList', () => require('./admin/ApprovalList').default);
    Navigation.registerComponent('admin.ApproveAttest', (data) => require('./admin/ApproveAttest').default);

    Navigation.registerComponent('patient.Patient', () => require('./patient/Patient').default); 

    Navigation.registerComponent('admin.ApprovalList', () => require('./admin/ApprovalListExp').default);
}    