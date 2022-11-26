/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

type Type = {
  disabled: boolean;
  onPress: (params: any) => any;
  title: string;
  unclick: boolean;
};

export function ButtonBlack(props: Type) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        props.unclick === true ? styles.buttonDisabled : styles.buttonBlack,
      ]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={styles.buttonTextWhite}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export function ButtonWhite(props: Type) {
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

export function ButtonRed(props: Type) {
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
