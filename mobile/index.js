import {Navigation} from 'react-native-navigation'; 
import { register } from './src/Registry'; 
/*

 This initializes the application’s beginning navigation stack

*/

register(); 

// set the initial root stack of our app by calling Navigation.setRoot, 
// passing in the initial routes we would like our application to render

Navigation.events().registerAppLaunchedListener( () => {
   
    Navigation.setRoot({
        root: {
            component: {
                name: 'Home'
            }
        },
    });
});
