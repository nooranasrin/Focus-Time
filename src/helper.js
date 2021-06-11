const minToMillis = min => min * 1000 * 60;

const formatTime = time => (time < 10 ? `0${time}` : time);

const countTime = (setTime, setProgress, minutes, stopTimer) => {
  setTime(time => {
    if (time === 0) {
      setTime(minToMillis(minutes));
      stopTimer();
      return time;
    }
    const timeLeft = time - 1000;
    setProgress(timeLeft / minToMillis(minutes));
    return timeLeft;
  });
};

const getRemainingTime = milliSeconds => {
  const remainingMins = Math.floor(milliSeconds / 1000 / 60) % 60;
  const remainingSecs = Math.floor(milliSeconds / 1000) % 60;
  return {
    remainingMins: formatTime(remainingMins),
    remainingSecs: formatTime(remainingSecs),
  };
};

const reset = (setProgress, setIsPaused, setIsReset) => () => {
  setProgress(1);
  setIsPaused(true);
  setIsReset(false);
};

const getTimes = (times, resetTimer, setTime) => {
  return times.map(time => ({
    onPress: () => {
      setTime(time);
      resetTimer();
    },
    text: time,
    size: 70,
  }));
};

const getActionItems = (style, size, items) => {
  return items.map(item => {
    return { onPress: item.onPress, text: item.text, style, size };
  });
};

export {
  minToMillis,
  countTime,
  getRemainingTime,
  reset,
  getTimes,
  getActionItems,
};
