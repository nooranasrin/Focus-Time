import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  title: {
    color: 'white',
    textAlign: 'center',
  },
  task: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  timer: {
    width: '100%',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  cancelButton: {},
  button: margin => ({ marginTop: margin }),
});

export default style;
