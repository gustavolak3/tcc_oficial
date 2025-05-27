// 1 Passo - Importar o React
import React from 'react';

import PoupaporcoLogo from '../../../assets/Poupaporco_logo.png';
import CriarConta from '../cadastro/cadastro.js';
 

// 2 Passo - Importando os componentes do React Native
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

// 3 Passo - Criar a função que cria tela de Login
export default function Login({navigation}) {

  function handleCadastro()
  {
    navigation.navigate("CriarConta")
  }
  function handleHome()
  {
    navigation.navigate("Home")
  }
  return (
    
    <View style={styles.container}>
      <Image source={PoupaporcoLogo} style={styles.image} />

    
      <Text style={styles.title}>Login</Text>
      
      <TextInput style={styles.input} placeholder="Digite seu email:" />
      <TextInput style={styles.input} placeholder="Digite sua senha:" />
      
      <TouchableOpacity style={styles.button} onPress={handleHome}>
        <Text style={styles.textButton}>Acessar</Text>
      </TouchableOpacity>
  
 <Text style={styles.text2}>Não tem uma conta? </Text>
 <TouchableOpacity style={styles.button} onPress={handleCadastro}>
  <Text style={styles.textButton}>Clique aqui!</Text>
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
    marginBottom: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
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
    width: '80%', // Largura do container
    padding: 15, // Espaçamento interno
    backgroundColor: '#579ACF', // Cor de fundo roxa
    borderRadius: 10, // Bordas arredondadas
    alignItems: 'center', // Centraliza os itens horizontalmente
    justifyContent: 'center', // Centraliza os itens verticalmente
    marginTop: 20, 
    textAlign: 'center',
  },
  text2: {
    fontSize: 15,
    fontWeight: 'bold',
    
  }
});