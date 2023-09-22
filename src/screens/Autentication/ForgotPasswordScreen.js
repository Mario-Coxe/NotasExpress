import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Button } from 'react-native';
import { Fontisto, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { loadFonts } from '../../../assets/fonts/Fonts';
import styles from './Styles/ForgotPasswordScreenStyle';


const ForgotPasswordScreen = () => {

  useEffect(() => {
    loadFonts();
  }, []);

  const [username, setUsername] = useState('');
  const handleSendEmail = () => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={[styles.bemvindoText, { fontFamily: 'bold' }]}>Esqueceu a senha?</Text>
        <Text style={[styles.loginText, { fontFamily: 'regular' }]}>Digite seu endereço de e-mail </Text>
        <Text style={[styles.loginText, { fontFamily: 'regular' }]}>e enviaremos instruções para</Text>
        <Text style={[styles.loginText, { fontFamily: 'regular' }]}>redefinir sua senha </Text>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>

      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputIconContainer}>
          <Fontisto name="email" size={24} color="gray" style={styles.inputIcon} />
          <TextInput
            style={[styles.input, { fontFamily: 'regular' }]}
            placeholder="E-mail"
            onChangeText={text => setUsername(text)}
            placeholderTextColor={'gray'}
          />
        </View>

        <TouchableOpacity style={styles.entrarButton} onPress={handleSendEmail}>
          <Text style={[styles.entrarButtonText, { fontFamily: 'bold' }]}>Enviar</Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="#0077B6" />
    </View>
  );
};

export default ForgotPasswordScreen;
