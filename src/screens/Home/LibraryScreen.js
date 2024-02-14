import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Modal } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import styles from "./styles/LibraryScreenStyle";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { useDispatch, useSelector } from "react-redux";
import { searchEventByTeamId } from '../../features/event/eventSlice';
import { URL_BACKOFFICE } from "../../../application.properties";
import { FontAwesome5 } from '@expo/vector-icons';
import NavigationButton from "./components/NavigationButton";

const LibraryScreen = () => {

    const [fontsLoaded] = useFonts({
        Poppins_700Bold,
        Poppins_400Regular,
        Poppins_600SemiBold
    });

    const navigation = useNavigation();

    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const eventsSearch = useSelector((state) => state.eventsSearch.events);
    const events = useSelector((state) => state.events.events);

    const [searchText, setSearchText] = useState('');
    const [trueOrFalse, setTrueOrFalse] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (searchText !== '') {
            setTrueOrFalse(true)
        } else {
            setTrueOrFalse(false)
        }
        if (user) {
            dispatch(searchEventByTeamId({ team_id: user.team_id, searchValue: searchText }));
            console.log(eventsSearch)
        }
    }, [dispatch, user, searchText]);

    const renderEventItem = ({ item }) => (
        <TouchableOpacity style={styles.eventItem} onPress={() => handleEventPress(item)}>
            <Image source={{ uri: `${URL_BACKOFFICE}storage/${item?.photo}` }} style={styles.eventImage} />
            <View style={styles.eventInfo}>
                <Text style={styles.eventTheme}>{item.theme}</Text>
                <Text style={styles.eventDate}>{item.data_time}</Text>
                <Text style={styles.eventDescription}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    );

    const renderEmptyEvents = () => (
        <View style={styles.emptyEventsContainer}>
            <Text style={styles.emptyEventsText}>Nenhum evento encontrado.</Text>
        </View>
    );

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>

            </View>
        );
    }

    const handleEventPress = (event) => {
        setSelectedEvent(event);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Text style={styles.bemvindoText}>Biblioteca</Text>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <AntDesign name='arrowleft' size={24} color='#fff' />
                </TouchableOpacity>
            </View>
            <View style={styles.Container}>
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
                    ListEmptyComponent={renderEmptyEvents}
                />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.modalBackground} onPress={closeModal} />
                    <View style={styles.modalContent}>
                        {selectedEvent && (
                            <View>
                                <Image source={{ uri: `${URL_BACKOFFICE}storage/${selectedEvent.photo}` }} style={styles.modalEventImage} />
                                <Text style={styles.modalEventDescription}>{selectedEvent.description}</Text>
                            </View>
                        )}
                    </View>
                </View>
            </Modal>
            <StatusBar style='light' />

            <View style={styles.NavigationButton}>
                <NavigationButton
                    onPressHome={() => { }}
                    onPressChat={() => { }}
                    onPressProfile={() => { }}
                />
            </View>
        </View>
    );
};

export default LibraryScreen;
