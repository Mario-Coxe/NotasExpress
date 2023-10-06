import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NavBar from './parts/NavBar';
import SideMenu from './parts/SideMenu';
import SchoolCalendarScreen from './parts/SchoolCalendarScreen';
import NavigationButton from './parts/NavigationButton';
import ScheduleScreen from './parts/ScheduleScreen';
import EventScreen from './parts/EventScreen';

const CalendarScreen = () => {
  const [selectedItem, setSelectedItem] = useState('ESCOLA'); // Use a mesma variável para rastrear a seleção
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (route) => {
    // Certifique-se de que você tem a variável 'navigation' disponível aqui
    // navigation.navigate(route);
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
          // Lidar com o pressionamento do ícone do sino, se necessário
        }}
      />

      <SideMenu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        onMenuItemClick={handleMenuItemClick}
      />

      <View style={styles.topBar}>
        {renderTabItem('PROFESSOR', 'Horário')}
        {renderTabItem('ESCOLA', 'Calendário')}
        {renderTabItem('EVENTO', 'Eventos')}
      </View>

      {selectedItem === 'ESCOLA' && <SchoolCalendarScreen />}
      {selectedItem === 'PROFESSOR' && <ScheduleScreen />}
      {selectedItem === 'EVENTO' && <EventScreen />}

      <View style={styles.NavigationButton}>
        <NavigationButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  NavigationButton: {
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  item: {
    paddingVertical: 10,
  },
  selectedItem: {
    borderBottomWidth: 3,
    borderColor: '#0077B6',
  },
  eventText: {
    fontSize: 16,
    color: '#000',
  },
});

export default CalendarScreen;
