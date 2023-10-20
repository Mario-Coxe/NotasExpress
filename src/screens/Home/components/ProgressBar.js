import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

const ProgressBar = ({ nota, notaMaxima }) => {
  const percentual = (nota / notaMaxima) * 100;

  return (
    <View style={styles.container}>
      <Svg width="100" height="100">
        <Circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="#ddd"
          strokeWidth="10"
          fill="transparent"
        />
        <Circle
          cx="50%"
          cy="50%"
          r="45%"
          stroke="#0077B6"
          strokeWidth="10"
          strokeDasharray={`${percentual} ${100 - percentual}`}
          strokeLinecap="round"
          fill="transparent"
        />
      </Svg>
      <Text style={styles.notaText}>{nota}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  notaText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProgressBar;
