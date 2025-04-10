# 📱 Calculadora de IMC - React Native

Este projeto é uma **calculadora de IMC (Índice de Massa Corporal)** desenvolvida com **React Native** utilizando o **Expo**. A aplicação permite ao usuário inserir seu peso e altura, calcular seu IMC e exibir uma **classificação baseada no resultado**.

---

## 🚀 Funcionalidades

- 📩 Entrada de dados do usuário (peso em kg e altura em cm)
- ✅ Validação dos campos obrigatórios e valores numéricos
- 📊 Cálculo do IMC com resultado arredondado para 2 casas decimais
- 🏷️ Exibição da classificação de acordo com o IMC:
  - Abaixo do peso
  - Peso normal
  - Sobrepeso
  - Obesidade Grau I
  - Obesidade Grau II
  - Obesidade Grau III
- 🎨 Estilização personalizada dos componentes

---

## 📂 Estrutura dos Componentes

- **`App.js`**: Componente principal que organiza os elementos da tela.
- **`components/Title.js`**: Título da aplicação.
- **`components/FormIMC.js`**: Formulário com inputs e botão de cálculo.
- **`components/Result.js`**: Exibição do resultado e classificação do IMC.

---

## ▶️ Como executar o projeto

### ✅ Pré-requisitos
- Node.js instalado
- Expo CLI instalado globalmente:
```bash
npm install -g expo-cli
