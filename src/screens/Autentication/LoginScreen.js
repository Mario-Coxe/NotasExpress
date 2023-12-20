import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Usando FontAwesome5 para ícones
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import styles from './Styles/LoginScreenStyle';
import { useFonts } from 'expo-font';


const LoginScreen = () => {

    const [fontsLoaded, fontError] = useFonts({
        'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
    });



    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    };

    const handleForgotPassword = () => {

    };

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Text style={[styles.bemvindoText, { fontFamily: fontsLoaded ? 'Poppins-Bold' : 'Arial' }]}>Bem-Vindo!</Text>
                <Text style={[styles.loginText, { fontFamily: fontsLoaded ? 'Poppins-Bold' : 'Arial' }]}>Faça o Login</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputIconContainer}>
                    <FontAwesome5 name="user" size={24} color="gray" style={styles.inputIcon} />
                    <TextInput
                        style={[styles.input, { fontFamily: 'Poppins-Bold' }]}
                        placeholder="E-mail"
                        onChangeText={text => setUsername(text)}
                        placeholderTextColor={'gray'}
                    />
                </View>
                <View style={styles.inputIconContainer}>
                    <AntDesign name="lock1" size={24} color="gray" style={styles.inputIcon} />
                    <TextInput
                        style={[styles.input, { fontFamily: 'Poppins-Bold' }]}
                        placeholder="Senha"
                        secureTextEntry={!showPassword}
                        onChangeText={text => setPassword(text)}
                        placeholderTextColor={'gray'}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <FontAwesome5
                            name={showPassword ? 'eye-slash' : 'eye'}
                            size={24}
                            color="gray"
                            style={styles.passwordIcon}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={[styles.forgotPasswordText, { fontFamily: 'Poppins-Bold' }]}>
                        Esqueceu a Senha?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.entrarButton} onPress={handleLogin}>
                    <Text style={[styles.entrarButtonText, { fontFamily: 'Poppins-Bold' }]}>Entrar</Text>
                </TouchableOpacity>

            </View>
            <StatusBar style="#0077B6" />
        </View>
    );
};

export default LoginScreen;
