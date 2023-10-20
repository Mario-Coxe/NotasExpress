import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';
import SchoolCalendarScreen from './parts/SchoolCalendarScreen';
import NavigationButton from './components/NavigationButton';
import ScheduleScreen from './parts/ScheduleScreen';
import EventScreen from './parts/EventScreen';
import styles from './styles/CalenderScreenStyle';
import FirstQuarterScreen from './parts/FirstQuarterScreen';

const ResultScreen = () => {
  const [selectedItem, setSelectedItem] = useState('CalendarScreen'); // Use a mesma variável para rastrear a seleção
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
      <Text style={styles.eventText}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <NavBar
        title="Notas"
        onMenuPress={toggleMenu}
        onBellPress={() => {
          //
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
      {selectedItem === 'ScheduleScreen' && <ScheduleScreen />}
      {selectedItem === 'EventScreen' && <EventScreen />}
      
      {/* <View style={styles.NavigationButton}>
        <NavigationButton />
      </View> */}
    </View>
  );
};


export default ResultScreen;
