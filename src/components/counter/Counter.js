import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import style from './Counter.styles';
import { minToMillis, countTime, getRemainingTime } from '../../helper';

const Counter = ({ minutes, isPaused, setProgress, stop, isReset }) => {
  const interval = useRef(null);
  const [milliSeconds, setMilliSeconds] = useState(null);

  useEffect(() => {
    if (!isPaused) {
      interval.current = setInterval(
        () => countTime(setMilliSeconds, setProgress, minutes, stop),
        1000
      );
    }
    return () => clearInterval(interval.current);
  }, [isPaused]);

  useEffect(() => {
    if (isReset) {
      clearInterval(interval.current);
    }
    setMilliSeconds(minToMillis(minutes));
  }, [minutes, isReset]);

  const { remainingMins, remainingSecs } = getRemainingTime(milliSeconds);

  return (
    <View style={style.counter}>
      <Text style={style.time}>
        {remainingMins} : {remainingSecs}
      </Text>
    </View>
  );
};

export default Counter;
