import React, { useEffect } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import styles from './Styles/SplashScreenStyle';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#6A5AE0'} />
            <Image
                source={require('../assets/image/bekawhite.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>
                <Text style={styles.whiteText}>Notas</Text>
                <Text style={styles.grayText}>Express</Text>
            </Text>
        </View>
    );
};

export default SplashScreen;
