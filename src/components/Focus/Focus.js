import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import style from './Focus.styles';
import RoundedButton from '../RoundedButton/RoundedButton';

const Focus = () => {
  const [focusItem, setFocusItem] = useState('');

  return (
    <View>
      <Text style={style.focusText}>What would you like to focus on?</Text>
      <View style={style.row}>
        <TextInput
          value={focusItem}
          onChangeText={setFocusItem}
          style={style.focusInput}
        />
        <RoundedButton text={'+'} size={50} />
      </View>
      <View style={style.row}>
        <RoundedButton text={'5'} size={50} />
        <RoundedButton text={'10'} size={50} />
        <RoundedButton text={'20'} size={50} />
      </View>
    </View>
  );
};

export default Focus;
