import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
      padding: 16,
      marginTop: 20,
    },
    listContent: {
      paddingTop: 10, 
      paddingBottom: 100, 
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
      fontSize: 14,
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
      fontSize: 16,
      color: '#0077B6',
    },
    eventDate: {
      color: '#555',
      fontSize: 13

    },
    eventDescription: {
      marginTop: 8,
      fontSize: 14,
      color: '#000000',
      fontSize: 14
    },




  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.0)",
  },
  modalContent: {
    backgroundColor: "#FFF",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  modalEventImage: {
    width: "100%",
    height: 450,
    borderRadius: 10,
    marginBottom: 20,
  },
  modalEventDescription: {
    fontSize: 16,
    color: "#333",
  },
  });