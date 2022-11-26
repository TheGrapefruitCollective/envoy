/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { View, Text } from 'react-native';
import Types from '../../Types';
import styles from './styles';

export function TextBold(props: Types) {
  return (
    <View style={styles.container}>
      <Text style={styles.bold} onPress={props.onPress}>
        {props.title}
      </Text>
    </View>
  );
}

export function TextRegular(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.regular} onPress={props.onPress}>
        {props.title}
      </Text>
    </View>
  );
}
