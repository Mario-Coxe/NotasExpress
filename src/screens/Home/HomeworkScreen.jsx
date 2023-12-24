import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';
import NavigationButton from './components/NavigationButton';
import tarefasPorDisciplina from './request/Homework';
import styles from './styles/HomeworkScreenStyle';

const HomeworkScreen = () => {
    const [expandedDisciplina, setExpandedDisciplina] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <View style={styles.container}>
            <NavBar
                title="Tarefas"
                onMenuPress={toggleMenu}
                onBellPress={() => {
                    // Lógica para ação do ícone do sino
                }}
            />

            <SideMenu
                isOpen={isMenuOpen}
                onClose={toggleMenu}
                onMenuItemClick={() => console.log('Menu item clicked')}
            />

            <FlatList
                data={tarefasPorDisciplina}
                keyExtractor={(item) => item.disciplina}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.disciplinaItem}
                        onPress={() => setExpandedDisciplina(expandedDisciplina === item ? null : item)}
                    >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={styles.disciplinaText}>{item.disciplina}</Text>
                            <FontAwesome
                                name={expandedDisciplina === item ? 'caret-up' : 'caret-down'}
                                size={24}
                                color="#0077B6"
                            />
                        </View>
                        {expandedDisciplina === item && (
                            <View style={styles.tarefasContainer}>
                                <Text style={styles.title}>Tarefas de {item.disciplina}</Text>
                                <FlatList
                                    data={item.tarefas}
                                    keyExtractor={(task) => task.id.toString()}
                                    renderItem={({ item: task }) => (
                                        <View style={styles.tarefaItem}>
                                            <Text style={styles.tarefaText}>{task.descricao}</Text>
                                            <Text style={styles.dataEntrega}>Data de Entrega: {task.dataEntrega}</Text>
                                        </View>
                                    )}

                                    contentContainerStyle={styles.listContent}
                                />
                            </View>
                        )}
                    </TouchableOpacity>
                )}

                contentContainerStyle={styles.listContent}
            />

            <View style={styles.NavigationButton}>
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
        </View>
    );
};


export default HomeworkScreen;
