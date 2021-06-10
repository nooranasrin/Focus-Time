import React, { useState } from 'react';
import { View, Text } from 'react-native';
import style from './Counter.styles';

const minToMillis = min => min * 1000 * 60;

const formatTime = time => (time < 10 ? `0${time}` : time);

const Counter = ({ minutes }) => {
  const [milliSeconds, setMilliSeconds] = useState(minToMillis(minutes));

  const remainingMinutes = Math.floor(milliSeconds / 1000 / 60) % 60;
  const remainingSeconds = Math.floor(milliSeconds / 1000) % 60;

  return (
    <View style={style.counter}>
      <Text style={style.time}>
        {formatTime(remainingMinutes)} : {formatTime(remainingSeconds)}
      </Text>
    </View>
  );
};

export default Counter;
