import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('./assets/central_perk_logo.jpeg')} />
      <Text style={styles.text}>Try some of our most popular flavors!</Text>
      <Card />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  img: {
    height: 100,
    objectFit: 'contain'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});
