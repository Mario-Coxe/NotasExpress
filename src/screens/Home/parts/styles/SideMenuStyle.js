import { StyleSheet } from "react-native";

export default StyleSheet.create({
 
    bottomSection: {
      flexDirection: 'column',
      alignItems: 'center', // Alinha horizontalmente ao centro
      marginTop: 20,
    },
    bottomButton: {
      flexDirection: 'row',
      alignItems: 'center', // Alinha verticalmente ao centro
      marginVertical: 10,
    },
    icon: {
      color: '#fff',
      marginRight: 20,
    },
    logouticon: {
      color: '#fff',
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    modal: {
      margin: 0,
    },
    container: {
      backgroundColor: '#0077B6',
      width: '60%',
      height: '100%',
      paddingTop: 20,
      paddingHorizontal: 20,
    },
    userImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    userName: {
      fontSize: 18,
      marginTop: 10,
      color: '#fff',
    },
    navItemContent: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center', // Alinha horizontalmente ao centro
    },
    navItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    icon: {
      color: '#fff',
      marginRight: 20,
    },
    navItemText: {
      color: '#fff',
      fontSize: 16,
    },
    bottomSection: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 20
    },
    settingsButton: {
      marginTop: 20,
    },
    logoutButton: {
      backgroundColor: '#8B0000',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      alignItems: 'center',
    },
  });