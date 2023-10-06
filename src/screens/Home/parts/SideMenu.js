import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles/SideMenuStyle';

const SideMenu = ({ isOpen, onClose, onMenuItemClick }) => {
  const navigationItems = [
    { label: 'Home', route: 'Home', icon: 'home' },
    { label: ' Quiz', route: 'Quix', icon: 'bookmark' },
    { label: 'Calendario', route: 'Calendario', icon: 'calendar' },
    { label: 'Minha Turma', route: 'MinhaTurma', icon: 'group' },
    { label: 'Chat', route: 'Chat', icon: 'comments' },
  ];

  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={onClose}
      style={styles.modal}
      backdropOpacity={0.0}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
    >
      <View style={styles.container}>
        <Image
          source={require('../../../../assets/image/users/userName.jpg')}
          style={styles.userImage}
        />
        <Text style={styles.userName}>Mário Coxe</Text>
        {navigationItems.map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.navItem}
            onPress={() => {
              onMenuItemClick(item.route);
              onClose();
            }}
          >
            <View style={styles.navItemContent}>
              <FontAwesome name={item.icon} size={20} style={styles.icon} />
              <Text style={styles.navItemText}>{item.label}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.bottomSection}>
          <TouchableOpacity style={styles.bottomButton}>
            <FontAwesome name="cog" size={20} style={styles.icon} />
            <Text style={styles.buttonText}>Definições</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomButton}>
            <FontAwesome name="question-circle" size={20} style={styles.icon} />
            <Text style={styles.buttonText}>Ajuda</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <FontAwesome name="sign-out" size={20} style={styles.logouticon} />
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        </View>

      </View>
    </Modal>
  );
};

export default SideMenu;
