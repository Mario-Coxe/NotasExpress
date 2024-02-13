import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
      },
      navigationButton: {
        alignItems: 'center',
      },
      listContent: {
        paddingTop: 10,
        paddingBottom: 350,
      },
      disciplinaItem: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#fff',
        elevation: 3,
        borderRadius: 5,
      },
      disciplinaHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      disciplinaText: {
        fontSize: 15,
        color: '#333',
      },
      tarefasContainer: {
        marginTop: 16,
      },
      tarefaItem: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
      },
      tarefaText: {
        fontSize: 16,
        color: '#333',
      },
      progressBar: {
        height: 10,
        backgroundColor: '#ddd',
        borderRadius: 5,
      },
      progressFill: {
        height: '100%',
        position: 'absolute',
      },
});