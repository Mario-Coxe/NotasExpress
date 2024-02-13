import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SideMenu from '../../components/SideMenu';
import NavigationButton from '../../components/NavigationButton';
import { SecondQuarter } from '../../request/Notas';
import styles from '../styles/FirstQuarterScreenStyle';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_800ExtraBold } from "@expo-google-fonts/poppins"


const SecondQuarterScreen = () => {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_800ExtraBold
  });


  const [expandedDisciplina, setExpandedDisciplina] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  if (!fontsLoaded) {
    return (
      <View style={styles.container}>

      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SideMenu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        onMenuItemClick={() => console.log('Menu item clicked')}
      />

      <FlatList
        data={SecondQuarter}
        keyExtractor={(item) => item.disciplina}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.disciplinaItem}
            onPress={() => setExpandedDisciplina(expandedDisciplina === item ? null : item)}
          >
            <View style={styles.disciplinaHeader}>
              <Text style={[styles.disciplinaText, { fontFamily: "Poppins_400Regular" }]}>{item.disciplina}</Text>

              <FontAwesome
                name={expandedDisciplina === item ? 'caret-up' : 'caret-down'}
                size={24}
                color="#0077B6"
              />
            </View>
            {expandedDisciplina === item && (
              <View style={styles.tarefasContainer}>
                {item.notas.map((nota) => {
                  const keys = Object.keys(nota);
                  const notaKey = keys.find((key) => key !== 'id');
                  const notaValue = nota[notaKey];

                  return (
                    <View style={styles.tarefaItem} key={nota.id}>
                      <Text style={[styles.tarefaText, { fontFamily: "Poppins_600SemiBold" }]} key={notaKey}>
                        {notaKey.toUpperCase()}: {notaValue}
                      </Text>
                    </View>
                  );
                })}
              </View>
            )}
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.navigationButton}>
        <NavigationButton
          onPressHome={() => {

          }}
          onPressChat={() => {

          }}
          onPressProfile={() => {

          }}
        />
      </View>
    </View>
  );
};


export default SecondQuarterScreen;
