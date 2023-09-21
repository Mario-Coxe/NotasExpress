import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './Styles/LoginScreenStyle'
import { StatusBar } from 'expo-status-bar';

const LoginScreen = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#fff' />
            <Image
                source={require('../../../assets/image/bekablue.png')}
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
                    placeholderTextColor={'gray'}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor={'gray'}
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
            <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotPasswordText}>Esqueci a minha senha!</Text>
            </TouchableOpacity>
        </View >
    );
};

export default LoginScreen;
