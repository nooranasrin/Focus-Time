import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import style from './RoundedButton.styles';

const RoundedButton = ({ text, size }) => {
  return (
    <TouchableOpacity style={style(size).roundedButton}>
      <Text style={style(size).text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
