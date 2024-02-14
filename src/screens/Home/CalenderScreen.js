import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';
import SchoolCalendarScreen from './parts/SchoolCalendarScreen';
import NavigationButton from './components/NavigationButton';
import ScheduleScreen from './parts/ScheduleScreen';
import EventScreen from './parts/EventScreen';
import styles from './styles/CalenderScreenStyle';
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins"
import { fetchCalenderTeamIdAndClass } from '../../features/calender/calenderSlice';
import { useDispatch, useSelector } from "react-redux";

const CalendarScreen = () => {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const student = useSelector((state) => state.student.student);


  useEffect(() => {
    if (user) {
      dispatch(
        fetchCalenderTeamIdAndClass({
          team_id: student.team_id,
          class_id: student.class_id,
        }),
      ).then((result) => {
        //console.log("Calendarios:", result);
      });
    }
  }, [dispatch, user]);


  const [selectedItem, setSelectedItem] = useState('ScheduleScreen');
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
      <Text style={[styles.eventText, { fontFamily: "Poppins_400Regular" }]}>{text}</Text>
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
