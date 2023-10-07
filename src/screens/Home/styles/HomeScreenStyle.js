import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0077B6',
    paddingHorizontal: 0.04 * width, // 4% da largura da tela como padding horizontal
    paddingTop: 0.06 * height, // 6% da altura da tela como padding superior
  },
  menuIcon: {
    padding: 0.02 * width, // 2% da largura da tela como padding
  },
  notificationIcon: {
    position: 'relative',
    padding: 0.02 * width, // 2% da largura da tela como padding
  },
  titleText: {
    fontSize: 0.03 * height, // 3% da altura da tela como tamanho de fonte
    color: 'white',
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    borderRadius: 0.02 * width, // 2% da largura da tela como borda
    paddingHorizontal: 0.012 * width, // 1.2% da largura da tela como padding horizontal
    paddingVertical: 0.005 * height, // 0.5% da altura da tela como padding vertical
  },
  notificationText: {
    color: 'white',
    fontSize: 0.012 * height, // 1.2% da altura da tela como tamanho de fonte
  },
  card: {
    backgroundColor: '#0077B6',
    padding: 0.04 * width, // 4% da largura da tela como padding
    borderRadius: 0.02 * width, // 2% da largura da tela como borda
    margin: 0.05 * width, // 5% da largura da tela como margem
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  disciplineText: {
    fontSize: 0.018 * height, // 1.8% da altura da tela como tamanho de fonte
    color: 'white',
    marginBottom: 0.01 * height, // 1% da altura da tela como margem inferior
    alignSelf: 'flex-start',
  },
  melhorPerformace: {
    fontSize: 0.014 * height, // 1.4% da altura da tela como tamanho de fonte
    color: 'white',
    marginBottom: 0.01 * height, // 1% da altura da tela como margem inferior
    alignSelf: 'flex-start',
  },
  percentagem: {
    fontSize: 0.014 * height, // 1.4% da altura da tela como tamanho de fonte
    color: 'white',
    alignSelf: 'flex-end',
    marginTop: -0.02 * height, // 2% da altura da tela como margem superior negativa
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImageContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginBottom: 0.01 * height, // 1% da altura da tela como margem inferior
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  userImage: {
    width: 0.1 * width, // 10% da largura da tela
    height: 0.1 * width, // 10% da largura da tela
    borderRadius: 0.03 * width, // 3% da largura da tela como borda
    marginRight: 0.02 * width, // 2% da largura da tela como margem direita
  },
  academics: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0.05 * width, // 5% da largura da tela como padding
    borderRadius: 0.02 * width, // 2% da largura da tela como borda
    width: '90%',
    alignSelf: 'center',
    marginTop: 0.03 * height, // 3% da altura da tela como margem superior
  },
  modalButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  academicItem: {
    alignItems: 'center',
    margin: 0.01 * height, // 1% da altura da tela como margem
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomSheet: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    width: 0.95 * width, // 95% da largura da tela
    padding: 0.04 * width, // 4% da largura da tela como padding
    borderRadius: 0.01 * width, // 1% da largura da tela como borda
    alignItems: 'center',
    minHeight: 0.2 * height, // 20% da altura da tela como altura mínima
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 0.01 * height, // 1% da altura da tela como margem vertical
    paddingHorizontal: 0.016 * width, // 1.6% da largura da tela como padding horizontal
  },
  modalItemText: {
    fontSize: 0.016 * height, // 1.6% da altura da tela como tamanho de fonte
    marginLeft: 0.01 * width, // 1% da largura da tela como margem esquerda
  },
  modalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalColumn: {
    flex: 1,
    paddingHorizontal: 0.016 * width, // 1.6% da largura da tela como padding horizontal
    width: '100%',
  },
  closeIcon: {
    position: 'absolute',
    right: 0.01 * width, // 1% da largura da tela como margem direita
    marginBottom: 0.03 * height, // 3% da altura da tela como margem inferior
  },
  carouselContainer: {
    marginTop: 0.04 * height, // 4% da altura da tela como margem superior
    marginBottom: 0,
  },
  eventPhotoContainer: {
    width: 0.5 * width, // 40% da largura da tela
    height: 0.2 * height, // 20% da altura da tela
    borderRadius: 0.02 * width, // 2% da largura da tela como borda
    marginHorizontal: 0.01 * width, // 1% da largura da tela como margem horizontal
    overflow: 'hidden',
  },
  eventPhoto: {
    width: '100%',
    height: '100%',
  },
  eventName: {
    position: 'absolute',
    bottom: 0.01 * height, // 1% da altura da tela como margem inferior
    left: 0.01 * width, // 1% da largura da tela como margem esquerda
    color: 'white',
    fontSize: 0.014 * height, // 1.4% da altura da tela como tamanho de fonte
    fontWeight: 'bold',
  },
});
