import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  listContent: {
    paddingTop: 10, // Adiciona espaço no topo da lista
    paddingBottom: 100, // Adiciona espaço na parte inferior da lista
  },
  scheduleItem: {
    width: width * 0.95,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    alignItems: 'center',
  },
  scheduleDay: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#0077B6',
  },
  scheduleTime: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
  scheduleSubject: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  flatList: {
    flex: 0.7, // Define a altura da FlatList para 70% da tela
  },
});

export default ScheduleScreen;
