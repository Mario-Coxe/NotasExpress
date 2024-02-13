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
    paddingHorizontal: 0.04 * width, 
    paddingTop: 0.06 * height, 
  },
  menuIcon: {
    padding: 0.02 * width, 
  },
  notificationIcon: {
    position: 'relative',
    padding: 0.02 * width, 
  },
  titleText: {
    fontSize: 0.02 * height, 
    color: 'white',
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    borderRadius: 0.02 * width,
    paddingHorizontal: 0.012 * width, 
    paddingVertical: 0.005 * height, 
  },
  notificationText: {
    color: 'white',
    fontSize: 0.012 * height, 
  },
  card: {
    backgroundColor: '#0077B6',
    padding: 0.04 * width, 
    borderRadius: 0.02 * width, 
    margin: 0.05 * width, 
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  disciplineText: {
    fontSize: 0.018 * height, 
    color: 'white',
    marginBottom: 0.01 * height, 
    alignSelf: 'flex-start',
  },
  melhorPerformace: {
    fontSize: 0.014 * height, 
    color: 'white',
    marginBottom: 0.01 * height, 
    alignSelf: 'flex-start',
  },
  percentagem: {
    fontSize: 0.014 * height,
    color: 'white',
    alignSelf: 'flex-end',
    marginTop: -0.02 * height, 
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImageContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginBottom: 0.01 * height, 
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  userImage: {
    width: 0.1 * width, 
    height: 0.1 * width, 
    borderRadius: 0.03 * width, 
    marginRight: 0.02 * width,
  },
  academics: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0.05 * width, 
    borderRadius: 0.02 * width,
    width: '90%',
    alignSelf: 'center',
    marginTop: 0.03 * height,
  },
  modalButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  academicItem: {
    alignItems: 'center',
    margin: 0.01 * height, 
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
    width: 0.95 * width, 
    padding: 0.04 * width, 
    borderRadius: 0.01 * width, 
    alignItems: 'center',
    minHeight: 0.2 * height,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 0.01 * height, 
    paddingHorizontal: 0.016 * width, 
  },
  modalItemText: {
    fontSize: 0.016 * height, 
    marginLeft: 0.01 * width, 
  },
  modalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalColumn: {
    flex: 1,
    paddingHorizontal: 0.016 * width, 
    width: '100%',
  },
  closeIcon: {
    position: 'absolute',
    right: 0.01 * width, 
    marginBottom: 0.03 * height, 
  },
  carouselContainer: {
    marginTop: 0.04 * height, 
    marginBottom: 0,
  },
  eventPhotoContainer: {
    width: 0.5 * width, 
    height: 0.2 * height, 
    borderRadius: 0.02 * width, 
    marginHorizontal: 0.01 * width, 
    overflow: 'hidden',
    backgroundColor: "#000"
  },
  eventPhoto: {
    width: '100%',
    height: '100%',
  },
  eventName: {
    position: 'absolute',
    bottom: 0.01 * height, 
    left: 0.01 * width, 
    color: '#0077B6',
    fontSize: 0.015 * height, 
    fontWeight: 'bold',
  },
  academicstexts: {
    
  }
});
