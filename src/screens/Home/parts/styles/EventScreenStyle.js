import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
      padding: 16,
      marginTop: 20,
    },
    listContent: {
      paddingTop: 10, // Adiciona espaço no topo da lista
      paddingBottom: 100, // Adiciona espaço na parte inferior da lista
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 16,
      paddingHorizontal: 10,
      height: 40,
    },
    searchIcon: {
      marginRight: 10,
    },
    searchInput: {
      flex: 1,
    },
    eventItem: {
      backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
    },
    eventImage: {
      width: 80,
      height: 80,
      borderRadius: 8,
    },
    eventInfo: {
      flex: 1,
      marginLeft: 16,
    },
    eventTheme: {
      fontSize: 18,
      color: '#0077B6',
      fontWeight: 'bold',
    },
    eventDate: {
      color: '#555',
    },
    eventDescription: {
      marginTop: 8,
      fontSize: 14,
      color: '#000000',
    },
  });