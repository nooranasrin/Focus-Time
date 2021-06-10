import React, { useState } from 'react';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { View, Text } from 'react-native';
import Counter from '../couter/Counter';
import style from './Timer.styles';
import focusStyle from '../focus/Focus.styles';
import RoundedButton from '../roundedButton/RoundedButton';

const getTimeButtons = (times, reset, setTime) =>
  times.map(count => (
    <RoundedButton
      onPress={() => {
        setTime(count);
        reset();
      }}
      extraStyle={focusStyle.button(70)}
      text={count}
      size={70}
    />
  ));

const reset = (setProgress, setIsPaused) => () => {
  setProgress(1);
  setIsPaused(true);
};

const Timer = ({ focusItem }) => {
  useKeepAwake();
  const [isPaused, setIsPaused] = useState(true);
  const [progress, setProgress] = useState(1);
  const [time, setTime] = useState(0.1);

  const resetTimer = reset(setProgress, setIsPaused);

  return (
    <View style={style.timer}>
      <Counter
        minutes={time}
        isPaused={isPaused}
        setProgress={setProgress}
        reset={resetTimer}
      />
      <Text style={style.title}>
        Focusing On : <Text style={style.task}>{focusItem}</Text>
      </Text>
      <View style={focusStyle.row}>
        {getTimeButtons([5, 10, 15], resetTimer, setTime)}
      </View>
      <ProgressBar
        style={style.progressBar}
        progress={progress}
        color={'rgb(200, 42, 66)'}
      />
      <RoundedButton
        extraStyle={style.buttonContainer}
        size={130}
        text={isPaused ? 'Start' : 'Pause'}
        onPress={() => (isPaused ? setIsPaused(false) : setIsPaused(true))}
      />
    </View>
  );
};

export default Timer;
