import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Dimensions } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import Carousel from 'react-native-snap-carousel';
import NavigationButton from './parts/NavigationButton';
import NewsContainer from './parts/NewsContainer';
import SideMenu from './parts/SideMenu';
import Events from './request/Events';
import styles from './styles/HomeScreenStyle'
import NavBar from './parts/NavBar';
import AcademicOptionsModal from './parts/AcademicOptionsModal';

const HomeScreen = () => {
    const [notificationsCount, setNotificationsCount] = useState(6); // Exemplo de contagem de notificações

    // Função para atualizar as notificações
    const updateNotifications = (newCount) => {
        setNotificationsCount(newCount);
    };

    const [isModalVisible, setModalVisible] = useState(false);
    const academicOptions = [
        { id: '1', icon: 'question-circle', text: 'Quiz' },
        { id: '2', icon: 'book', text: 'Homework' },
        { id: '3', icon: 'calendar-alt', text: 'Calendário' },
        { id: '4', icon: 'book-open', text: 'Biblioteca' },
        { id: '5', icon: 'file-alt', text: 'Notas' },
        { id: '6', icon: 'question', text: 'Ajuda' },
    ];



    //sidebar menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (route) => {
        navigation.navigate(route);
    };
    //fim sidebar menu

    //Modal Mais Opcoes
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
            <NavBar
                title="NotasExpress"
                notificationsCount={notificationsCount} // Adicione esta linha
                onMenuPress={toggleMenu}
                onBellPress={() => {
                   
                }}
            />

            <SideMenu
                isOpen={isMenuOpen}
                onClose={toggleMenu}
                onMenuItemClick={handleMenuItemClick}
            />

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
                        data={Events}
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
            <AcademicOptionsModal
                isVisible={isModalVisible}
                toggleModal={toggleModal}
                academicOptions={academicOptions}
            />


        </View>
    );
};

export default HomeScreen;
