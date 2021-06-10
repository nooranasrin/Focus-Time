import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import style from './Counter.styles';

const minToMillis = min => min * 1000 * 60;

const formatTime = time => (time < 10 ? `0${time}` : time);

const countTime = (setTime, setProgress, minutes, reset) => {
  setTime(time => {
    if (time === 0) {
      setTime(minToMillis(minutes));
      reset();
      return time;
    }
    const timeLeft = time - 1000;
    setProgress(timeLeft / minToMillis(minutes));
    return timeLeft;
  });
};

const Counter = ({ minutes, isPaused, setProgress, reset }) => {
  const interval = useRef(null);
  const [milliSeconds, setMilliSeconds] = useState(null);

  useEffect(() => {
    if (!isPaused) {
      interval.current = setInterval(
        () => countTime(setMilliSeconds, setProgress, minutes, reset),
        1000
      );
      return () => clearInterval(interval.current);
    }
  }, [isPaused]);

  useEffect(() => setMilliSeconds(minToMillis(minutes)), [minutes]);

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
