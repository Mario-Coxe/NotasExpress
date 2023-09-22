import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Usando FontAwesome5 para ícones
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { loadFonts } from '../../../assets/fonts/Fonts';
import styles from './Styles/LoginScreenStyle';


const LoginScreen = () => {

    useEffect(() => {
        loadFonts();
    }, []);


    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Aqui você pode adicionar a lógica de autenticação
        // para verificar o nome de usuário e a senha.
    };

    const handleForgotPassword = () => {
        // Adicione a lógica para lidar com a recuperação de senha aqui.
    };




    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Text style={[styles.bemvindoText, { fontFamily: 'bold' }]}>Bem-Vindo!</Text>
                <Text style={[styles.loginText, { fontFamily: 'regular' }]}>Faça o Login</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputIconContainer}>
                    <FontAwesome5 name="user" size={24} color="gray" style={styles.inputIcon} />
                    <TextInput
                        style={[styles.input, { fontFamily: 'regular' }]}
                        placeholder="E-mail"
                        onChangeText={text => setUsername(text)}
                        placeholderTextColor={'gray'}
                    />
                </View>
                <View style={styles.inputIconContainer}>
                    <AntDesign name="lock1" size={24} color="gray" style={styles.inputIcon} />
                    <TextInput
                        style={[styles.input, { fontFamily: 'regular' }]}
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
                    <Text style={[styles.forgotPasswordText, { fontFamily: 'regular' }]}>
                        Esqueceu a Senha?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.entrarButton} onPress={handleLogin}>
                    <Text style={[styles.entrarButtonText, {fontFamily: 'bold'}]}>Entrar</Text>
                </TouchableOpacity>

            </View>
            <StatusBar style="#0077B6" />
        </View>
    );
};

export default LoginScreen;
