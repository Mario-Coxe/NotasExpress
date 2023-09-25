import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const NewsContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notícias</Text>
      <ScrollView horizontal pagingEnabled style={styles.slideContainer}>
        {/* Slide 1 */}
        <View style={styles.slide}>
          <Image
            source={require('../../../../assets/image/events/event1.jpeg')} // Substitua pelo caminho da sua imagem
            style={styles.slideImage}
          />
          <Text style={styles.slideText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida diam ac convallis.
          </Text>
        </View>

        {/* Slide 2 */}
        <View style={styles.slide}>
          <Image
            source={require('../../../../assets/image/events/event1.jpeg')} // Substitua pelo caminho da sua imagem
            style={styles.slideImage}
          />
          <Text style={styles.slideText}>
            Vivamus sollicitudin, libero eget varius congue, metus ipsum venenatis dui.
          </Text>
        </View>

        {/* Adicione mais slides conforme necessário */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
   
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0077B6', // Cor ajustada para combinar com o design do HomeScreen
  },
  slideContainer: {
    flexDirection: 'row',
  },
  slide: {
    width: 300,
    marginRight: 16,
  },
  slideImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  slideText: {
    fontSize: 16,
    color: 'gray', // Cor ajustada para combinar com o design do HomeScreen
  },
});

export default NewsContainer;
