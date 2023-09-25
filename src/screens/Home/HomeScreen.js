import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Modal, Dimensions } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import Carousel from 'react-native-snap-carousel';
import NavigationButton from './parts/NavigationButton';
import NewsContainer from './parts/NewsContainer';


const HomeScreen = () => {
    const [notificationsCount, setNotificationsCount] = useState(3); // Exemplo de contagem de notificações
    const [isModalVisible, setModalVisible] = useState(false);
    const [academicOptions, setAcademicOptions] = useState([
        { id: '1', icon: 'question-circle', text: 'Quiz' },
        { id: '2', icon: 'book', text: 'Homework' },
        { id: '3', icon: 'calendar-alt', text: 'Calendário' },
        { id: '4', icon: 'book-open', text: 'Biblioteca' },
        { id: '5', icon: 'file-alt', text: 'Notas' },
        { id: '6', icon: 'question', text: 'Ajuda' },
        // Adicione mais opções aqui
    ]);


    const [eventPhotos, setEventPhotos] = useState([
        {
            id: '1',
            imageUrl: require('../../../assets/image/events/event1.jpeg'),
            eventName: 'Evento 1',
        },
        {
            id: '2',
            imageUrl: require('../../../assets/image/events/event2.jpeg'),
            eventName: 'Evento 2',
        },
        {
            id: '3',
            imageUrl: require('../../../assets/image/events/event3.png'),
            eventName: 'Evento 3',
        },
        // Adicione mais fotos e eventos aqui
    ]);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const renderEventPhoto = ({ item }) => (
        <TouchableOpacity style={styles.eventPhotoContainer}>
            <Image source={item.imageUrl} style={styles.eventPhoto} resizeMode="cover" />
            <Text style={styles.eventName}>{item.eventName}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Barra de navegação */}
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.menuIcon}>
                    <FontAwesome5 name="bars" size={24} color="white" />
                </TouchableOpacity>

                <Text style={styles.titleText}>NotasExpress</Text>

                {/* Ícone de notificações com número */}
                <TouchableOpacity style={styles.notificationIcon}>
                    <FontAwesome5 name="bell" size={24} color="white" />
                    {notificationsCount > 0 && (
                        <View style={styles.notificationBadge}>
                            <Text style={styles.notificationText}>{notificationsCount}</Text>
                        </View>
                    )}
                </TouchableOpacity>
            </View>

            {/* Card com disciplina e barra de progresso */}
            <View style={styles.card}>
                {/* Imagem do usuário à direita no topo */}
                <View style={styles.userImageContainer}>
                    <Image
                        source={require('../../../assets/image/users/userName.jpg')} // Substitua pelo caminho da imagem do usuário
                        style={styles.userImage}
                    />
                </View>
                <Text style={styles.disciplineText}>Programação</Text>
                <Text style={styles.melhorPerformace}>Tua melhor Performace</Text>
                <Text style={styles.percentagem}>75%</Text>
                <Progress.Bar
                    progress={0.75} // Ajuste este valor para representar o progresso desejado (de 0 a 1)
                    width={337}
                    height={5} // Tamanho da barra de progresso mais fina
                    color="#D9D9D9"
                    borderColor="#A9A9A9"
                    borderRadius={0} // Borda mais arredondada
                    style={{ alignSelf: 'flex-start' }} // Alinhamento à esquerda
                />
            </View>

            {/* Menu Acadêmico */}
            <View style={styles.academics}>
                <FlatList
                    data={academicOptions.slice(0, 4)} // Mostra apenas 4 itens
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.academicItem}>
                            <FontAwesome5 name={item.icon} size={30} color="#0077B6" />
                            <Text>{item.text}</Text>
                        </TouchableOpacity>
                    )}
                />
                {/* Botão para abrir o modal com todas as opções */}
                <TouchableOpacity style={styles.modalButton} onPress={toggleModal}>
                    <FontAwesome5 name="chevron-down" size={30} color="#0077B6" />
                </TouchableOpacity>
            </View>

            {/* Conteúdo da tela */}
            <View style={styles.content}>

                {/* Carrossel de fotos de eventos */}
                <View style={styles.carouselContainer}>
                    <Carousel
                        data={eventPhotos}
                        renderItem={renderEventPhoto}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={200}
                        loop={true}
                        autoplay={true}
                        autoplayInterval={3000}
                        layout="default"
                        layoutCardOffset={18}
                    />
                </View>

                

                <NavigationButton
                    onPressHome={() => {
                        // Lógica para navegar para a tela "Home"
                    }}
                    onPressChat={() => {
                        // Lógica para navegar para a tela de "Chat"
                    }}
                    onPressProfile={() => {
                        // Lógica para navegar para a tela de "Perfil"
                    }}
                />

             
            </View>
            {/* Modal com todas as opções acadêmicas */}
            <Modal
                animationType='fade'
                transparent={true}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalRow}>
                            {/* Itens à esquerda */}
                            <View style={styles.modalColumn}>
                                {academicOptions.slice(0, 3).map((item) => (
                                    <TouchableOpacity style={styles.modalItem} key={item.id}>
                                        <FontAwesome5 name={item.icon} size={30} color="#0077B6" />
                                        <Text style={styles.modalItemText}>{item.text}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            {/* Itens à direita */}
                            <View style={styles.modalColumn}>
                                {academicOptions.slice(3, 6).map((item) => (
                                    <TouchableOpacity style={styles.modalItem} key={item.id}>
                                        <FontAwesome5 name={item.icon} size={30} color="#0077B6" />
                                        <Text style={styles.modalItemText}>{item.text}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        <TouchableOpacity
                            style={styles.closeIcon}
                            onPress={toggleModal}
                        >
                            <FontAwesome5 name="times" size={24} color="red" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#0077B6',
        paddingHorizontal: 16,
        paddingTop: 40,
    },
    menuIcon: {
        padding: 10,
    },
    notificationIcon: {
        position: 'relative', // Posição relativa para acomodar o número
        padding: 10,
    },
    titleText: {
        fontSize: 24,
        color: 'white',
    },
    // Estilos para o número de notificações
    notificationBadge: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    notificationText: {
        color: 'white',
        fontSize: 12,
    },
    card: {
        backgroundColor: '#0077B6',
        padding: 16,
        borderRadius: 10,
        margin: 16,
        alignItems: 'center',
        width: '90%', // Ocupa 90% da tela
        alignSelf: 'center', // Centralizado horizontalmente
    },
    disciplineText: {
        fontSize: 18,
        color: 'white',
        marginBottom: 10,
        alignSelf: 'flex-start', // Alinhamento à esquerda
    },
    melhorPerformace: {
        fontSize: 14,
        color: 'white',
        marginBottom: 10,
        alignSelf: 'flex-start', // Alinhamento à esquerda
    },
    percentagem: {
        fontSize: 14,
        color: 'white',
        alignSelf: 'flex-end',
        marginTop: -20,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userImageContainer: {
        alignItems: 'flex-end', // Alinhar à direita
        justifyContent: 'flex-start', // Alinhar no topo
        marginBottom: 10,
        flexDirection: 'row', // Para alinhar a imagem e o texto lado a lado
        alignSelf: 'flex-end',
    },
    userImage: {
        width: 50, // Ajuste o tamanho da imagem do usuário conforme necessário
        height: 50, // Ajuste o tamanho da imagem do usuário conforme necessário
        borderRadius: 30, // Metade da largura/altura para torná-la circular
        marginRight: 10, // Espaço entre a imagem e o texto
    },
    academics: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', // Alinhar verticalmente ao centro
        padding: 16,
        borderRadius: 10,
        width: '90%', // Ocupa 90% da tela
        alignSelf: 'center', // Centralizado horizontalmente
        marginTop: 20,

    },

    modalButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    academicItem: {
        alignItems: 'center',
        margin: 10
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '80%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 16,
    },
    modalItemText: {
        fontSize: 18,
        marginLeft: 10,
    },
    modalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalColumn: {
        flex: 1,
        paddingHorizontal: 16,
    },
    closeIcon: {
        position: 'absolute',

        right: 10,
        marginBottom: 20
    },
    carouselContainer: {
        marginTop: 40,
        marginBottom: 0
    },
    eventPhotoContainer: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginHorizontal: 10,
        overflow: 'hidden',
    },
    eventPhoto: {
        width: '100%',
        height: '100%',
    },
    eventName: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
