import React, { useEffect } from "react";
import { View, Image, Text, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./Styles/SplashScreenStyle";
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins"

const SplashScreen = () => {

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const navigation = useNavigation();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);

    return () => clearTimeout(redirectTimeout);
  }, [navigation]);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>

      </View>
    );
  }


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#0077B6"} />
      <Image
        source={require("../../../assets/image/bekawhite.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>
        <Text style={[styles.grayText, { fontFamily: "Poppins_700Bold"}]}>Notas</Text>
        <Text style={[styles.grayText, {fontFamily: "Poppins_700Bold"}]}>Express</Text>
      </Text>
    </View>
  );
};

export default SplashScreen;
