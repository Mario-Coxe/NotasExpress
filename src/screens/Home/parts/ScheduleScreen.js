import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles/ScheduleScreenStyle'


const ScheduleScreen = () => {
  const scheduleData = [
    { id: '1', day: 'Segunda-feira', time: '08:00 - 09:30', subject: 'Matemática' },
    { id: '2', day: 'Terça-feira', time: '10:00 - 11:30', subject: 'História' },
    { id: '3', day: 'Quarta-feira', time: '12:00 - 13:30', subject: 'Inglês' },
    { id: '4', day: 'Quinta-feira', time: '14:00 - 15:30', subject: 'Ciências' },
    { id: '5', day: 'Sexta-feira', time: '09:00 - 10:30', subject: 'Geografia' },
  ];

  const itemHeight = 100; // Altura fixa para cada item
  const marginVertical = 10; // Margens no topo e na parte inferior dos itens

  return (
    <View style={styles.container}>
      <FlatList
        data={scheduleData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.scheduleItem, { height: itemHeight, marginVertical }]}>
            <Text style={styles.scheduleDay}>{item.day}</Text>
            <Text style={styles.scheduleTime}>{item.time}</Text>
            <Text style={styles.scheduleSubject}>{item.subject}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
        style={styles.flatList}
      />
    </View>
  );
};

export default ScheduleScreen;
