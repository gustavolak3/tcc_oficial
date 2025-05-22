import React from 'react';
import PoupaporcoLogo from '../../../assets/Poupaporco_logo.png';

import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CriarConta({navigation}) {
  function handleLogin(){
    navigation.navigate("Login")
  }
  return (
    
    <View style={styles.container}>
      <Image source={PoupaporcoLogo} style={styles.image} />

    
      <Text style={styles.title}>Cadastro</Text>
 
      <TextInput style={styles.input} placeholder="Insira seu Nome:"/> 
      <TextInput style={styles.input} placeholder="Insira seu email:" />
      <TextInput style={styles.input} placeholder="Insira sua senha:" />
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.textButton}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    top: 0,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#101026',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#FFFFFF', 
  },
  input: {
    width: '90%',
    height: 60,
    backgroundColor: '#FFFFFF',
    color: '#101026',
    fontSize: 20,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 10,
    borderBlockColor: '#A8A8A8',
    borderWidth: 2,
    marginTop: 2,
    
  },
  button: {
    width: '70%',
    height: 60,
    backgroundColor: '#6D90EB',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  textButton: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 300,
    height: 300,
    marginbottom: 1,
    resizeMode: 'center'
    
    
  },
  container2: {
    width: '80%', 
    padding: 15, 
    backgroundColor: '#579ACF', 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 20, 
    textAlign: 'center',
  },
  text2: {
    fontSize: 15,
    color: '#FFFFFF',
    
  },
  cadastro: {
    width: '90%', 
    padding: 15, 
    backgroundColor: '#FFFFFF', 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 20, 
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    borderBlockColor: '#A8A8A8',
    borderWidth: 2,
  }
});
