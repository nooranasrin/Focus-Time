import { StyleSheet } from 'react-native';

const style = size =>
  StyleSheet.create({
    roundedButton: {
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: size / 2,
      width: size,
      height: size,
      justifyContent: 'center',
      margin: 10,
    },
    text: {
      fontSize: size / 3,
      color: 'white',
      textAlign: 'center',
    },
  });

export default style;
