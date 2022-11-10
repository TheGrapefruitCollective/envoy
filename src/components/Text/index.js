import { View, Text } from 'react-native';
import styles from './styles';

export function TextBold(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.bold}>{props.title}</Text>
    </View>
  );
}

export function TextRegular(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.regular}>{props.title}</Text>
    </View>
  );
}
