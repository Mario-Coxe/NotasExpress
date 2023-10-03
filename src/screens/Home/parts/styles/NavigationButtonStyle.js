import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#0077B6', // Cor de fundo do botão de navegação
      paddingHorizontal: 32,
      paddingVertical: 16, // Espaçamento vertical
      borderRadius: 30,
      position: 'absolute',
      bottom: 20,
      width: '90%',
      elevation: 50, 
      // Elevação para dar a aparência de suspenso
    },
    button: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 8,
    },
  });