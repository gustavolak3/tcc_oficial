import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
export default function Home() {
  // Sample data for the bar chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [4000, 2500, 3000, 2000, 3500, 4500, 3000, 4000, 3000, 3700, 4900, 5200],
        color: (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // Green
        barThickness: 20,
      },
      {
        data: [3000, 1500, 2400, 1900, 2800, 3500, 2900, 3300, 2700, 2000, 3800, 4000],
        color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red
        barThickness: 20,
      },
    ],
    legend: ['Dataset 1', 'Dataset 2'], // Optional
  };
return (
    <View style={styles.container}>
      <Text style={styles.header}>PoupaPorco</Text>
      <Text style={styles.greeting}>Olá, Nome!</Text>
      <Text style={styles.subtitle}>Aqui está o seu resumo financeiro:</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total de Receita:</Text>
        <Text style={styles.cardAmount}>R$ 41.580,00</Text>
      </View>
      <View style={[styles.card, styles.redCard]}>
        <Text style={styles.cardTitle}>Total de Despesas:</Text>
        <Text style={styles.cardAmount}>R$ 40.120,00</Text>
      </View>
      <View style={[styles.card, styles.saldo]}>
        <Text style={styles.cardTitle}>Saldo:</Text>
        <Text style={styles.cardAmount}>R$ 1.460,00</Text>
      </View>
      <BarChart
        data={data}
        width={420}
        height={220}
        fromZero={true}
        withInnerLines={false}
        showValuesOnTopOfBars={true}
        chartConfig={{
          backgroundColor: '#FFF',
          backgroundGradientFrom: '#FFF',
          backgroundGradientTo: '#FFF',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: () => '#000',
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
},
        }}
        style={{ marginVertical: 8, borderRadius: 16 }}
      />
      {/* Icons at the bottom can be added here */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  greeting: {
    fontSize: 18,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#75f779',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: '100%',
  },
  redCard: {
    backgroundColor: '#ff3737',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardAmount: {
    fontSize: 20,
  },
  saldo: {
    backgroundColor: '#16ff00',
  }
});