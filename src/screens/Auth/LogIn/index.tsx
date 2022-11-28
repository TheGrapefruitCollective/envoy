/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, ScrollView, Platform } from 'react-native';
import InputField from '../../../components/InputField';
import { ButtonBlack, ButtonWhite } from '../../../components/Button';
import { TextBold } from '../../../components/Text';
import loginAccount from '../../../firebase/Auth/loginAccount';
import { validateLogin } from '../../../firebase/Validation';
import styles from './styles';

function LogIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [visiblePassword, setVisiblePassword] = useState(true);

  let validLogin = validateLogin(email, password);
  const [response, getResponse] = useState('');

  return (
    <>
      <KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : null} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <View style={styles.inputFieldContainer}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingVertical: 12 }}
                keyboardShouldPersistTaps='always'
              >
                <InputField
                  placeholder='Enter your email address'
                  onChangeText={(email: string) => setEmail(email)}
                  result={false}
                />

                <InputField
                  placeholder='Enter your password'
                  icon={true}
                  passwordVisibility={visiblePassword}
                  secureTextEntry={visiblePassword}
                  onPress={() => setVisiblePassword((visiblePassword) => !visiblePassword)}
                  onChangeText={(password: string) => setPassword(password)}
                  result={false}
                />

                <TextBold title='Forgot password?' onPress={() => navigation.navigate('ForgotPassword')} />
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
