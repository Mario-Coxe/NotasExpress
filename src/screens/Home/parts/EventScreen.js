import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image } from 'react-native';
import eventData from '../request/Events';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 16,
    marginTop: 20,
  },
  listContent: {
    paddingTop: 10, // Adiciona espaço no topo da lista
    paddingBottom: 100, // Adiciona espaço na parte inferior da lista
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  eventItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  eventImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  eventInfo: {
    flex: 1,
    marginLeft: 16,
  },
  eventTheme: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDate: {
    color: '#555',
  },
  eventDescription: {
    marginTop: 8,
  },
});

export default EventScreen;
