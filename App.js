import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, SafeAreaView, Alert } from 'react-native';


export default function App() {
  const [value,setValue] = useState('Дарова')
  const handleButtonPress = () => {
    Alert.alert("itProger" , "you Pressed on button" , [
      {
        text : 'Да',
        onPress : () => console.log('yes')
       },
      {
      text : 'Отмена',
      onPress : () => console.log('no')
    
      }
    ])
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style ={styles.text}>{value}</Text>
      <TextInput style={styles.input} placeholder='text input'/>
      <Button onPress={handleButtonPress} color='red'  title='Нажми на меня'/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems : 'center',
    justifyContent: 'center'
  },
  text : {
    color : 'red',
  },

});
