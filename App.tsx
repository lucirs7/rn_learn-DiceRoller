import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [uri, setUri] = useState(require('./src/images/dice1.png'));

  const generateRandomValue = (): number => {
    return Math.floor((Math.random() * 6) + 1);
  };

  const play = () => {

  };

  return (
    <View style={styles.container}>
      <Image
        source={uri}
      />
      <TouchableOpacity
        onPress={play}
        >
        <Text style={styles.buttonText}>Dice</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123e73',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    marginTop: 35,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 10,
    borderColor: 'white',
  },
});
