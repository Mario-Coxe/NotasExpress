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

  cardContainer: {
    height: 100,
    width: '100%',
    backgroundColor: '#0077B6',
    borderBottomRightRadius: 80,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  bemvindoText: {
    color: '#fff',
    fontSize: 24,
    marginTop: 40
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 350,
    zIndex: 1,
  },
  });