import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0077B6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 150, 
        height: 150,
        resizeMode: 'contain', 
    },
    text: {
        fontSize: 24,
        color: 'white',
        marginTop: 1,
    },
    grayText: {
        color: '#000',
        fontSize: 15
    },
});
