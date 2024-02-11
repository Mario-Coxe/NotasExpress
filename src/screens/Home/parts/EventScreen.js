import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles/EventScreenStyle';
import { useDispatch, useSelector } from "react-redux";
import { URL_BACKOFFICE } from '../../../../application.properties';
import { searchEventByTeamId } from '../../../features/event/eventSlice';

const EventScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const eventsSearch = useSelector((state) => state.eventsSearch.events);
  const events = useSelector((state) => state.events.events);

  const [searchText, setSearchText] = useState('');
  const [trueOrFalse, setTrueOrFalse] = useState(false);




  useEffect(() => {
    if (searchText !== '') {
      setTrueOrFalse(true)
    } else {
      setTrueOrFalse(false)
    }
    //const searchValue = searchText.trim() !== "" ? searchText : null;
    if (user) {
      dispatch(searchEventByTeamId({ team_id: user.team_id, searchValue: searchText }));
      console.log(eventsSearch)
      //console.log("_______________________________________________________________________")
      //console.log(events)
    }
  }, [dispatch, user, searchText]);

  const renderEventItem = ({ item }) => (
    <View style={styles.eventItem}>
      <Image source={{ uri: `${URL_BACKOFFICE}storage/${item?.photo}` }} style={styles.eventImage} />
      <View style={styles.eventInfo}>
        <Text style={styles.eventTheme}>{item.theme}</Text>
        <Text style={styles.eventDate}>{item.data_time}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>
      </View>
    </View>
  );

  const renderEmptyEvents = () => (
    <View style={styles.emptyEventsContainer}>
      <Text style={styles.emptyEventsText}>Nenhum evento encontrado.</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <FontAwesome5 name="search" size={20} color="#555" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar eventos"
          onChangeText={setSearchText}
        />
      </View>
      <FlatList
        data={trueOrFalse ? eventsSearch : events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderEventItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};


export default EventScreen;
