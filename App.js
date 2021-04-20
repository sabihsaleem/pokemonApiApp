import React from 'react';
import type from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
} from 'react-native';
import PokeList from './components/PokeList'

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Text style={styles.pokeListHeader}> Pokemon API </Text>
        <PokeList/>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  pokeListHeader: {
    fontSize: 20,
    color: '#fff'
  }
});

export default App;
