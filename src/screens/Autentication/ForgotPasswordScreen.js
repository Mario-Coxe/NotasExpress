import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './Styles/ForgotPasswordScreenStyle'

const ForgotPasswordScreen = () => {
  const [BI, setBI] = React.useState('');

  const handleResetPassword = () => {

  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#ffffff' />
      <Text style={styles.title}>Esqueci a senha</Text>
      <Text style={styles.description}>
        Insira o seu número do <Text style={[styles.description, {color: '#6A5AE0'}]}>BI </Text>para redefinir a senha.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Número do BI"
        placeholderTextColor="gray"
        value={BI}
        onChangeText={(text) => setBI(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Redefinir Senha</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;
