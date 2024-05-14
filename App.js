import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        color:'black',
        fontStyle:'italic',
      }}>ALLING love </Text>
      <Text style={{
        fontSize:20,
        textDecorationLine:'underline',
        textShadowColor:'blue',
        fontStyle: 'italic',
        color:'brown'}}>Alling love 20
      </Text><Text style={{
        fontSize:50,
        fontStyle:'bold',
        color:'red'

      }}>Alling love 50</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});3