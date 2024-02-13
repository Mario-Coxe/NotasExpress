import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from '../styles/HomeScreenStyle';
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins"


const NavBar = ({ title, onMenuPress, onBellPress, notificationsCount }) => {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>

      </View>
    );
  }


  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.menuIcon} onPress={onMenuPress}>
        <FontAwesome5 name="bars" size={24} color="white" />
      </TouchableOpacity>

      <Text style={[styles.titleText, { fontFamily: "Poppins_700Bold" }]}>{title}</Text>

      <TouchableOpacity style={styles.notificationIcon} onPress={onBellPress}>
        <FontAwesome5 name="bell" size={24} color="white" />
        {notificationsCount > 0 && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>{notificationsCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};


export default NavBar;
