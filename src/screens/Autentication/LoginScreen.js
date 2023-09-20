import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/image/bekablue.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>
                <Text style={styles.whiteText}>Notas</Text>
                <Text style={styles.grayText}>Express</Text>
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Número do BI"
                    placeholderTextColor={'#B2A8FF'}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor={'#B2A8FF'}
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                    style={styles.showPasswordIcon}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <FontAwesome
                        name={showPassword ? 'eye' : 'eye-slash'}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueci a senha</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
        height: 50,
        marginTop: 20,
        borderRadius: 15,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    forgotPassword: {
        color: 'white',
        marginTop: 20,
    },
});

export default LoginScreen;
