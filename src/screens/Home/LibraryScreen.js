import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, FlatList, Image, Modal, ScrollView } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles/LibraryScreenStyle";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_800ExtraBold, Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins"
import { useDispatch, useSelector } from "react-redux";
import { searchEventByTeamId } from '../../features/event/eventSlice';
import { URL_BACKOFFICE } from "../../../application.properties";
import NavigationButton from "./components/NavigationButton";
import { fetchEventByTeamId } from "../../features/event/eventSlice";

const LibraryScreen = () => {

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_600SemiBold,
        Poppins_800ExtraBold,
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
        dispatch(
            fetchEventByTeamId({
                team_id: user.team_id,
            })
        ).then((result) => {
            // console.log("Resultado:", result);
        });
    }, [dispatch, user]);



    useEffect(() => {
        if (searchText !== '') {
            setTrueOrFalse(true)
        } else {
            setTrueOrFalse(false)
        }
        if (user) {
            dispatch(searchEventByTeamId({ team_id: user.team_id, searchValue: searchText }));
            //console.log(eventsSearch)
        }
    }, [dispatch, user, searchText]);


    const renderEventItem = ({ item }) => (
        <TouchableOpacity style={styles.eventItem} onPress={() => handleEventPress(item)}>
            <Image source={{ uri: `${URL_BACKOFFICE}storage/${item?.photo}` }} style={styles.eventImage} />
            <View style={styles.eventInfo}>
                <Text style={[styles.eventTheme, { fontFamily: "Poppins_800ExtraBold" }]}>{item.theme}</Text>
                <Text style={[styles.eventDate, { fontFamily: "Poppins_400Regular" }]}>{item.data_time}</Text>
                <View style={styles.downloadsContainer}>
                    <FontAwesome5 name="download" size={16} color="#0077B6" style={styles.downloadIcon} />
                    <Text style={styles.downloadsCount}>{10}</Text>
                </View>
            </View>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.icon}>
                    <FontAwesome5 name="download" size={20} color="black" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
    const renderEmptyEvents = () => (
        <View style={styles.emptyEventsContainer}>
            <Text style={[styles.emptyEventsText, { fontFamily: "Poppins_800ExtraBold" }]}>Nenhum livro encontrado.</Text>
        </View>
    );

    const handleEventPress = (event) => {
        setSelectedEvent(event);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    if (!fontsLoaded) {
        return (
            <View style={styles.container}>

            </View>
        );
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.cardContainer}>
                <Text style={[styles.bemvindoText, { fontFamily: "Poppins_800ExtraBold" }]}>Biblioteca</Text>
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
                        placeholder="Pesquisar livros"
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
                        <View style={styles.closeIconContainer}>
                            <TouchableOpacity onPress={closeModal}>
                                <View style={styles.closeIconCircle}>
                                    <AntDesign name="close" size={24} color="red" />
                                </View>
                            </TouchableOpacity>
                        </View>
                        {selectedEvent && (
                            <View>
                                <Image source={{ uri: `${URL_BACKOFFICE}storage/${selectedEvent.photo}` }} style={styles.modalEventImage} />
                                <ScrollView style={{ maxHeight: 200 }}>
                                    <Text style={styles.modalEventDescription}>{selectedEvent.description}</Text>
                                </ScrollView>
                            </View>
                        )}
                    </View>
                </View>
            </Modal>


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
