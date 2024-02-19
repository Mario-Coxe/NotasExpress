import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  customDayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  customDayCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customDayText: {
    color: 'white',
    fontSize: 16,
  },
  defaultDayText: {
    fontSize: 16,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 16,
  },
  modalDescription: {
    fontSize: 15,
    textAlign: "justify",
    lineHeight: 25,
    color: "#000"
  },
  modalCloseButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});
