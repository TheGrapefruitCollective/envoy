/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export function ButtonBlack(props) {
  return (
    <TouchableOpacity
      style={[styles.button, styles.buttonBlack]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
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
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}
