import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from '../styles/HomeScreenStyle';

const NavBar = ({ title, onMenuPress, onBellPress, notificationsCount }) => {
    return (
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.menuIcon} onPress={onMenuPress}>
          <FontAwesome5 name="bars" size={24} color="white" />
        </TouchableOpacity>
  
        <Text style={styles.titleText}>{title}</Text>
  
        <TouchableOpacity style={styles.notificationIcon} onPress={onBellPress}>
          <FontAwesome5 name="bell" size={24} color="white" />
          {notificationsCount > 0 && (
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>{notificationsCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };
  

export default NavBar;
