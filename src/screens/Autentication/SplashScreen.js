import React, { useEffect } from "react";
import { View, Image, Text, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importe o hook useNavigation
import styles from "./Styles/SplashScreenStyle";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      // Após 3 segundos, navegue para a tela de login
      navigation.navigate("Login");
    }, 3000);

    // Limpe o timeout quando o componente for desmontado
    return () => clearTimeout(redirectTimeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#0077B6"} />
      <Image
        source={require("../../../assets/image/bekawhite.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>
        <Text style={[styles.grayText]}>Notas</Text>
        <Text style={[styles.grayText]}>Express</Text>
      </Text>
    </View>
  );
};

export default SplashScreen;
