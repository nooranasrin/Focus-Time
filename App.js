import React from 'react';
import { Text, View } from 'react-native';
import styles from './App.styles';
import Focus from './src/components/Focus/Focus';

export default function App() {
  return (
    <View style={styles.container}>
      <Focus />
    </View>
  );
}
