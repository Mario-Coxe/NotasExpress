import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
import '../components/localeConfig';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles/SchoolCalendarScreenStyle';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { useSelector } from 'react-redux';
import { API_URL } from '../../../../application.properties';

const SchoolCalendarScreen = () => {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  //const calender = useSelector((state) => state.calender.calender);

  const [markedDates, setMarkedDates] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const student = useSelector((state) => state.student.student);
  const [calender, setCalender] = useState([]);


  const handleDayPress = (day) => {
    if (markedDates[day.dateString]) {
      setSelectedDate(day.dateString);
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_URL}calender/${student.team_id}/${student.class_id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Erro ao obter calender');
        }
        const data = await response.json();
        setCalender(data.calender);

        //console.log(calender)
      } catch (error) {
        console.log('Erro ao obter calender:', error.message);
      }
    };

    fetchEvents();

  }, [student.team_id, student.class_id]);

  useEffect(() => {
    const updatedMarkedDates = {};
    calender.forEach(event => {
      updatedMarkedDates[event.data_day] = {
        marked: true,
        description: event.description,
      };
    });
    setMarkedDates(updatedMarkedDates);
  }, [calender]);






  if (!fontsLoaded) {
    return (
      <View style={styles.container}>

      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={markedDates}
        onDayPress={handleDayPress}
        hideExtraDays={true}
        renderDay={(date, item) => {
          if (item.marked) {
            return (
              <View style={styles.customDayContainer}>
                <View style={styles.customDayCircle}>
                  <Text style={[styles.customDayText, { fontFamily: "Poppins_400Regular" }]}>{date.day}</Text>
                </View>
              </View>
            );
          }
          return <Text style={styles.defaultDayText}>{date.day}</Text>;
        }}
      />
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={closeModal}
        backdropOpacity={0.1}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={[styles.modalTitle, { fontFamily: "Poppins_600SemiBold" }]}>Detalhes da Data</Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <FontAwesome name="times" size={23} color="red" />
            </TouchableOpacity>
          </View>
          <Text style={[styles.modalDescription, { fontFamily: "Poppins_400Regular" }]}>
            {markedDates[selectedDate]?.description}
          </Text>
        </View>
      </Modal>
    </View>
  );
};

export default SchoolCalendarScreen;
