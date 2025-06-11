import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SobreProjeto() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Este aplicativo foi desenvolvido por alunos da ETEC, turma do 3º ano do curso de Desenvolvimento de Sistemas (3DS), como parte do Trabalho de Conclusão de Curso (TCC).
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    lineHeight: 28,
  },
});
