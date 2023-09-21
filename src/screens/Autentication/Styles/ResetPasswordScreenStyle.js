import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    input: {
        flex: 1,
        height: 50,
        paddingLeft: 10,
        color: '#000',
        fontSize: 15
    },
    showPasswordIcon: {
        padding: 10,
    },
    button: {
        width: '90%',
        backgroundColor: '#6A5AE0',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        height: 50
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
});