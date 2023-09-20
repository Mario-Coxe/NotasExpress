import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6A5AE0',
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
    whiteText: {
        color: '#FFFFFF',
    },
    grayText: {
        color: '#B2A8FF'
    },
});
