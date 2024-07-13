/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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

type SectionProps = PropsWithChildren<{
  team: string;
  goals: number;
  yellow_cards: number;
  shots: number;
}>;

function Card({ children, team, goals, yellow_cards, shots }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.card}>
      <Text
        style={[
          styles.title,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {team}
      </Text>
      <Text
        style={[
          styles.title,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {goals}
      </Text>
      <Text
        style={[
          styles.title,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {yellow_cards}
      </Text>
      <Text
        style={[
          styles.title,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {shots}
      </Text>
      <Text
        style={[
          styles.description,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  interface Props {
    cards: { id: number; team: string; goals:number; yellow_cards:number; shots:number }[];
  }
  // const [cards, setCards] = useState<CardData[]>([]);
  const [cards, setCards] = useState<{ id: number; team: string; goals:number; yellow_cards:number; shots:number }[]>([]);

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
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

          {/* <Section title={cards.title}></Section> */}
          {cards.map((card) => (
      <Card key={card.id} team={card.team} goals={card.goals} yellow_cards={card.yellow_cards} shots={card.shots}>
        
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default App;
