import { StyleSheet } from "react-native";

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
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    menuIcon: {
        padding: 10,
    },
    notificationIcon: {
        position: 'relative', // Posição relativa para acomodar o número
        padding: 10,
    },
    titleText: {
        fontSize: 24,
        color: 'white',
    },
    // Estilos para o número de notificações
    notificationBadge: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    notificationText: {
        color: 'white',
        fontSize: 12,
    },
    card: {
        backgroundColor: '#0077B6',
        padding: 16,
        borderRadius: 10,
        margin: 16,
        alignItems: 'center',
        width: '90%', // Ocupa 90% da tela
        alignSelf: 'center', // Centralizado horizontalmente
    },
    disciplineText: {
        fontSize: 18,
        color: 'white',
        marginBottom: 10,
        alignSelf: 'flex-start', // Alinhamento à esquerda
    },
    melhorPerformace: {
        fontSize: 14,
        color: 'white',
        marginBottom: 10,
        alignSelf: 'flex-start', // Alinhamento à esquerda
    },
    percentagem: {
        fontSize: 14,
        color: 'white',
        alignSelf: 'flex-end',
        marginTop: -20,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userImageContainer: {
        alignItems: 'flex-end', // Alinhar à direita
        justifyContent: 'flex-start', // Alinhar no topo
        marginBottom: 10,
        flexDirection: 'row', // Para alinhar a imagem e o texto lado a lado
        alignSelf: 'flex-end',
    },
    userImage: {
        width: 50, // Ajuste o tamanho da imagem do usuário conforme necessário
        height: 50, // Ajuste o tamanho da imagem do usuário conforme necessário
        borderRadius: 30, // Metade da largura/altura para torná-la circular
        marginRight: 10, // Espaço entre a imagem e o texto
    },
    academics: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', // Alinhar verticalmente ao centro
        padding: 16,
        borderRadius: 10,
        width: '90%', // Ocupa 90% da tela
        alignSelf: 'center', // Centralizado horizontalmente
        marginTop: 20,

    },

    modalButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    academicItem: {
        alignItems: 'center',
        margin: 10
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
        width: '95%',
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        height: 240
    },
    modalItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 16,
    },
    modalItemText: {
        fontSize: 16,
        marginLeft: 10,
    },
    modalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalColumn: {
        flex: 1,
        paddingHorizontal: 16,
        width: '100%',
    },
    closeIcon: {
        position: 'absolute',
        right: 10,
        marginBottom: 30
    },
    carouselContainer: {
        marginTop: 40,
        marginBottom: 0
    },
    eventPhotoContainer: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginHorizontal: 10,
        overflow: 'hidden',
    },
    eventPhoto: {
        width: '100%',
        height: '100%',
    },
    eventName: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});