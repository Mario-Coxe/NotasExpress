/** @format */

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Fontisto, AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import styles from "./Styles/ForgotPasswordScreenStyle";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  const handleSendEmail = () => {
    navigation.navigate("OTP");
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={[styles.bemvindoText]}>Esqueceu a senha?</Text>
        <Text style={[styles.loginText]}>Digite seu número de telefone </Text>
        <Text style={[styles.loginText]}>e enviaremos instruções para</Text>
        <Text style={[styles.loginText]}>redefinir sua senha </Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={24} color='#fff' />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputIconContainer}>
          <Fontisto
            name='phone'
            size={22}
            color='gray'
            style={styles.inputIcon}
          />
          <TextInput
            style={[styles.input]}
            placeholder='000-000-000'
            onChangeText={(text) => setPhone(text)}
            placeholderTextColor={"gray"}
          />
        </View>

        <TouchableOpacity style={styles.entrarButton} onPress={handleSendEmail}>
          <Text style={[styles.entrarButtonText]}>Enviar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='#0077B6' />
    </View>
  );
};

export default ForgotPasswordScreen;
