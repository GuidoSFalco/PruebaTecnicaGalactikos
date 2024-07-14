import React, { useState, useEffect } from 'react';
// import type { PropsWithChildren } from 'react';
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
import Card from './src/components/Card';




function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // const [cards, setCards] = useState<CardData[]>([]);
  let [cards, setCards] = useState([])


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
            <Text style={styles.appTitle}>
              FutScores
            </Text>

          {cards.map(card => (
            <Card
              key={card.id}
              team={card.team}
              goals={card.goals}
              yellow_cards={card.yellow_cards}
              shots={card.shots}
              points={card.points}
            />
          ))}

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

export default App;
