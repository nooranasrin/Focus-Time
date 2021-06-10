import React, { useState } from 'react';
import { View, Text } from 'react-native';
import style from './Focus.styles';
import FocusItem from '../focusItem/FocusItem';
import Timer from '../timer/Timer';

const Focus = () => {
  const [focusItem, setFocusItem] = useState('');

  if (focusItem) {
    return <Timer focusItem={focusItem} onEnd={() => setFocusItem(null)} />;
  }

  return (
    <View style={style.focusItemContainer}>
      <Text style={style.focusText}>What would you like to focus on?</Text>
      <FocusItem
        button={{ text: '+', size: 50, extraStyle: style.button(22) }}
        onChange={setFocusItem}
        row={style.row}
      />
    </View>
  );
};

export default Focus;
