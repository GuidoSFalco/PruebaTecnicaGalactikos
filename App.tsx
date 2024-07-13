import React, { useState, useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Icon from 'react-native-vector-icons/FontAwesome';

type SectionProps = PropsWithChildren<{
  team: string;
  goals: number;
  yellow_cards: number;
  shots: number;
  points: number;
}>;

function Card({ children, team, goals, yellow_cards, shots, points }: SectionProps): React.JSX.Element {
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
          <Text style={{ marginHorizontal: 'auto', fontSize: 30, color: '#FF9800' }}>
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
        <Text
          style={{ marginHorizontal: 'auto', color: '#198754', fontSize: 40, fontWeight: 'bold' }}>
          {points}
        </Text>
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

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  interface Props {
    cards: { id: number; team: string; goals: number; yellow_cards: number; shots: number, points: number }[];
  }
  // const [cards, setCards] = useState<CardData[]>([]);
  const [cards, setCards] = useState<{ id: number; team: string; goals: number; yellow_cards: number; shots: number, points: number }[]>([]);

  // interface CardData {
  //   id: number;
  //   title: string;
  //   description: string;
  // }

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('http://192.168.0.6:5000/cards');
        const data = await response.json();
        // const data: CardData[] = await response.json();
        setCards(data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };

    fetchCards();
  }, []);

  // useEffect(() => {
  //   axios.get('http://127.0.0.1:5000/api/data')
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }, []);


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingTop: 40
          }}>

          {/* <Section title={cards.title}></Section> */}
          {cards.map((card) => (
            <Card key={card.id} team={card.team} goals={card.goals} yellow_cards={card.yellow_cards} shots={card.shots} points={card.points}>

            </Card>
          ))}

          {/* {cards.map(element => (
              <Card
                key={element.id} // Agrega una prop 'key' única para cada elemento
                title={element.title}
                description={element.description}
              />
            ));} */}

          {/* {cards && cards.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
        />
      ))} */}

          {/* <FlatList
              data={cards}
              renderItem={({ item }) => (
                <View>
                  <Text>{item.title}</Text>
                  <Text>{item.description}</Text>
                </View>
              )}
            /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
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
    color: '#0277bd',
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

export default App;
