import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        Este aplicativo foi desenvolvido por alunos da ETEC Ulysses Silveira Guimarães como parte do projeto do curso técnico.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333333',
    lineHeight: 28,
    fontWeight: '500',
  },
});
