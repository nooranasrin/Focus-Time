import React from 'react';
import { View, Text } from 'react-native';
import Counter from '../couter/Counter';
import style from './Timer.styles';

const Timer = ({ focusItem }) => {
  return (
    <View style={style.timer}>
      <Counter minutes={1} />
      <Text style={style.title}>
        Focusing On : <Text style={style.task}>{focusItem}</Text>
      </Text>
    </View>
  );
};

export default Timer;
