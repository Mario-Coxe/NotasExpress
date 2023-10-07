import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';
import SchoolCalendarScreen from './parts/SchoolCalendarScreen';
import NavigationButton from './components/NavigationButton';
import ScheduleScreen from './parts/ScheduleScreen';
import EventScreen from './parts/EventScreen';
import styles from './styles/CalenderScreenStyle';

const CalendarScreen = () => {
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
        title="Calendário"
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
        {renderTabItem('ScheduleScreen', 'Horário')}
        {renderTabItem('CalendarScreen', 'Calendário')}
        {renderTabItem('EventScreen', 'Eventos')}
      </View>

      {selectedItem === 'CalendarScreen' && <SchoolCalendarScreen />}
      {selectedItem === 'ScheduleScreen' && <ScheduleScreen />}
      {selectedItem === 'EventScreen' && <EventScreen />}

      <View style={styles.NavigationButton}>
        <NavigationButton />
      </View>
    </View>
  );
};


export default CalendarScreen;
