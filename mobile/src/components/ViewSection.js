import React from 'react'; 
import { View } from 'react-native'; 

 const ViewSection = props => {
     return <View style={styles.container}>{props.children}</View>
 }

 const styles = {
     container: {
         marginTop: 2,
         marginBottom: 2,
     }
 }

export default ViewSection;