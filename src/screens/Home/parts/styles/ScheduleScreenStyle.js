import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

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
});
