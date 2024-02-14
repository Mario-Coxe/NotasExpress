/** @format */

import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import { FontAwesome, AntDesign,  } from "@expo/vector-icons";
import styles from "../parts/styles/SideMenuStyle";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { URL_BACKOFFICE } from "../../../../application.properties";
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins"

const SideMenu = ({ isOpen, onClose, onMenuItemClick }) => {

  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });


  const student = useSelector((state) => state.student.student);
  const navigation = useNavigation();

  const defaultImageUrl = `${URL_BACKOFFICE}storage/student-images/default.png`;

  const navigationItems = [
    { label: "Home", route: "Home", icon: "home" },
    { label: " Quiz", route: "", icon: "bookmark" },
    { label: "Calendario", route: "Calendar", icon: "calendar" },
    { label: "Minha Turma", route: "MinhaTurma", icon: "group" },
    { label: "Chat", route: "Chat", icon: "comments" },
    { label: "Notas", route: "Result", icon: "sticky-note" },
    { label: "Tarefas", route: "HomeWork", icon: "building" },
    { label: "Eventos", route: "Events", icon: "magic" },
    { label: "Bibliteca", route: "Library", icon: "book" },

  ];

  //console.log('estudante: ', student)

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>

      </View>
    );
  }
  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={onClose}
      style={styles.modal}
      backdropOpacity={0.2}
      animationIn='slideInLeft'
      animationOut='slideOutLeft'>
      <View style={styles.container}>
        <Image
          source={{ uri: student?.photo === 'student-images/default.png' ? defaultImageUrl : `${URL_BACKOFFICE}storage/${student?.photo}` }}
          style={styles.userImage}
        />
        <Text style={[styles.userName, { fontFamily: "Poppins_600SemiBold" }]}>{student?.name}</Text>
        {
          navigationItems.map((item) => (
            <TouchableOpacity
              key={item.label}
              style={styles.navItem}
              onPress={() => {
                navigation.navigate(item.route);
                onClose();
              }}>
              <View style={styles.navItemContent}>
                <FontAwesome name={item.icon} size={20} style={styles.icon} />
                <Text style={[styles.navItemText, { fontFamily: "Poppins_400Regular" }]}>{item.label}</Text>
              </View>
            </TouchableOpacity>
          ))
        }

        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.bottomButton}>
            <FontAwesome name='cog' size={20} style={styles.icon} />
            <Text style={[styles.buttonText, { fontFamily: "Poppins_400Regular" }]}>Definições</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton}>
            <FontAwesome name='question-circle' size={20} style={styles.icon} />
            <Text style={[styles.buttonText, { fontFamily: "Poppins_400Regular" }]}>Ajuda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <FontAwesome name='sign-out' size={20} style={styles.logouticon} />

          </TouchableOpacity>
        </View>
      </View >
    </Modal >
  );
};

export default SideMenu;
