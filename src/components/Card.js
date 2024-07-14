import React from 'react'
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Card({ team, goals, yellow_cards, shots, points }) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.card}>
      {/* Nombre Equipo */}
      <Text style={styles.team}>
        {team}
      </Text>

      <View style={{ flexGrow: 1, flexDirection: 'row', marginVertical: 40 }}>

        {/* Disparos */}
        <View style={{ flexGrow: 1 }}>
          <Text
            style={[
              styles.shots,
              {
                color: isDarkMode ? Colors.white : '#424242',
              },
            ]}>
            DISPAROS
          </Text>
          <Text style={{ marginHorizontal: 'auto', fontSize: 30, color: 'black' }}>
            {shots}
          </Text>
        </View>

        {/* Goles */}
        <View style={{ flexGrow: 1 }}>
          <Text
            style={[
              styles.goals,
              {
                color: isDarkMode ? Colors.white : '#424242',
              },
            ]}>
            GOLES
          </Text>
          <Text style={{ marginHorizontal: 'auto', fontSize: 30, color: '#0D6EFD' }}>
            {goals}
          </Text>
        </View>

        <View style={{ flexGrow: 1 }}>

          {/* Tarjetas amarillas */}
          <Text
            style={[
              styles.yellow_cards,
              {
                color: isDarkMode ? Colors.white : '#424242',
              },
            ]}>
            AMARILLAS
          </Text>
          <Text style={{ marginHorizontal: 'auto', fontSize: 30, color: '#B71C1C' }}>
            {yellow_cards}
          </Text>
        </View>
      </View>


      <View>
        {/* Puntos */}
        <Text
          style={[
            styles.goals,
            {
              color: isDarkMode ? Colors.white : '#198754',
            },
          ]}>
          PUNTOS
        </Text>

        <View style={{ backgroundColor: '#D1E7DD', marginHorizontal: 'auto', paddingHorizontal: 12, borderRadius: 40 }}>
          <Text
            style={{ marginHorizontal: 'auto', color: '#198754', fontSize: 40, fontWeight: 'bold' }}>
            {points}
          </Text>
        </View>
      </View>

      {/* <Text
        style={[
          styles.shots,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  appTitle: {
    marginHorizontal: 'auto',
    marginVertical: 20,
    fontSize: 40
  },


  card: {
    // backgroundColor: '#E1F5FE',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 8,
    // paddingHorizontal: 48,
    marginHorizontal: 24,

  },

  team: {
    // color: '#0277bd',
    color: '#FF9800',
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 24,
    marginHorizontal: 'auto',
  },

  goals: {
    color: '#198754',
    fontSize: 16,
    marginHorizontal: 'auto'
  },

  shots: {
    fontSize: 16,
    marginHorizontal: 'auto'
  },

  yellow_cards: {
    fontSize: 16,
    marginHorizontal: 'auto'
  },
});

export default Card
