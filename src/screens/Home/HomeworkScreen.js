/** @format */

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import SideMenu from "./components/SideMenu";
import NavigationButton from "./components/NavigationButton";
import tarefasPorDisciplina from "./request/Homework";
import styles from "./styles/HomeworkScreenStyle";
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_600SemiBold, Poppins_600SemiBold_Italic } from "@expo-google-fonts/poppins"
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../../application.properties";

const HomeworkScreen = () => {


  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.student.student);
  const [expandedDisciplina, setExpandedDisciplina] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [Homework, setHomework] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //console.log(user)
  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await fetch(`${API_URL}homework/get-by-turma/${user.class_id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Erro ao obter terefa');
        }
        const data = await response.json();
        setHomework(data);
        //console.log(Homework)
      } catch (error) {
        console.log('Erro ao obter terefa:', error.message);
      }
    };

    fetchEvents();

  }, [user.class_id]);





  if (!fontsLoaded) {
    return (
      <View style={styles.container}>

      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={[styles.bemvindoText, { fontFamily: "Poppins_800ExtraBold" }]}>Tarefas</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <AntDesign name='arrowleft' size={24} color='#fff' />
        </TouchableOpacity>
      </View>

      <SideMenu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        onMenuItemClick={() => console.log("Menu item clicked")}
      />

      <FlatList
        data={Homework}
        keyExtractor={(item) => item.disciplina}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.disciplinaItem}
            onPress={() =>
              setExpandedDisciplina(expandedDisciplina === item ? null : item)
            }>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Text style={[styles.disciplinaText, { fontFamily: "Poppins_400Regular" }]}>{item.disciplina}</Text>
              <FontAwesome
                name={expandedDisciplina === item ? "caret-up" : "caret-down"}
                size={24}
                color='#0077B6'
              />
            </View>
            {expandedDisciplina === item && (
              <View style={styles.tarefasContainer}>
                <Text style={[styles.title, { fontFamily: "Poppins_600SemiBold_Italic" }]}>Tarefas de {item.disciplina}</Text>
                <FlatList
                  data={item.tarefas}
                  keyExtractor={(task) => task.id.toString()}
                  renderItem={({ item: task }) => (
                    <View style={styles.tarefaItem}>
                      <Text style={[styles.tarefaText, { fontFamily: "Poppins_400Regular" }]}>{task.descricao}</Text>
                      <Text style={[styles.dataEntrega, { fontFamily: "Poppins_400Regular" }]}>
                        Data de Entrega: {task.dataEntrega}
                      </Text>
                    </View>
                  )}
                  contentContainerStyle={styles.listContent}
                />
              </View>
            )}
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.NavigationButton}>
        <NavigationButton
          onPressHome={() => {
            // Lógica para navegar para a tela "Home"
          }}
          onPressChat={() => {
            // Lógica para navegar para a tela de "Chat"
          }}
          onPressProfile={() => {
            // Lógica para navegar para a tela de "Perfil"
          }}
        />
      </View>
    </View>
  );
};

export default HomeworkScreen;
