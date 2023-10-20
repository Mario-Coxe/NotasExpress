import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    NavigationButton: {
        alignItems: 'center',
    },
    listContent: {
        paddingTop: 10, // Adiciona espaço no topo da lista
        paddingBottom: 350, // Adiciona espaço na parte inferior da lista
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    disciplinaItem: {
        flexDirection: 'column', // Alteração para tornar o contêiner vertical
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#fff',
        elevation: 3,
        borderRadius: 5,

    },
    disciplinaText: {
        fontSize: 18,
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
    dataEntrega: {
        fontSize: 14,
        color: '#777',
    },
});