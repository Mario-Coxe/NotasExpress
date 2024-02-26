import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import styles from './styles/ScheduleScreenStyle';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { useDispatch, useSelector } from "react-redux";
import { fetchHorarioTeamIdAndClass } from './../../../features/horario/horarioSlice';
import { API_URL } from '../../../../application.properties';
import { URL_BACKOFFICE } from '../../../../application.properties';
const ScheduleScreen = () => {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  //const schedule = useSelector((state) => state.schedule.schedule);
  const student = useSelector((state) => state.student.student);
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);
  const [schedule, setSchedule] = useState([]);
  const [professor, setProfessor] = useState([]);
  const defaultImageUrl = `${URL_BACKOFFICE}/storage/student-images/default.png`;


  //console.log(schedule)

  // useEffect(() => {


  //   dispatch(
  //     fetchHorarioTeamIdAndClass({
  //       team_id: user.team_id,
  //       class_id: student.class_id,

  //     }),
  //   ).then((result) => {
  //     //console.log("Resultado:",result);
  //   });



  // }, [dispatch, user, student]);


  useEffect(() => {

    const fetchScheduleAndProfessor = async () => {
      try {
        const scheduleResponse = await fetch(`${API_URL}horarios/${user.team_id}/${student.class_id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!scheduleResponse.ok) {
          throw new Error('Erro ao obter horario');
        }
        const scheduleData = await scheduleResponse.json();
        setSchedule(scheduleData.schedules);

        // Obtendo o id do professor responsável pela primeira disciplina do horário
        const firstSchedule = scheduleData.schedules[0];
        const professorResponse = await fetch(`${API_URL}professor/${user.team_id}/${firstSchedule.disciplinas.responsible_professor_id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!professorResponse.ok) {
          throw new Error('Erro ao obter informações do professor');
        }
        const professorData = await professorResponse.json();
        setProfessor(professorData.professor);

        ///console.log(professor)

      } catch (error) {
        console.error('Erro ao obter horário e informações do professor:', error.message);
      }
    };

    fetchScheduleAndProfessor();

  }, [user.team_id, student.class_id]);



  const weekdays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

  const openModal = (item) => {
    setSelectedProfessor(item.professor);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  //console.log(selectedProfessor)

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>

      </View>
    );
  }

  //console.log(professor)
  const scheduleData = schedule ? schedule.map(item => {

    const foundProfessor = professor.find(prof => prof.id === item.disciplinas.responsible_professor_id);


    let photoUrl = defaultImageUrl;

    if (foundProfessor) {
      photoUrl = `${URL_BACKOFFICE}storage/${foundProfessor.photo}`;
    }

    return {
      id: item.id.toString(),
      day: item.day_of_week,
      startTime: item.start_time,
      endTime: item.end_time,
      subject: item.disciplinas.name,
      abbreviation: item.disciplinas.abbreviation,
      professor: {
        name: foundProfessor ? foundProfessor.name : '',
        subject: item.disciplinas.name,
        photo: { uri: photoUrl },
        email: foundProfessor?.email,
        phone_number: foundProfessor?.phone_number,
      }
    };
  }) : [];





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
            <Image source={selectedProfessor?.photo} style={styles.professorImage} resizeMode="contain" />
            <Text style={[styles.professorName, { fontFamily: "Poppins_600SemiBold" }]}>{selectedProfessor?.name}</Text>
            <Text style={[styles.professorSubject, { fontFamily: "Poppins_600SemiBold" }]}>Disciplina: <Text style={{ fontFamily: "Poppins_400Regular", color: "#000", fontSize: 15 }}>{selectedProfessor?.subject}</Text> </Text>
            <Text style={[styles.professorSubject, { fontFamily: "Poppins_600SemiBold" }]}>Telefone: <Text style={{ fontFamily: "Poppins_400Regular", color: "#000", fontSize: 15 }}>{selectedProfessor?.phone_number}</Text> </Text>
            <Text style={[styles.professorSubject, { fontFamily: "Poppins_600SemiBold" }]}>Email: <Text style={{ fontFamily: "Poppins_400Regular", color: "#000", fontSize: 15 }}>{selectedProfessor?.email}</Text> </Text>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default ScheduleScreen;
