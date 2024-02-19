/** @format */

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import Carousel from "react-native-snap-carousel";
import NavigationButton from "./components/NavigationButton";
import SideMenu from "./components/SideMenu";
import styles from "./styles/HomeScreenStyle";
import NavBar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentByTeamIdAndTelefone } from "../../features/student/studentSlice";
import { URL_BACKOFFICE } from "../../../application.properties";
import { useNavigation } from '@react-navigation/native';
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { API_URL } from "../../../application.properties";
//import { setEvents } from '../../features/event/eventSlice';

const HomeScreen = () => {

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });


  const dispatch = useDispatch();
  const [notificationsCount, setNotificationsCount] = useState(6);
  const navigation = useNavigation();
  const user = useSelector((state) => state.auth.user);
  const message = useSelector((state) => state.auth.message);
  const token = useSelector((state) => state.auth.token);
  const student = useSelector((state) => state.student.student);
  const [events, setEventsUseState] = useState([]);
  //onst events = useSelector(state => state.events.events);

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
    }


    /*
    
    dispatch(
      fetchEventByTeamId({
        team_id: user.team_id,
      }),
    ).then((result) => {
      //console.log("Resultado:",result);
    });
    */


  }, [dispatch, user]);


  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_URL}events/${user.team_id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Erro ao obter eventos');
        }
        const data = await response.json();
        setEventsUseState(data.events);
        //dispatch(setEvents(data.events));
      } catch (error) {
        console.log('Erro ao obter eventos:', error.message);
      }
    };

    fetchEvents();

  }, [user.team_id, events]);






  const updateNotifications = (newCount) => {
    setNotificationsCount(newCount);
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const academicOptions = [
    { id: "1", icon: "question-circle", text: "Quiz" },
    { id: "2", icon: "book", text: "Homework" },
    { id: "3", icon: "calendar-alt", text: "Calendário" },
    { id: "4", icon: "book-open", text: "Biblioteca" },
    { id: "5", icon: "file-alt", text: "Notas", route: "Result" },
    { id: "6", icon: "question", text: "Ajuda" },
  ];


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (route) => {
    setIsMenuOpen(false)
    navigation.navigate(route);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderEventPhoto = ({ item }) => (
    <TouchableOpacity style={styles.eventPhotoContainer}>
      <Image
        source={{ uri: `${URL_BACKOFFICE}storage/${item?.photo}` }}
        style={styles.eventPhoto}
        resizeMode='cover'
      />
    </TouchableOpacity >
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
        title='Turma+'
        notificationsCount={notificationsCount}
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
        <Text style={[styles.disciplineText, { fontFamily: "Poppins_600SemiBold" }]}>Programação</Text>
        <Text style={[styles.melhorPerformace, { fontFamily: "Poppins_400Regular" }]}>Tua melhor Performace</Text>
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


      <View style={styles.academics}>
        <FlatList
          data={academicOptions.slice(0, 6)}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.academicItem}>
              <FontAwesome5 name={item.icon} size={30} color='#0077B6' />
              <Text style={[styles.academicstexts, { fontFamily: "Poppins_400Regular" }]}>{item.text}</Text>
            </TouchableOpacity>
          )}
        />
      </View>


      <View style={styles.content}>
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
    </View>
  );
};

export default HomeScreen;
