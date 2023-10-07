import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image } from 'react-native';
import eventData from '../request/Events';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles/EventScreenStyle';

const EventScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Função para filtrar eventos com base na pesquisa
  const filteredEvents = eventData.filter((event) =>
    event.theme.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderEventItem = ({ item }) => (
    <View style={styles.eventItem}>
      <Image source={item.image} style={styles.eventImage} />
      <View style={styles.eventInfo}>
        <Text style={styles.eventTheme}>{item.theme}</Text>
        <Text style={styles.eventDate}>{item.day}, {item.date}</Text>
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
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
      </View>
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        renderItem={renderEventItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default EventScreen;
