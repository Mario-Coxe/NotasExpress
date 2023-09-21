import React, { useEffect } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import styles from './Styles/SplashScreenStyle';
import { useFonts } from 'expo-font';


const SplashScreen = () => {

    const [isLoaded] = useFonts({
        "mrt-bold": require("../../../assets/fonts/Montserrat-Bold.ttf"),
    });

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#6A5AE0'} />
            <Image
                source={require('../../../assets/image/bekawhite.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>
                <Text style={[styles.whiteText, { fontFamily: 'mrt-bold' }]}>Notas</Text>
                <Text style={styles.grayText}>Express</Text>
            </Text>
        </View>
    );
};

export default SplashScreen;
