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
        fontSize: 16,
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
        fontSize: 15,
        color: '#333',
    },
    dataEntrega: {
        fontSize: 14,
        color: '#777',
    },
    cardContainer: {
        height: 100,
        width: '100%',
        backgroundColor: '#0077B6',
        borderBottomRightRadius: 80,
        justifyContent: 'center',
        paddingLeft: 20,
    },
    bemvindoText: {
        color: '#fff',
        fontSize: 24,
        marginTop: 40
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 350,
        zIndex: 1,
    },
});