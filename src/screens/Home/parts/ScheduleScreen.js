import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Image } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import { isWithinInterval, parseISO } from 'date-fns'; // Importe a função isWithinInterval do date-fns
import styles from './styles/ScheduleScreenStyle';

const ScheduleScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  const scheduleData = [
    { id: '6', day: 'Segunda', startTime: '08:00', endTime: '09:30', subject: 'MT', professor: { name: 'Evandro Eusebio', subject: 'Matemática', isDirector: true, photo: require('../../../../assets/image/users/evandro.jpeg') } },
    { id: '1', day: 'Segunda', startTime: '08:00', endTime: '09:30', subject: 'MT', professor: { name: 'Evandro Eusebio', subject: 'Matemática', isDirector: true, photo: require('../../../../assets/image/users/evandro.jpeg') } },
    { id: '2', day: 'Terça', startTime: '10:00', endTime: '11:30', subject: 'HIS', professor: { name: 'José Luis', subject: 'História', isDirector: false, photo: require('../../../../assets/image/users/evandro.jpeg') } },
    { id: '3', day: 'Quarta', startTime: '12:00', endTime: '13:30', subject: 'ING', professor: { name: 'Mauro Coxe', subject: 'Inglês', isDirector: false, photo: require('../../../../assets/image/users/evandro.jpeg') } },
    { id: '4', day: 'Quinta', startTime: '14:00', endTime: '15:30', subject: 'PT', professor: { name: 'Ronaldo Coxe', subject: 'Português', isDirector: false, photo: require('../../../../assets/image/users/evandro.jpeg') } },
    { id: '5', day: 'Sexta', startTime: '09:00', endTime: '10:30', subject: 'GD', professor: { name: 'Isaías Coxe', subject: 'Geografia', isDirector: true, photo: require('../../../../assets/image/users/evandro.jpeg') } },
  ];

  const weekdays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

  const openModal = (item) => {
    setSelectedProfessor(item.professor);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <View style={styles.headerCell}>
          <Text style={styles.headerText}>Horário</Text>
        </View>
        {weekdays.map((day) => (
          <View key={day} style={styles.headerCell}>
            <Text style={styles.headerText}>{day}</Text>
          </View>
        ))}
      </View>
      {scheduleData.map((item) => (
        <View key={item.id} style={styles.row}>
          <TouchableOpacity style={styles.timeCell}>
            <Text>{`${item.startTime} - ${item.endTime}`}</Text>
          </TouchableOpacity>
          {weekdays.map((day) => (
            <TouchableOpacity
              key={day}
              style={styles.cell}
              onPress={() => {
                if (item.day === day && item.subject) { 
                  openModal(item);
                }
              }}
            >
              {item.day === day && (
                <Text style={styles.subject}>{item.subject}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <FontAwesome5 name={"times-circle"} size={22} color="red" />
            </TouchableOpacity>
            {console.log(selectedProfessor?.name)}
            <Image source={selectedProfessor?.photo} style={styles.professorImage} resizeMode="contain" />
            <Text style={styles.professorName}>{selectedProfessor?.name}</Text>
            <Text style={styles.professorSubject}>Disciplina: {selectedProfessor?.subject}</Text>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default ScheduleScreen;
