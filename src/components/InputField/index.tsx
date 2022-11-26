/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TextInput, View } from 'react-native';
import { TypeInputField } from '../../types';
import Colours from '../Colours';
import styles from './styles';

function InputField(props: TypeInputField) {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.inputField, props.result === true ? styles.error : null]}
        placeholder={props.placeholder}
        placeholderTextColor={Colours.black}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
      />
    </View>
  );
}

export default InputField;
