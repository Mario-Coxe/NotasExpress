import React, { useEffect } from "react";
import { View, Image, Text, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import styles from "./Styles/SplashScreenStyle";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);

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
