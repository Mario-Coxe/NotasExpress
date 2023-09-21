import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Svg, { Circle, G, Text as SvgText } from 'react-native-svg';
import { FAB } from 'react-native-paper'; // Importe o botão flutuante

function HomeScreen({ navigation }) {
    const notas = 16; // Substitua pelo valor real da porcentagem de notas

    // Função para determinar a cor do gráfico com base na nota
    const getChartColor = () => {
        if (notas >= 16 && notas <= 20) {
            return '#00FF00'; // Verde para 20
        } else if (notas >= 10 && notas <= 15) {
            return '#FFA500'; // Laranja para 13-15
        } else {
            return '#FF0000'; // Vermelho para outros valores
        }
    };

    // Calcula o ângulo para preencher o círculo com base na nota (0-20)
    const circleFillAngle = (notas / 20) * 500;

    // Suponha que você tenha um objeto de disciplina com uma propriedade "nota"
    const disciplinas = [
        {
            nome: 'Matemática',
            nota: 18,
        },
        {
            nome: 'Ciências',
            nota: 15,
        },
        {
            nome: 'História',
            nota: 12,
        },
        // Adicione mais disciplinas conforme necessário
    ];

    // Função para calcular a porcentagem com base na nota (0-20)
    const calcularPorcentagem = (nota) => {
        return (nota / 20) * 100;
    };

    // Renderize as barras de progresso para todas as disciplinas
    const barrasDeProgresso = disciplinas.map((disciplina, index) => {
        const porcentagemNota = calcularPorcentagem(disciplina.nota);

        return (
            <View key={index} style={styles.disciplinaItem}>
                <Text style={styles.disciplinaName}>{disciplina.nome}</Text>
                <View style={styles.progressBarContainer}>
                    <View
                        style={[
                            styles.progressBarFill,
                            { width: `${porcentagemNota}%` },
                        ]}
                    ></View>
                </View>
            </View>
        );
    });

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/image/bekablue.png')}
                style={styles.logo}
            />

            <TouchableOpacity
                style={styles.notificationButton}
                onPress={() => navigation.navigate('Notificacoes')}
            >
                <FontAwesome name="bell" size={24} color="#000" />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.featureSection}>
                    {/* Container de Notificações */}
                    <View style={styles.notificationContainer}>
                        <Text style={styles.notificationTitle}>Notificações</Text>
                        {/* Exemplo de notificação */}
                        <View style={styles.notificationItem}>
                            <FontAwesome name="bell" size={18} color="#007BFF" />
                            <Text style={styles.notificationText}>Você tem uma nova mensagem.</Text>
                        </View>
                        <View style={styles.notificationItem}>
                            <FontAwesome name="bell" size={18} color="#007BFF" />
                            <Text style={styles.notificationText}>Prova de Matemática será Amanhã.</Text>
                        </View>
                    </View>

                    {/* Container de Disciplinas Destacadas */}
                    <View style={styles.disciplinasContainer}>
                        <Text style={styles.disciplinasTitle}>Disciplinas Destacadas</Text>
                        {barrasDeProgresso}
                    </View>
                </View>

                <View style={styles.chartSection}>
                    <Text style={styles.chartTitle}>Desempenho</Text>
                    <Svg width={200} height={200}>
                        <Circle
                            cx={100}
                            cy={100}
                            r={80}
                            stroke="#007BFF"
                            strokeWidth={20}
                            fill="transparent"
                        />
                        <Circle
                            cx={100}
                            cy={100}
                            r={80}
                            stroke={getChartColor()} // Define a cor com base na nota
                            strokeWidth={15}
                            strokeDasharray={`${circleFillAngle}, 360`} // Preenche parcialmente com base no ângulo
                            strokeLinecap="round"
                            fill="transparent"
                        />
                        <G transform={{ translate: '100,100' }}>
                            <SvgText
                                x={0} // Centralize horizontalmente o texto
                                y={10}
                                fontSize={24}
                                fontWeight="bold"
                                fill="#007BFF"
                                textAnchor="middle" // Isso mantém o texto centralizado horizontalmente
                            >
                                {`${notas}`}
                            </SvgText>
                            <SvgText
                                x={0} // Centralize horizontalmente o texto
                                y={40}
                                fontSize={14}
                                fill="#007BFF"
                                textAnchor="middle" // Isso mantém o texto centralizado horizontalmente
                            >
                                Média
                            </SvgText>
                        </G>
                    </Svg>
                </View>
                {/* Botão flutuante */}
                <FAB
                    style={styles.fab}
                    icon={() => <FontAwesome name="book" size={24} color="white" />} // Ícone do livro aberto
                    onPress={() => {
                        // Lide com o pressionamento do botão flutuante aqui
                        console.log('Botão flutuante pressionado');
                    }}
                />
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.footerMenuItem}
                    onPress={() => navigation.navigate('Home')}
                >
                    <FontAwesome name="home" size={24} color="#007BFF" />
                    <Text style={styles.footerMenuText}>Início</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.footerMenuItem}
                    onPress={() => navigation.navigate('Notas')}
                >
                    <FontAwesome name="file-text-o" size={24} color="gray" />
                    <Text style={styles.footerMenuText}>Notas</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.footerMenuItem}
                    onPress={() => navigation.navigate('Chat')}
                >
                    <FontAwesome name="comments" size={24} color="gray" />
                    <Text style={styles.footerMenuText}>Chat</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.footerMenuItem}
                    onPress={() => navigation.navigate('Calendario')}
                >
                    <FontAwesome name="calendar" size={24} color="gray" />
                    <Text style={styles.footerMenuText}>Calendário</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.footerMenuItem}
                    onPress={() => navigation.navigate('Biblioteca')}
                >
                    <FontAwesome name="list-alt" size={24} color="gray" />
                    <Text style={styles.footerMenuText}>Biblioteca</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    banner: {
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notificationButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: 'transparent',
    },
    contentContainer: {
        paddingHorizontal: 16,
        paddingBottom: 24,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
        marginLeft: 10,
    },
    logo: {
        width: 50,
        height: 100,
        resizeMode: 'contain',
        marginTop: 5
    },
    featureSection: {
        marginTop: 20,
    },
    featureTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    featureText: {
        fontSize: 18,
        marginLeft: 16,
    },
    chartSection: {
        alignItems: 'center',
        marginTop: 20,
    },
    chartTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
        paddingVertical: 10,
    },
    footerMenuItem: {
        alignItems: 'center',
    },
    footerMenuText: {
        fontSize: 14,
        marginTop: 4,
    },
    notificationContainer: {
        backgroundColor: '#F0F0F0',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    notificationTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    notificationText: {
        fontSize: 16,
        marginLeft: 8,
    },
    disciplinasContainer: {
        backgroundColor: '#F0F0F0',
        padding: 16,
        borderRadius: 8,
    },
    disciplinasTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    disciplinaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    disciplinaName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 16,
    },
    progressBarContainer: {
        flex: 1,
        height: 10,
        backgroundColor: '#D3D3D3',
        borderRadius: 5,
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#00FF00',
        borderRadius: 5,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        marginBottom: 0,
        backgroundColor: '#007BFF', // Cor de fundo do botão
    },
});

export default HomeScreen;
