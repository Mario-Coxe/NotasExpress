import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';
import styles from './styles/CalenderScreenStyle';
import FirstQuarterScreen from './parts/Quater/FirstQuarterScreen';
import SecondQuarterScreen from './parts/Quater/SecondQuarterScreen';
import ThirdQuarterScreen from './parts/Quater/ThirdQuarterScreen';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_800ExtraBold } from "@expo-google-fonts/poppins"


const ResultScreen = () => {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_800ExtraBold
  });


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
      <NavBar
        title="Notas"
        onMenuPress={toggleMenu}
        onBellPress={() => {

        }}
      />

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
