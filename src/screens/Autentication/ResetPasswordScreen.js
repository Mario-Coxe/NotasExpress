import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome from expo/vector-icons
import { StatusBar } from 'expo-status-bar';
import styles from './Styles/ResetPasswordScreenStyle'

const ResetPasswordScreen = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle password visibility
    };

    const handleResetPassword = () => {

    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#ffffff'}/>
            <Text style={styles.title}>Redefinir Senha</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nova Senha"
                    placeholderTextColor="gray"
                    secureTextEntry={!showPassword} // Show/hide password based on state
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity
                    style={styles.showPasswordIcon}
                    onPress={handleTogglePasswordVisibility}
                >
                    <FontAwesome
                        name={showPassword ? 'eye' : 'eye-slash'}
                        size={24}
                        color="black"
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    placeholderTextColor="gray"
                    secureTextEntry={!showPassword} // Show/hide password based on state
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                />
                <TouchableOpacity
                    style={styles.showPasswordIcon}
                    onPress={handleTogglePasswordVisibility}
                >

                </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                <Text style={styles.buttonText}>Redefinir Senha</Text>
            </TouchableOpacity>
        </View>
    );
};



export default ResetPasswordScreen;
