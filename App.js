import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const LoginScreen = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleLogin = () => {
if (email === 'examen@gmail.com' && password === '123') {
Alert.alert('Login exitoso', 'Bienvenido a la aplicación');
} else {
Alert.alert('Error', 'Credenciales incorrectas');
}
};

return (
<View style={styles.container}>
<Text style={styles.title}>Iniciar Sesión</Text>
<TextInput
style={styles.input}
placeholder="Correo electrónico"
keyboardType="email-address"
autoCapitalize="none"
value={email}
onChangeText={setEmail}
/>
<TextInput
style={styles.input}
placeholder="Contraseña"
secureTextEntry
value={password}
onChangeText={setPassword}
/>
<TouchableOpacity style={styles.button} onPress={handleLogin}>
<Text style={styles.buttonText}>Ingresar</Text>
</TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#a9a9a9',
paddingHorizontal: 20,
},
title: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
},
input: {
width: '100%',
height: 50,
borderWidth: 1,
borderColor: '#ccc',
borderRadius: 5,
paddingHorizontal: 10,
marginBottom: 10,
backgroundColor: '#fff',
},
button: {
width: '100%',
backgroundColor: "#ff0000",
padding: 15,
borderRadius: 5,
alignItems: 'center',
},
buttonText: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
});

export default LoginScreen;