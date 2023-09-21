import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 5
    },
    description: {
      fontSize: 16,
      marginBottom: 20,
      color: '#000'
    },
    input: {
      width: '90%',
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 10,
      marginBottom: 25,
      fontSize: 15
    },
    button: {
      width: '90%',
      backgroundColor: '#6A5AE0',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      height: 50,
      borderRadius: 15,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });