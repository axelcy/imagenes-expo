// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default function Card() {
  return (
    <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/coffee1.jpeg')} />
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.texto} >Mocha</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#c4c4c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 300,
    width: 300,
    objectFit: 'contain',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  buttonContainer: {
    backgroundColor: 'green',
    width: 300,
    padding: 10,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
  },
  texto:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
