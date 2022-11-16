/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  View,
  Text,
} from 'react-native';
import Logo from '../../../components/Logo';
import { ButtonBlack, ButtonRed } from '../../../components/Button';
import InputField from '../../../components/InputField';

import styles from './styles';

function Menu() {
  return (
    <View style={styles.container}>
      <ButtonBlack title='License' />
      <ButtonBlack title='GitHub' />
      <ButtonBlack title='Terms of Service' />
      <ButtonBlack title='Privacy Policy' />
      <ButtonRed title='Delete account' />
    </View>
  );
}

export default Menu;
