import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from '../styles/buttoncalcstyles';

const ButtonCalc = ({ title, onPress, backgroundColor = '#333', color = '#fff', flex = 1 }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, { backgroundColor, flex }]}
    >
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCalc;
