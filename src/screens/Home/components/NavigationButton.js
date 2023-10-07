import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5, FontAwesome, AntDesign } from '@expo/vector-icons';
import styles from '../parts/styles/NavigationButtonStyle';

const NavigationButton = ({ onPressHome, onPressChat, onPressProfile }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPressHome}>
        <AntDesign name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressChat}>
        <FontAwesome5 name="comment" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressProfile}>
        <AntDesign name="user" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};


export default NavigationButton;
