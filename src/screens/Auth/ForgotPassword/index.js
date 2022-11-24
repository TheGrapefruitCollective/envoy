/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  Platform,
} from 'react-native';
import InputField from '../../../components/InputField';
import { ButtonBlack, ButtonWhite } from '../../../components/Button';
import styles from './styles';
import { useState } from 'react';

function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <>
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <View style={styles.inputFieldContainer}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 12 }}
                keyboardShouldPersistTaps='always'
              >
                <InputField
                  label='Email address'
                  placeholder='Enter your email address'
                  onChangeText={(email) => setEmail(email)}
                />
              </ScrollView>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <View>
        <View style={styles.buttonContainer}>
          <ButtonBlack title='Reset password' />
        </View>
      </View>
    </>
  );
}

export default ForgotPassword;
