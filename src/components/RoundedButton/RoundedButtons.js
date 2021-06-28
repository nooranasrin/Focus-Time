import React from 'react';
import { View } from 'react-native';
import RoundedButton from './RoundedButton';
import focusStyle from '../focus/Focus.styles';

const RoundedButtons = ({ items }) => {
  const roundedButtons = items.map((item, index) => (
    <RoundedButton
      key={index}
      onPress={item.onPress}
      extraStyle={focusStyle.button(item.size)}
      text={item.text}
      size={item.size}
    />
  ));
  return <View style={focusStyle.row}>{roundedButtons}</View>;
};

export default RoundedButtons;
