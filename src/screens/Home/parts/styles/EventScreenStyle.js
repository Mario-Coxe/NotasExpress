import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  NavigationButton: {
    alignItems: 'center',
  },
  cardContainer: {
    height: 100,
    width: '100%',
    backgroundColor: '#0077B6',
    borderBottomRightRadius: 80,
    justifyContent: 'center',
    paddingLeft: 20,
    marginBottom: 40
  },
  bemvindoText: {
    color: '#fff',
    fontSize: 24,
    marginTop: 40
  },
  Container: {
    paddingHorizontal: 20,
    flex: 1 // Adicionado flex: 1 para ocupar todo o espaço disponível
  },

  backButton: {
    position: 'absolute',
    top: 40,
    left: 350,
    zIndex: 1,
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
    height: 45,
    marginTop: -25
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14
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
    textAlign: "justify",
    lineHeight: 23,
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
  closeIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalEventImage: {
    width: "100%",
    height: 450,
    borderRadius: 10,
    marginBottom: 20,
  },
  modalEventDescription: {
    fontSize: 15,
    color: "#333",
    textAlign: "justify",
    lineHeight: 23,
    
  },

  closeIconContainer: {
    alignItems: 'flex-end',
    marginTop: -40,
  },
});
