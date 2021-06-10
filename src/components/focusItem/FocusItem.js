import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import style from './FocusItem.styles';
import RoundedButton from '../roundedButton/RoundedButton';

const FocusItem = ({ row, button, onChange }) => {
  const [focusItem, setFocusItem] = useState('');

  return (
    <View style={row}>
      <TextInput
        value={focusItem}
        onChangeText={setFocusItem}
        style={style.focusInput}
      />
      <RoundedButton
        text={button.text}
        size={button.size}
        onPress={() => onChange(focusItem)}
        extraStyle={button.extraStyle}
      />
    </View>
  );
};

export default FocusItem;
