import React, {useState} from 'react';
import {Text, View} from 'react-native';
import style from './Focus.styles';
import FocusItem from '../focusItem/FocusItem';
import Timer from '../timer/Timer';
import FocusHistory from "../FocusHistory/FocusHistory";
import RoundedButton from "../roundedButton/RoundedButton";

const getClearButton = (focusHistory, setFocusHistory) => {
  return !focusHistory.length
    ? <></>
    : <RoundedButton
      text={'Clear'}
      size={80}
      extraStyle={style.clear}
      onPress={() => setFocusHistory([])}/>;
}

const Focus = () => {
  const [focusItem, setFocusItem] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  if (focusItem) {
    return <Timer
      setFocusHistory={() => setFocusHistory([...focusHistory, focusItem])}
      focusItem={focusItem}
      onEnd={() => setFocusItem(null)}
    />;
  }

  return (
    <>
      <View style={style.focusItemContainer}>
        <Text style={style.focusText}>What would you like to focus on?</Text>
        <FocusItem
          button={{text: '+', size: 50, extraStyle: style.button(22)}}
          onChange={setFocusItem}
          row={style.row}
        />
      </View>
      <FocusHistory historyList={focusHistory}/>
      {getClearButton(focusHistory, setFocusHistory)}
    </>
  );
};

export default Focus;
