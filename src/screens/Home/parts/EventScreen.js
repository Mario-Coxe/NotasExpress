import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image } from 'react-native';
import eventData from '../request/Events';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles/EventScreenStyle';
import { useDispatch, useSelector } from "react-redux";

const EventScreen = () => {

  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);


  

  const renderEventItem = ({ item }) => (
    <View style={styles.eventItem}>
      <Image source={{ uri: `http://172.22.240.1:8080/storage/${item?.photo}`}} style={styles.eventImage} />
      <View style={styles.eventInfo}>
        <Text style={styles.eventTheme}>{item.theme}</Text>
        <Text style={styles.eventDate}>{item.data_time}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <FontAwesome5 name="search" size={20} color="#555" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar eventos"
        />
      </View>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={renderEventItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default EventScreen;
