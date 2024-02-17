import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SideMenu from './components/SideMenu';
import styles from './styles/CalenderScreenStyle';
import FirstQuarterScreen from './parts/Quater/FirstQuarterScreen';
import SecondQuarterScreen from './parts/Quater/SecondQuarterScreen';
import ThirdQuarterScreen from './parts/Quater/ThirdQuarterScreen';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_800ExtraBold } from "@expo-google-fonts/poppins"
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
const ResultScreen = () => {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_800ExtraBold
  });

  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState('FirstQuarter');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (route) => {

  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const renderTabItem = (item, text) => (
    <TouchableOpacity
      style={[styles.item, selectedItem === item && styles.selectedItem]}
      onPress={() => handleItemClick(item)}
    >
      <Text style={[styles.eventText, { fontFamily: "Poppins_600SemiBold" }]}>{text}</Text>
    </TouchableOpacity>
  );

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>

      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={[styles.bemvindoText, { fontFamily: "Poppins_800ExtraBold" }]}>Notas</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={24} color='#fff' />
        </TouchableOpacity>
      </View>

      <SideMenu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        onMenuItemClick={handleMenuItemClick}
      />

      <View style={styles.topBar}>
        {renderTabItem('FirstQuarter', '1º Trimestre')}
        {renderTabItem('SecondQuarter', '2º Trimestre')}
        {renderTabItem('ThirdQuarter', '3º Trimestre')}
      </View>

      {selectedItem === 'FirstQuarter' && <FirstQuarterScreen />}
      {selectedItem === 'SecondQuarter' && <SecondQuarterScreen />}
      {selectedItem === 'ThirdQuarter' && <ThirdQuarterScreen />}

      {/* <View style={styles.NavigationButton}>
        <NavigationButton />
      </View> */}
    </View>
  );
};


export default ResultScreen;
