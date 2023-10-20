import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SideMenu from '../components/SideMenu';
import NavigationButton from '../components/NavigationButton';
import FirstQuarter from '../request/Notas';

const ProgressBar = ({ nota, notaMaxima }) => {
  const percentual = (nota / notaMaxima) * 100;

  return (
    <View style={styles.progressBar}>
      <View style={[styles.progressFill, { width: `${percentual}%`, backgroundColor: percentual >= 10 ? 'green' : 'red' }]} />
    </View>
  );
};

const FirstQuarterScreen = () => {
  const [expandedDisciplina, setExpandedDisciplina] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container}>
      <SideMenu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        onMenuItemClick={() => console.log('Menu item clicked')}
      />

      <FlatList
        data={FirstQuarter}
        keyExtractor={(item) => item.disciplina}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.disciplinaItem}
            onPress={() => setExpandedDisciplina(expandedDisciplina === item ? null : item)}
          >
            <View style={styles.disciplinaHeader}>
              <Text style={styles.disciplinaText}>{item.disciplina}</Text>
              <FontAwesome
                name={expandedDisciplina === item ? 'caret-up' : 'caret-down'}
                size={24}
                color="#0077B6"
              />
            </View>
            {expandedDisciplina === item && (
              <View style={styles.tarefasContainer}>
                {item.notas.map((nota) => {
                  const keys = Object.keys(nota);
                  const notaKey = keys.find((key) => key !== 'id');
                  const notaValue = nota[notaKey];

                  return (
                    <View style={styles.tarefaItem} key={nota.id}>
                      {notaKey !== 'grafico' ? (
                        <Text style={styles.tarefaText} key={notaKey}>
                          {notaKey.toUpperCase()}: {notaValue}
                        </Text>
                      ) : (
                        <ProgressBar
                          nota={parseInt(notaValue)}
                          notaMaxima={20}
                          key={nota.id}
                        />
                      )}
                    </View>
                  );
                })}
              </View>
            )}
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.navigationButton}>
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
  navigationButton: {
    alignItems: 'center',
  },
  listContent: {
    paddingTop: 10,
    paddingBottom: 350,
  },
  disciplinaItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 5,
  },
  disciplinaHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  progressBar: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  progressFill: {
    height: '100%',
    position: 'absolute',
  },
});

export default FirstQuarterScreen;
