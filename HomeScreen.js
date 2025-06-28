import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const logout = async () => {
    await AsyncStorage.removeItem('userToken');
    navigation.navigate('Login'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Hola, crack! 
       
      </Text>
       <Text style={styles.title}> El sistema estaba aburrido </Text>
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Adios!!!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  button: {
    backgroundColor: '#007bff', padding: 12, borderRadius: 5, alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default HomeScreen;
