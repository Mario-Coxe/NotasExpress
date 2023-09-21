import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 150,
        resizeMode: 'contain',
    },
    text: {
        fontSize: 24,
        color: 'white',
        marginTop: 20,
    },
    whiteText: {
        color: '#6A5AE0',
    },
    grayText: {
        color: '#B2A8FF',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        height: 50,
        marginTop: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#858585'
    },
    showPasswordIcon: {
        position: 'absolute',
        top: 30,
        right: 10,
    },
    button: {
        backgroundColor: '#6A5AE0',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        marginTop: 20,
        height: 50,
        borderRadius: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    forgotPassword: {
        color: '#000',
        marginTop: 20,
    },
    forgotPasswordText: {
        color: '#000',
        marginTop: 20,
        fontSize: 15
    },
});