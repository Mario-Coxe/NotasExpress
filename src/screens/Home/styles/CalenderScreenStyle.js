import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    NavigationButton: {
      alignItems: 'center',
    },
    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 30,
      marginTop: 20,
    },
    item: {
      paddingVertical: 10,
    },
    selectedItem: {
      borderBottomWidth: 3,
      borderColor: '#0077B6',
    },
    eventText: {
      fontSize: 16,
      color: '#000',
    },
  });