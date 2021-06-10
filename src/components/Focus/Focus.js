import React, { useState } from 'react';
import { View, Text } from 'react-native';
import style from './Focus.styles';
import RoundedButton from '../roundedButton/RoundedButton';
import FocusItem from '../focusItem/FocusItem';
import Timer from '../timer/Timer';

const Focus = () => {
  const [focusItem, setFocusItem] = useState('Hello');

  if (focusItem) {
    return <Timer focusItem={focusItem} />;
  }

  return (
    <View style={style.focusItemContainer}>
      <Text style={style.focusText}>What would you like to focus on?</Text>
      <FocusItem
        button={{ text: '+', size: 50, extraStyle: style.button(22) }}
        onChange={setFocusItem}
        row={style.row}
      />
      <View style={style.row}>
        <RoundedButton extraStyle={style.button(70)} text={'5'} size={70} />
        <RoundedButton extraStyle={style.button(70)} text={'10'} size={70} />
        <RoundedButton extraStyle={style.button(70)} text={'20'} size={70} />
      </View>
    </View>
  );
};

export default Focus;
