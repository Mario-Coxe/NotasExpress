import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Fontisto, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import styles from './Styles/OTPScreenStyle';
import { useNavigation } from '@react-navigation/native';

const OTPScreen = () => {
  
  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);
  const navigation = useNavigation()

  const handleSendOtp = () => {
    navigation.navigate("Reset")
  };

  const handleOtpInputChange = (text, index) => {
    if (text.length === 1 && index < 3) {
      otpInputRefs[index + 1].focus();
    }
    const newOtpDigits = [...otpDigits];
    newOtpDigits[index] = text;
    setOtpDigits(newOtpDigits);
  };

  const otpInputRefs = [];

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={[styles.bemvindoText]}>
          Verificação de OTP
        </Text>
        <Text style={[styles.loginText]}>
          Digite o código de verificação de 4 dígitos
        </Text>
        <Text style={[styles.loginText]}>
          enviando para <Text style={[styles.loginText]}>+244 000000000</Text>
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
              style={[styles.otpInput]}
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
          <Text style={[styles.entrarButtonText]}>
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="#0077B6" />
    </View>
  );
};

export default OTPScreen;
