import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NavBar from './parts/NavBar';
import SideMenu from './parts/SideMenu';
import SchoolCalendarScreen from './parts/SchoolCalendarScreen';

export default function CalendarScreen() {
    const [selectedItem, setSelectedItem] = useState(null); // Use a mesma variável para rastrear a seleção

    //sidebar menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (route) => {
        navigation.navigate(route);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <View style={{ flex: 1 }}>
            <NavBar
                title="Calendário"
                onMenuPress={toggleMenu}
                onBellPress={() => {

                }}
            />

            <SideMenu
                isOpen={isMenuOpen}
                onClose={toggleMenu}
                onMenuItemClick={handleMenuItemClick}
            />

            <View style={styles.topBar}>
                <TouchableOpacity
                    style={[styles.item, selectedItem === 'ESCOLA' && styles.selectedItem]}
                    onPress={() => handleItemClick('ESCOLA')}
                >
                    <Text>ESCOLA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.item, selectedItem === 'PROFESSOR' && styles.selectedItem]}
                    onPress={() => handleItemClick('PROFESSOR')}
                >
                    <Text>PROFESSOR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.item, selectedItem === 'EVENTO' && styles.selectedItem]}
                    onPress={() => handleItemClick('EVENTO')}
                >
                    <Text>EVENTO</Text>
                </TouchableOpacity>
            </View>

            {/* Renderize a tela do calendário da escola quando a opção "Escola" for clicada */}
            {selectedItem === 'ESCOLA' && (
                <SchoolCalendarScreen />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingHorizontal: 10,
    },
    item: {
        paddingVertical: 10,
    },
    selectedItem: {
        borderBottomWidth: 2, // Linha mais grossa para o item selecionado
    },
    calendarContainer: {
        flex: 1,
        padding: 16,
    },
});
