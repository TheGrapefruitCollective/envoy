/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export function ButtonBlack(props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        // If unclick props === true, set secondary style to buttonDisable,
        // otherwise set it to buttonBlack.
        props.unclick === true ? styles.buttonDisabled : styles.buttonBlack,
      ]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={styles.buttonTextWhite}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export function ButtonWhite(props) {
  return (
    <TouchableOpacity
      style={[styles.button, styles.buttonWhite]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={styles.buttonTextBlack}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export function ButtonRed(props) {
  return (
    <TouchableOpacity
      style={[styles.button, styles.buttonRed]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={styles.buttonTextWhite}>{props.title}</Text>
    </TouchableOpacity>
  );
}
