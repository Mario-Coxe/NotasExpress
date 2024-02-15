import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Image } from 'react-native';
import styles from './styles/ScheduleScreenStyle';

const ScheduleScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  const scheduleData = [
    { id: '1', day: 'Segunda', time: '08:00 09:30', subject: 'MT', professor: { name: 'Evandro Eusebio', subject: 'Matemática', isDirector: true, photo: require('../../../../assets/image/users/evandro.jpeg') } },
    { id: '2', day: 'Terça', time: '10:00 11:30', subject: 'HIS', professor: { name: 'José Luis', subject: 'História', isDirector: false, photo: require('../../../../assets/image/users/evandro.jpeg') } },
    { id: '3', day: 'Quarta', time: '12:00 13:30', subject: 'ING', professor: { name: 'Mauro Coxe', subject: 'Inglês', isDirector: false, photo: require('../../../../assets/image/users/evandro.jpeg') } },
    { id: '4', day: 'Quinta', time: '14:00 15:30', subject: 'PT', professor: { name: 'Ronaldo Coxe', subject: 'Português', isDirector: false, photo: require('../../../../assets/image/users/evandro.jpeg') } },
    { id: '5', day: 'Sexta', time: '09:00 10:30', subject: 'GD', professor: { name: 'Isaías Coxe', subject: 'Geografia', isDirector: true, photo: require('../../../../assets/image/users/evandro.jpeg') } },
  ];

  const weekdays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

  const openModal = (professor) => {
    setSelectedProfessor(professor);
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
      <FlatList
        data={scheduleData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <TouchableOpacity style={styles.timeCell}>
              <Text>{item.time}</Text>
            </TouchableOpacity>
            {weekdays.map((day) => (
              <TouchableOpacity
                key={day}
                style={styles.cell}
                onPress={() => openModal(item.professor)}
              >
                {item.day === day && (
                  <Text style={styles.subject}>{item.subject}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeaderText}>Informações do Professor</Text>
            <Image source={selectedProfessor?.photo} style={styles.professorImage} />
            <Text style={styles.professorName}>{selectedProfessor?.name}</Text>
            <View style={styles.professorDetails}>
              {console.log(selectedProfessor?.name)}
              <Text style={styles.professorSubject}>Disciplina: {selectedProfessor?.subject}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ScheduleScreen;
