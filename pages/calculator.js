import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonCalc from '../components/buttoncalc';
import styles from '../styles/calculatorstyles';

const CalculatorScreen = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
  
    const handlePress = (value) => {
      if (value === 'C') {
        setInput('');
        setResult(null);
      } else if (value === '=') {
        try {
          const evalResult = eval(input);
          setResult(evalResult);
        } catch (e) {
          setResult('Error');
        }
      } else {
        setInput(input + value);
      }
    };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.inputText}>{input || '0'}</Text>
        {result !== null && <Text style={styles.resultText}>= {result}</Text>}
      </View>
      
      <View style={styles.row}>
        <ButtonCalc title="C" onPress={() => handlePress('C')} backgroundColor="#a5a5a5" color="#000" />
        <ButtonCalc title="+/-" onPress={() => handlePress('-')} backgroundColor="#a5a5a5" color="#000" />
        <ButtonCalc title="%" onPress={() => handlePress('%')} backgroundColor="#a5a5a5" color="#000" />
        <ButtonCalc title="÷" onPress={() => handlePress('/')} backgroundColor="#ff9500" />
      </View>

      <View style={styles.row}>
        <ButtonCalc title="7" onPress={() => handlePress('7')} />
        <ButtonCalc title="8" onPress={() => handlePress('8')} />
        <ButtonCalc title="9" onPress={() => handlePress('9')} />
        <ButtonCalc title="x" onPress={() => handlePress('*')} backgroundColor="#ff9500" />
      </View>

      <View style={styles.row}>
        <ButtonCalc title="4" onPress={() => handlePress('4')} />
        <ButtonCalc title="5" onPress={() => handlePress('5')} />
        <ButtonCalc title="6" onPress={() => handlePress('6')} />
        <ButtonCalc title="-" onPress={() => handlePress('-')} backgroundColor="#ff9500" />
      </View>

      <View style={styles.row}>
        <ButtonCalc title="1" onPress={() => handlePress('1')} />
        <ButtonCalc title="2" onPress={() => handlePress('2')} />
        <ButtonCalc title="3" onPress={() => handlePress('3')} />
        <ButtonCalc title="+" onPress={() => handlePress('+')} backgroundColor="#ff9500" />
      </View>

      <View style={styles.row}>
        <ButtonCalc title="0" onPress={() => handlePress('0')} flex={2} />
        <ButtonCalc title="." onPress={() => handlePress('.')} />
        <ButtonCalc title="=" onPress={() => handlePress('=')} backgroundColor="#ff9500" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
