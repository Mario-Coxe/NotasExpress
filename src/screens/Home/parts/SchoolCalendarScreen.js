import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Modal from 'react-native-modal';
import '../components/localeConfig';
import { FontAwesome } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  customDayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  customDayCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customDayText: {
    color: 'white',
    fontSize: 16,
  },
  defaultDayText: {
    fontSize: 16,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalDescription: {
    fontSize: 16,
  },
  modalCloseButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default SchoolCalendarScreen;
