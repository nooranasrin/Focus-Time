import React, {useState} from 'react';
import {ProgressBar} from 'react-native-paper';
import {useKeepAwake} from 'expo-keep-awake';
import {View, Text, Vibration} from 'react-native';
import Counter from '../counter/Counter';
import style from './Timer.styles';
import RoundedButton from '../roundedButton/RoundedButton';
import RoundedButtons from '../roundedButton/RoundedButtons';
import {reset, getTimes, getActions} from '../../helper';

const stop = (resetTimer, onEnd, setFocusHistory) => {
  setFocusHistory();
  resetTimer();
  onEnd();
  Vibration.vibrate(3000);
};

const Timer = ({focusItem, onEnd, setFocusHistory}) => {
  useKeepAwake();
  const [isPaused, setIsPaused] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const [progress, setProgress] = useState(1);
  const [time, setTime] = useState(0.1);

  const resetTimer = reset(setProgress, setIsPaused, setIsReset);
  const actionItems = getActions(setIsReset, onEnd, resetTimer, style.cancelButton, 80);

  return (
    <View style={style.timer}>
      <Counter
        minutes={time}
        isPaused={isPaused}
        setProgress={setProgress}
        stop={() => stop(resetTimer, onEnd, setFocusHistory)}
        isReset={isReset}
      />
      <Text style={style.title}>
        Focusing On : <Text style={style.task}>{focusItem}</Text>
      </Text>
      <RoundedButtons items={getTimes([10, 15, 20], resetTimer, setTime)}/>
      <ProgressBar progress={progress} color={'rgb(200, 42, 66)'}/>
      <RoundedButton
        extraStyle={style.buttonContainer}
        size={130}
        text={isPaused ? 'Start' : 'Pause'}
        onPress={() => {
          isPaused
            ? setIsPaused(false)
            : setIsPaused(true) && setIsReset(false);
        }}
      />
      <RoundedButtons items={actionItems}/>
    </View>
  );
};

export default Timer;
