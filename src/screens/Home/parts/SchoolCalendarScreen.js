import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import Modal from 'react-native-modal';
import { FontAwesome } from '@expo/vector-icons'; // Importe o ícone FontAwesome

// Configure o idioma para português
LocaleConfig.locales['pt-br'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
    monthNamesShort: [
      'Jan.',
      'Fev.',
      'Mar.',
      'Abr.',
      'Mai.',
      'Jun.',
      'Jul.',
      'Ago.',
      'Set.',
      'Out.',
      'Nov.',
      'Dez.',
    ],
    dayNames: [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado',
    ],
    dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sáb.'],
  };
  
  // Defina o idioma padrão
  LocaleConfig.defaultLocale = 'pt-br';
  const SchoolCalendarScreen = () => {
    const [markedDates, setMarkedDates] = useState({
      '2023-10-05': { marked: true, description: 'Descrição da data 1' },
      '2023-10-10': { marked: true, description: 'Descrição da data 2' },
    });
    const [selectedDate, setSelectedDate] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);
  
    const handleDayPress = (day) => {
      if (markedDates[day.dateString]) {
        setSelectedDate(day.dateString);
        setModalVisible(true);
      }
    };
  
    const renderCustomMarker = (date) => {
      return (
        <FontAwesome name="circle" size={40} color="blue" style={styles.customMarker} />
      );
    };
  
    return (
      <View style={styles.container}>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleDayPress}
          renderDotContent={renderCustomMarker}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#000000',
            selectedDayBackgroundColor: '#0077B6',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#0077B6',
            dayTextColor: '#000000',
            textDisabledColor: '#B9B9B9',
            dotColor: '#0077B6',
            selectedDotColor: '#ffffff',
            arrowColor: 'black',
            monthTextColor: '#000000',
            textMonthFontWeight: 'bold',
            textDayFontWeight: '500',
            textDayHeaderFontWeight: 'bold',
            textDayFontSize: 16,
            textMonthFontSize: 20,
            textDayHeaderFontSize: 14,
          }}
        />
  
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          backdropOpacity={0.7}
          animationIn="fadeIn"
          animationOut="fadeOut"
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Detalhes da Data</Text>
            <Text style={styles.modalDescription}>
              {markedDates[selectedDate]?.description}
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    customMarker: {
      fontSize: 16,
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 10,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    modalDescription: {
      fontSize: 16,
    },
    modalCloseButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      alignItems: 'center',
    },
    modalCloseButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default SchoolCalendarScreen;
    