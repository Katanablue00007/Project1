import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  position: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  bigLetter: {
    fontSize: 25,
    color: 'black',
  },
});

export default styles;
