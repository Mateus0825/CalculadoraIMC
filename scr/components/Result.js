import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const getClassificacao = (imc) => {
  const valor = parseFloat(imc);

  // Verifica a faixa do IMC
  if (valor < 18.5) return { label: 'Abaixo do peso', color: '#FDD835' }; // Amarelo
  if (valor < 24.9) return { label: 'Peso normal', color: '#66BB6A' };   // Verde
  if (valor < 29.9) return { label: 'Sobrepeso', color: '#FFA726' };     // Laranja
  if (valor < 34.9) return { label: 'Obesidade Grau I', color: '#EF5350' }; // Vermelho claro
  if (valor < 39.9) return { label: 'Obesidade Grau II', color: '#E53935' }; // Vermelho forte
  return { label: 'Obesidade Grau III', color: '#C62828' };               // Vermelho escuro
};

const Result = ({ imc, altura }) => {
  // Altura de cm para metros
  const alturaMetros = altura / 100;
   // Calcula o peso ideal mínimo e máximo
  const pesoMinimo = (18.5 * alturaMetros * alturaMetros).toFixed(1);
  const pesoMaximo = (24.9 * alturaMetros * alturaMetros).toFixed(1);

  const { label, color } = getClassificacao(imc);

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Seu IMC é: {imc}</Text>
      <Text style={[styles.classificacao, { color }]}>{label}</Text>
      <Text style={styles.faixaPeso}>
        Peso ideal: entre {pesoMinimo}kg e {pesoMaximo}kg
      </Text>
      <Text style={styles.dica}>
        💡 Dica: Mantenha uma alimentação equilibrada e pratique atividades físicas!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#FFDAB9', 
    padding: 16,
    borderRadius: 12,
  },
  result: {
    fontSize: 24,
    color: '#444444', 
    fontWeight: 'bold',
  },
  classificacao: {
    fontSize: 18,
    marginTop: 4,
    fontWeight: '600',
  },
  faixaPeso: {
    fontSize: 16,
    color: '#555',
    marginTop: 8,
  },
  dica: {
    fontSize: 14,
    color: '#6A4E42',
    marginTop: 10,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default Result;

