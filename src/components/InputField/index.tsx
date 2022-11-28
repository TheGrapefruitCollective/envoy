/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as React from 'react';
import { TextInput, View } from 'react-native';
import { TypeInputField } from '../../types';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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

      {props.icon === true ? (
        <MaterialCommunityIcons
          style={styles.showPassword}
          // If passwordVisibility is true, set name to 'eye'. Otherwise, set to 'eye-off'.
          name={props.passwordVisibility === true ? 'eye' : 'eye-off'}
          color={Colours.black}
          size={16}
          onPress={props.onPress}
        />
      ) : (
        false
      )}
    </View>
  );
}

export default InputField;
