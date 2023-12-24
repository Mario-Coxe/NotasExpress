/** @format */

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Usando FontAwesome5 para ícones
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import styles from "./Styles/LoginScreenStyle";
import { useNavigation } from "@react-navigation/native";

const ResetPasswordScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation() 

  const handleLogin = () => {
    navigation.navigate("Login")
  };

  const handleForgotPassword = () => {

  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={[styles.bemvindoText]}>Redefinir Senha</Text>
        <Text style={[styles.loginText]}>
          Digite seu novo senha nos campos abaixo
        </Text>
        <Text style={[styles.loginText]}>
          e clique em Redefinir Senha para concluir
        </Text>
        <Text style={[styles.loginText]}>
          o processo de redefinição de senha
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputIconContainer}>
          <AntDesign
            name='lock1'
            size={24}
            color='gray'
            style={styles.inputIcon}
          />
          <TextInput
            style={[styles.input]}
            placeholder='Senha'
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor={"gray"}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome5
              name={showPassword ? "eye-slash" : "eye"}
              size={24}
              color='gray'
              style={styles.passwordIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputIconContainer}>
          <AntDesign
            name='lock1'
            size={24}
            color='gray'
            style={styles.inputIcon}
          />
          <TextInput
            style={[styles.input]}
            placeholder='Confirmar Senha'
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor={"gray"}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome5
              name={showPassword ? "eye-slash" : "eye"}
              size={24}
              color='gray'
              style={styles.passwordIcon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.entrarButton} onPress={handleLogin}>
          <Text style={[styles.entrarButtonText]}>Redefinir Senha</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='#0077B6' />
    </View>
  );
};

export default ResetPasswordScreen;
