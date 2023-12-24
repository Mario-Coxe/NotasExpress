import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Usando FontAwesome5 para ícones
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import styles from "./Styles/LoginScreenStyle";
import { useFonts, Poppins_700Bold, Poppins_400Regular } from "@expo-google-fonts/poppins"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/authentication/authSlice";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {

  /*
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular
  });

  if(!fontsLoaded){
    return null
  }
  */

  // Use `useSelector` para acessar o estado do Redux
  const user = useSelector((state) => state.auth.user);
  const message = useSelector((state) => state.auth.message);
  const token = useSelector((state) => state.auth.token);



  const [showPassword, setShowPassword] = useState(false);
  const [telefone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await dispatch(login({ password, telefone }));

      console.log("payload",  response.payload)
      // Verifica se o login foi bem-sucedido com base na resposta
      if (
        response.payload &&
        response.payload.message === "User Logged In Successfully"
      ) {
        // Verifica se o type_user é "aluno"
        if (response.payload.user && response.payload.user.type_user === "aluno") {
          // Navega para a tela "Home" se o login for bem-sucedido e o type_user for "aluno"
          navigation.navigate("Home");
        } else {
          // Se o type_user não for "aluno", faça alguma outra coisa ou exiba uma mensagem
          console.error("O tipo de usuário não é aluno:", response.payload.user);
        }
      } else {
        // Lida com outros cenários, se necessário
        console.error("Login não foi bem-sucedido:", response.payload);
      }
    } catch (error) {
      // Lida com erros, se necessário
      console.error("Erro durante o login:", error);
    }
  };



  const handleForgotPassword = () => {

    navigation.navigate("Forgot");

  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.bemvindoText}>Bem-Vindo!</Text>
        <Text style={styles.loginText}>Faça o Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputIconContainer}>
          <FontAwesome5
            name="user"
            size={24}
            color="gray"
            style={styles.inputIcon}
          />
          <TextInput
            style={[
              styles.input,
            ]}
            placeholder="Número"
            onChangeText={(text) => setPhone(text)}
            placeholderTextColor={"gray"}
          />
        </View>
        <View style={styles.inputIconContainer}>
          <AntDesign
            name="lock1"
            size={24}
            color="gray"
            style={styles.inputIcon}
          />
          <TextInput
            style={[
              styles.input,
            ]}
            placeholder="Senha"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor={"gray"}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome5
              name={showPassword ? "eye-slash" : "eye"}
              size={24}
              color="gray"
              style={styles.passwordIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text
            style={[
              styles.forgotPasswordText,
            ]}
          >
            Esqueceu a Senha?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.entrarButton} onPress={handleLogin}>
          <Text
            style={[
              styles.entrarButtonText,
            ]}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="#0077B6" />
    </View>
  );
};

export default LoginScreen;
