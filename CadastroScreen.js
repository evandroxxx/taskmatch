import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { View, ImageBackground, Image, TextInput, TouchableOpacity, Text, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen';

const backgroundImage = require('../assets/bg.png');
const logoImage = require('../assets/logosmall.png');
const Stack = createStackNavigator();

const CadastroScreen = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const cadastrar = async () => {
    try {
      const response = await fetch('http://localhost/xampp/takemeup/conn/cadastro.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome,
          password,
          endereco,
          email,
          telefone
        })
      });
      const data = await response.json();
      console.log(data);

      navigation.navigate('WebViewScreen', { uri: 'http://localhost/xampp/takemeup/teste.php' });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.logoContainer}>
          <Image source={logoImage} style={styles.logo} />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>Make your registration</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
          style={styles.input}
          placeholder="PassWord"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
          <TextInput
            style={styles.input}
            placeholder="Adress"
            value={endereco}
            onChangeText={setEndereco}
          />
          <TextInput
            style={styles.input}
            placeholder="Mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />
                  <TouchableOpacity style={styles.button} onPress={CadastroScreen}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.buttonlogin} onPress={(TelVoltar) => navigation.navigate('LoginScreen')}>
  <Text style={styles.buttonTextlogin}>If you already have an account Login here</Text>
</TouchableOpacity>
        </View>
</ImageBackground>
</View> 
  );
  
};

const styles = StyleSheet.create({
   link:{
    color: '#FFFFFF',
    fontSize: 14,
  },
  linkText:{
    color: '#FFFFFF',
    fontSize: 14,
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:-12,
  },
  logo: {
    width: 150,
    height: 150,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15,
    marginBottom:150,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#ffffff',
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#333333',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    opacity: 0.5, // aqui está a definição da opacidade
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  
  buttonlogin: {
    width: '100%',
    height: 50,
    backgroundColor: '#E0A000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    opacity: 0.5, // aqui está a definição da opacidade
  },
  buttonTextlogin: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default CadastroScreen;
