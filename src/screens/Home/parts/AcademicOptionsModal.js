import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from '../styles/HomeScreenStyle';

const AcademicOptionsModal = ({ isVisible, toggleModal, academicOptions }) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.8}
      onBackdropPress={toggleModal}
      animationIn={'slideInRight'}
      animationOut={'slideOutRight'}
      animationOutTiming={2000}
      animationInTiming={1500}
      overlayOpacity={0.0}
      style={styles.bottomSheet}
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

          <TouchableOpacity style={styles.closeIcon} onPress={toggleModal}>
            <FontAwesome5 name="times" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AcademicOptionsModal;
