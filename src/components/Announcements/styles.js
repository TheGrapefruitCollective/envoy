import { StyleSheet } from 'react-native';
import Colours from '../../components/Colours';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colours.white,
  },

  card: {
    backgroundColor: Colours.white,
    borderWidth: 1,
    borderColor: Colours.black,
    borderRadius: 12,
    margin: 12,
    width: 320,
  },

  text: {
    color: Colours.black,
  },
});

export default styles;
