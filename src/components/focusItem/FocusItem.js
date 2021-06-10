import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import style from './FocusItem.styles';
import RoundedButton from '../roundedButton/RoundedButton';

const FocusItem = ({ row, button, onChange }) => {
  const [focusItem, setFocusItem] = useState('');

  return (
    <View style={row}>
      <TextInput
        value={focusItem}
        onChangeText={setFocusItem}
        selectionColor='black'
        style={style.focusInput}
        theme={{ colors: { primary: 'white' } }}
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
