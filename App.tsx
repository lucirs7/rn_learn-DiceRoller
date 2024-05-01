import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [uri, setUri] = useState(require('./src/images/dice1.png'));
  const [previousNumber, setPreviousNumber] = useState(1);

  const generateRandomValue = (): number => {
    return Math.floor((Math.random() * 6) + 1);
  };

  const play = () => {
    const randomValue: number = generateRandomValue();
    console.log('Random number = ', randomValue, ' previous = ', previousNumber);
    if (randomValue === previousNumber) {
      play();
      return;
    } else {
      setPreviousNumber(randomValue);
    }
    switch(randomValue) {
      case 1:
        setUri(require('./src/images/dice1.png'));
        break;
      case 2:
        setUri(require('./src/images/dice2.png'));
        break;
      case 3:
        setUri(require('./src/images/dice3.png'));
        break;
      case 4:
        setUri(require('./src/images/dice4.png'));
        break;
      case 5:
        setUri(require('./src/images/dice5.png'));
        break;
      case 6:
        setUri(require('./src/images/dice6.png'));
        break;
    }
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
