import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Fontisto, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { loadFonts } from '../../../assets/fonts/Fonts';
import styles from './Styles/OTPScreenStyle';

const ResetPasswordScreen = () => {
  useEffect(() => {
    loadFonts();
  }, []);

  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);

  const handleSendOtp = () => {
    // Enviar o código OTP para verificação aqui
  };

  const handleOtpInputChange = (text, index) => {
    if (text.length === 1 && index < 3) {
      // Focus no próximo campo de entrada quando um dígito é inserido
      otpInputRefs[index + 1].focus();
    }
    const newOtpDigits = [...otpDigits];
    newOtpDigits[index] = text;
    setOtpDigits(newOtpDigits);
  };

  // Referências para os campos de entrada de texto
  const otpInputRefs = [];

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={[styles.bemvindoText, { fontFamily: 'bold' }]}>
          Verificação de OTP
        </Text>
        <Text style={[styles.loginText, { fontFamily: 'regular' }]}>
          Digite o código de verificação de 4 dígitos
        </Text>
        <Text style={[styles.loginText, { fontFamily: 'regular' }]}>
          enviando para <Text style={[styles.loginText, { fontFamily: 'bold' }]}>mariocoxedev@gmail.com</Text>
        </Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.otpInputContainer}>
          {otpDigits.map((digit, index) => (
            <TextInput
              key={index}
              style={[styles.otpInput, { fontFamily: 'regular' }]}
              placeholder="0"
              placeholderTextColor={'gray'}
              maxLength={1}
              keyboardType="numeric"
              value={digit}
              onChangeText={(text) => handleOtpInputChange(text, index)}
              ref={(input) => (otpInputRefs[index] = input)}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.entrarButton} onPress={handleSendOtp}>
          <Text style={[styles.entrarButtonText, { fontFamily: 'bold' }]}>
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="#0077B6" />
    </View>
  );
};

export default ResetPasswordScreen;
