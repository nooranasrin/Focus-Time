import React from 'react';
import {View, Text} from 'react-native';
import styles from './FocusHistory.styles';

const FocusHistory = ({historyList}) => {
  const completedTasks = historyList.map((history, index) => {
    return <Text style={styles.history} key={index}>{history}</Text>;
  });

  return <View>
    <Text style={styles.text}>Tasks you have focused on : </Text>
    {completedTasks}
  </View>
}

export default FocusHistory;