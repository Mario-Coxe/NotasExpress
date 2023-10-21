import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    listContent: {
      paddingTop: 10, // Adiciona espaço no topo da lista
      paddingBottom: 100, // Adiciona espaço na parte inferior da lista
    },
    scheduleItem: {
      width: width * 0.95,
      backgroundColor: '#f5f5f5',
      borderRadius: 8,
      justifyContent: 'center',
      marginBottom: 20,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
      alignItems: 'center',
    },
    scheduleDay: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      textAlign: 'center',
      color: '#0077B6',
    },
    scheduleTime: {
      fontSize: 16,
      textAlign: 'center',
      color: '#555',
    },
    scheduleSubject: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#333',
    },
    flatList: {
      flex: 0.7, // Define a altura da FlatList para 70% da tela
    },
  });