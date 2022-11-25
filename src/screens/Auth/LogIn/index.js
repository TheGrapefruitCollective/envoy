/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState } from 'react';
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
import { TextBold } from '../../../components/Text';
import loginAccount from '../../../firebase/Auth/loginAccount';
import { validateLogin } from '../../../firebase/Validation';
import styles from './styles';

function LogIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let validLogin = validateLogin(email, password);
  const [response, getResponse] = useState('');

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
                  result={response}
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
            unclick={validLogin === true ? false : true}
            disabled={validLogin === true ? false : true}
            onPress={() => {
              console.log(`Response: ${response}.`);
              loginAccount(email, password, { navigation }, getResponse);
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
