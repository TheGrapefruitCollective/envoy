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
import loginAccount from '../../../firebase/Auth/loginAccount';
import styles from './styles';
import { useState } from 'react';
import { TextBold, TextRegular } from '../../../components/Text';

function LogIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

                <InputField
                  label='Password'
                  placeholder='Enter your password'
                  secureTextEntry={true}
                  onChangeText={(password) => setPassword(password)}
                />
                <TextBold
                  title='Forgot password?'
                  onPress={() => navigation.navigate('ForgotPassword')}
                />
              </ScrollView>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <View>
        <View style={styles.buttonContainer}>
          <ButtonBlack
            title='Log in'
            onPress={() => {
              loginAccount(email, password, { navigation });
            }}
          />
          <ButtonWhite
            title='Create Accout'
            onPress={() => {
              navigation.navigate('CreateAccountStepOne');
            }}
          />
        </View>
      </View>
    </>
  );
}

export default LogIn;
