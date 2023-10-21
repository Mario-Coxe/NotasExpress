import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';
import '../components/localeConfig';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles/SchoolCalendarScreenStyle'

const SchoolCalendarScreen = () => {
  const [markedDates, setMarkedDates] = useState({
    '2023-10-05': { marked: true, description: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, pelas 10h' },
    '2023-10-10': { marked: true, description: 'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, elas 10h' },
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleDayPress = (day) => {
    if (markedDates[day.dateString]) {
      setSelectedDate(day.dateString);
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

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
                  <Text style={styles.customDayText}>{date.day}</Text>
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
            <Text style={styles.modalTitle}>Detalhes da Data</Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <FontAwesome name="times" size={24} color="#8B0000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.modalDescription}>
            {markedDates[selectedDate]?.description}
          </Text>
        </View>
      </Modal>
    </View>
  );
};


export default SchoolCalendarScreen;
