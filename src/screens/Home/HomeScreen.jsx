/** @format */

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import Carousel from "react-native-snap-carousel";
import NavigationButton from "./components/NavigationButton";
import SideMenu from "./components/SideMenu";
import eventData from "./request/Events";
import styles from "./styles/HomeScreenStyle";
import NavBar from "./components/NavBar";
import AcademicOptionsModal from "./parts/AcademicOptionsModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentByTeamIdAndTelefone } from "../../features/student/studentSlice";
import { fetchEventByTeamId } from "../../features/event/eventSlice";
import { URL_BACKOFFICE } from "../../../application.properties";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [notificationsCount, setNotificationsCount] = useState(6);

  const user = useSelector((state) => state.auth.user);
  const message = useSelector((state) => state.auth.message);
  const token = useSelector((state) => state.auth.token);
  const student = useSelector((state) => state.student.student);
  const events = useSelector((state) => state.events.events);



  console.log(URL_BACKOFFICE)
  const defaultImageUrl = `${URL_BACKOFFICE}/storage/student-images/default.png`;


  useEffect(() => {
    if (user) {
      dispatch(
        fetchStudentByTeamIdAndTelefone({
          team_id: user.team_id,
          phone_number: user.phone_number,
        }),



      ).then((result) => {
        //console.log("Resultado:",result);
      });

      /*
      dispatch(
        fetchEventByTeamId({
          team_id: user.team_id,
        })
      )
      */

    }
  }, [dispatch, user]);



  const fetchData = async () => {
    try {
      if (user) {
        const response = await dispatch(fetchEventByTeamId({
          team_id: user.team_id,
        }));
        console.log('Eventos atualizados:', response.payload.data.events);
      }
    } catch (error) {
    } finally {
      setTimeout(fetchData, 10 * 60 * 1000);
    }
  };

  useEffect(() => {
    fetchData();

    return () => clearTimeout();
  }, [dispatch, user]);

  const updateNotifications = (newCount) => {
    setNotificationsCount(newCount);
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const academicOptions = [
    { id: "1", icon: "question-circle", text: "Quiz" },
    { id: "2", icon: "book", text: "Homework" },
    { id: "3", icon: "calendar-alt", text: "Calendário" },
    { id: "4", icon: "book-open", text: "Biblioteca" },
    { id: "5", icon: "file-alt", text: "Notas" },
    { id: "6", icon: "question", text: "Ajuda" },
  ];


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (route) => {
    navigation.navigate(route);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderEventPhoto = ({ item }) => (
    <TouchableOpacity style={styles.eventPhotoContainer}>
      <Image
        source={{ uri: `${URL_BACKOFFICE}storage/${item?.photo}` }}
      style = { styles.eventPhoto }
  resizeMode = 'cover'
    />
    <Text style={styles.eventName}>{item.theme}</Text>
    </TouchableOpacity >
  );

return (
  <View style={styles.container}>
    {/* Barra de navegação */}
    <NavBar
      title='NotasExpress'
      notificationsCount={notificationsCount} // Adicione esta linha
      onMenuPress={toggleMenu}
      onBellPress={() => { }}
    />

    <SideMenu
      isOpen={isMenuOpen}
      onClose={toggleMenu}
      onMenuItemClick={handleMenuItemClick}
    />


    <View style={styles.card}>
      <View style={styles.userImageContainer}>
        <Image
          source={{ uri: student?.photo === 'student-images/default.png' ? defaultImageUrl : `${URL_BACKOFFICE}storage/${student?.photo}` }}
          style={styles.userImage}
        />
      </View>
      <Text style={styles.disciplineText}>Programação</Text>
      <Text style={styles.melhorPerformace}>Tua melhor Performace</Text>
      <Text style={styles.percentagem}>75%</Text>
      <Progress.Bar
        progress={0.75}
        width={337}
        height={5}
        color='#D9D9D9'
        borderColor='#A9A9A9'
        borderRadius={0}
        style={{ alignSelf: "flex-start" }}
      />
    </View>

    {/* Menu Acadêmico */}
    <View style={styles.academics}>
      <FlatList
        data={academicOptions.slice(0, 4)} // Mostra apenas 4 itens
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.academicItem}>
            <FontAwesome5 name={item.icon} size={30} color='#0077B6' />
            <Text>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
      {/* Botão para abrir o modal com todas as opções */}
      <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
        <FontAwesome5 name='chevron-down' size={30} color='#0077B6' />
      </TouchableOpacity>
    </View>

    {/* Conteúdo da tela */}
    <View style={styles.content}>
      {/* Carrossel de fotos de eventos */}
      <View style={styles.carouselContainer}>
        <Carousel
          data={events}
          renderItem={renderEventPhoto}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={200}
          loop={true}
          autoplay={true}
          autoplayInterval={3000}
          layout='default'
          layoutCardOffset={18}
        />
      </View>

      <NavigationButton
        onPressHome={() => { }}
        onPressChat={() => { }}
        onPressProfile={() => { }}
      />
    </View>

    <AcademicOptionsModal
      isVisible={isModalVisible}
      toggleModal={toggleModal}
      academicOptions={academicOptions}
    />
  </View>
);
};

export default HomeScreen;
