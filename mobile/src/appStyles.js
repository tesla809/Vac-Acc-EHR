import { StyleSheet } from 'react-native';

export const layout = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center' 
    }, 
    h1: {
      margin: 2,
      fontSize: 24
    },
    h2: {
      margin: 2,
      fontSize: 20
    },
    h3: {
      margin: 2,
      fontSize: 16
    }
});

export const list = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10
  },
  item: {
    margin: 6,
    fontSize: 20
  }
});

export const field = StyleSheet.create({
  text: {
    fontSize: 22,
    marginBottom: 10  
  },
  label: {
    fontSize: 16,
    paddingLeft: 4
  }, 
  button: {
    fontSize: 16,
    alignItems: 'center', // horizontally centered
    justifyContent: 'center', // vertically centered
    backgroundColor: '#DDDDDD',
    margin: 6,
    marginTop: 10
},
});

export const input = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      padding: 20,
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "stretch"
    },
    label: {
      fontSize: 16,
      paddingLeft: 4
    },
    field: { 
      fontSize: 22,
      marginBottom: 10  
    }, 
    button: {
      fontSize: 16,
      alignItems: 'center', // horizontally centered
      justifyContent: 'center', // vertically centered
      backgroundColor: '#DDDDDD',
      padding: 20,
      marginTop: 10
  },
});
  