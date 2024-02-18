import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import styles from './styles/ScheduleScreenStyle';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { useDispatch, useSelector } from "react-redux";
import { fetchHorarioTeamIdAndClass } from './../../../features/horario/horarioSlice';

const ScheduleScreen = () => {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const schedule = useSelector((state) => state.schedule.schedule);
  const student = useSelector((state) => state.student.student);
  const user = useSelector((state) => state.auth.user);


  console.log(schedule)


  useEffect(() => {


    dispatch(
      fetchHorarioTeamIdAndClass({
        team_id: user.team_id,
        class_id: student.class_id,

      }),
    ).then((result) => {
      //console.log("Resultado:",result);
    });


  }, [dispatch, user, student]);

  const weekdays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

  const openModal = (item) => {
    setSelectedProfessor(item.professor);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  if (!fontsLoaded) {
    return (
      <View style={styles.container}>

      </View>
    );
  }

  const scheduleData = schedule.map(item => {
    return {
      id: item.id.toString(),
      day: item.day_of_week,
      startTime: item.start_time,
      endTime: item.end_time,
      subject: item.disciplinas.name,
      abbreviation: item.abbreviation,
      professor: {
        name: item.disciplinas.responsible_professor_id,
        subject: item.disciplinas.name,
        photo: require('../../../../assets/image/users/evandro.jpeg') 
      }
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <View style={styles.headerCell}>
          <Text style={[styles.headerText, { fontFamily: "Poppins_400Regular" }]}>Horário</Text>
        </View>
        {weekdays.map((day) => (
          <View key={day} style={styles.headerCell}>
            <Text style={[styles.headerText, { fontFamily: "Poppins_400Regular" }]}>{day}</Text>
          </View>
        ))}
      </View>
      {scheduleData.map((item) => (
        <View key={item.id} style={styles.row}>
          <TouchableOpacity style={styles.timeCell}>
            <Text style={{ fontFamily: "Poppins_400Regular", color: "#000" }}>{`${item.startTime}   ${item.endTime}`}</Text>
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
                <Text style={[styles.subject, { fontFamily: "Poppins_600SemiBold" }]}>{item.abbreviation}</Text>
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
            <Text style={[styles.professorName, { fontFamily: "Poppins_600SemiBold" }]}>{selectedProfessor?.name}</Text>
            <Text style={[styles.professorSubject, { fontFamily: "Poppins_600SemiBold" }]}>Disciplina: <Text style={{ fontFamily: "Poppins_400Regular", color: "#000", fontSize: 15 }}>{selectedProfessor?.subject}</Text> </Text>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default ScheduleScreen;
