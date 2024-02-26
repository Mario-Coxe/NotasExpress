import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  headerCell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 2,
    marginRight: 2.5,
  },
  headerText: {
    fontSize: 12,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  timeCell: {
    width: width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginRight: 5,
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginRight: 5,
  },
  subject: {
    fontSize: 14,
    color: '#000',
  },



  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: width * 0.8,
    borderRadius: 5,
    borderTopEndRadius: 50,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  modalHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0077B6",
    textAlign: "center",
  },
  professorImage: {
    width: 110,
    height: 130,
    borderRadius: 20,
    marginBottom: 10,
    alignSelf: 'center'
  },
  professorName: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  professorSubject: {
    fontSize: 15,
    marginBottom: 10,
    color: "#000",
    textAlign: "center",
  },
  closeButton: {
    alignItems: 'flex-end',
  },
  closeButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },

});
