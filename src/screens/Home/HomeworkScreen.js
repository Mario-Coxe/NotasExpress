import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import NavBar from './components/NavBar';
import SideMenu from './components/SideMenu';
import NavigationButton from './components/NavigationButton';

const tarefasPorDisciplina = [
    {
        disciplina: 'Matemática',
        tarefas: [
            { id: 1, descricao: 'Resolver exercício 1', dataEntrega: '10/10/2023' },
            { id: 2, descricao: 'Estudar para prova', dataEntrega: '15/10/2023' },
        ],
    },
    {
        disciplina: 'História',
        tarefas: [
            { id: 3, descricao: 'Escrever um ensaio', dataEntrega: '12/10/2023' },
            { id: 4, descricao: 'Escrever um ensaio', dataEntrega: '12/10/2023' },
            // Adicione mais tarefas aqui
            { id: 5, descricao: 'Estudar a Revolução Francesa', dataEntrega: '18/10/2023' },
        ],
    },
    // ... outras disciplinas ...
];

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
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.disciplinaText}>{item.disciplina}</Text>
                            <FontAwesome
                                name={expandedDisciplina === item ? 'caret-up' : 'caret-down'}
                                size={24}
                                color="#333"
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
                                />
                            </View>
                        )}
                    </TouchableOpacity>
                )}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    NavigationButton: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    disciplinaItem: {
        flexDirection: 'column', // Alteração para tornar o contêiner vertical
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#fff',
        elevation: 3,
        borderRadius: 8,
    },
    disciplinaText: {
        fontSize: 18,
        color: '#333',
    },
    tarefasContainer: {
        marginTop: 16,
    },
    tarefaItem: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
    },
    tarefaText: {
        fontSize: 16,
        color: '#333',
    },
    dataEntrega: {
        fontSize: 14,
        color: '#777',
    },
});

export default HomeworkScreen;
