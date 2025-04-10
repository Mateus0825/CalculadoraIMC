import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import Result from './Result';

const FormIMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  // Função para calcular o IMC com base nos valores digitados
  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = parseFloat(altura) / 100;
      const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2); // Arredonda para 2 casas decimais
      setImc(imcCalculado);
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <View style={styles.button}>
        <Button title="Calcular IMC" onPress={calcularIMC} color="#FF8C42" />
      </View>
      {imc && <Result imc={imc} altura={parseFloat(altura)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: '#FFF0DC',
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: '#D9B382',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#FFFDF7',
  },
  button: {
    marginBottom: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default FormIMC;
