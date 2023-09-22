import React, { useEffect } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import styles from './Styles/SplashScreenStyle';
import { loadFonts } from '../../../assets/fonts/Fonts';



const SplashScreen = () => {

    useEffect(() => {
        loadFonts();
      }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#0077B6'} />
            <Image
                source={require('../../../assets/image/bekawhite.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>
                <Text style={[styles.grayText, { fontFamily: 'bold' }]}>Notas</Text>
                <Text style={[styles.grayText, { fontFamily: 'bold' }]}>Express</Text>
            </Text>
        </View>
    );
};

export default SplashScreen;
