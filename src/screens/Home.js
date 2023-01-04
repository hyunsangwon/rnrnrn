import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Scooter')}>
        <Text style={styles.text}>Scooter Here</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Heart')}>
        <Text style={styles.text}>Heart Here</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Travle')}>
        <Text style={styles.text}>Travle Here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#121212',
  },
  button: {
    alignItems: 'center',
    width: 250,
    backgroundColor: '#4e73df',
    padding: 10,
    marginVertical: 10,
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
  },
});
