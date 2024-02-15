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
    fontSize: 15,
    color: '#333',
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
    fontSize: 16,
    color: '#333',
  },



  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.0)", 
   
  },
  modalContent: {
    backgroundColor: "#fff",
    width: width * 0.8,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 10,
    shadowRadius: 20,
    elevation: 1000,
    height: 220
  },
  modalHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0077B6", // Cor de destaque para o cabeçalho
    textAlign: "center",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333", // Cor do texto principal
    textAlign: "center",
  },
  closeButton: {
    backgroundColor: "#0077B6", // Cor do botão de fechar
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
    alignSelf: "center",
  },
  closeButtonText: {
    fontSize: 18,
    color: "#fff", // Cor do texto do botão de fechar
    fontWeight: "bold",
  },
  professorInfo: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  professorImage: {
    width: 110, // Largura da imagem do professor
    height: 150, // Altura da imagem do professor
    borderRadius: 30, // Bordas arredondadas para uma aparência mais suave
    marginBottom: 10, // Espaço abaixo da imagem
  },
  professorDetails: {
    alignContent: "flex-end",
    alignItems: "flex-end"
  },
  professorName: {
    fontSize: 18,
    textAlign: 'center',
    marginLeft: 135,
    marginTop: -120
  },
  professorSubject: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555",
    textAlign: "center", // Alinhamento centralizado do texto
  },
  professorRole: {
    fontSize: 16,
    color: "#555",
    textAlign: "center", // Alinhamento centralizado do texto
  },
});
