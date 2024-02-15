import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles/ScheduleScreenStyle';

const ScheduleScreen = () => {
  const scheduleData = [
    { id: '1', day: 'Segunda', time: '08:00 09:30', subject: 'MT' },
    { id: '2', day: 'Terça', time: '10:00 11:30', subject: 'HIS' },
    { id: '3', day: 'Quarta', time: '12:00 13:30', subject: 'ING' },
    { id: '4', day: 'Quinta', time: '14:00 15:30', subject: 'PT' },
    { id: '5', day: 'Sexta', time: '09:00 10:30', subject: 'GD' },
  ];

  const weekdays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <View style={styles.headerCell}>
          <Text style={styles.headerText}>Horário</Text>
        </View>
        {weekdays.map((day) => (
          <View key={day} style={styles.headerCell}>
            <Text style={styles.headerText}>{day}</Text>
          </View>
        ))}
      </View>
      <FlatList
        data={scheduleData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.timeCell}>
              <Text>{item.time}</Text>
            </View>
            {weekdays.map((day) => (
              <View key={day} style={styles.cell}>
                {item.day === day && (
                  <>
                    <Text style={styles.subject}>{item.subject}</Text>
                  </>
                )}
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

export default ScheduleScreen;
