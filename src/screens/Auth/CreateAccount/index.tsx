/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, ScrollView, Platform } from 'react-native';
import InputField from '../../../components/InputField';
import { ButtonBlack, ButtonWhite } from '../../../components/Button';
import {
  validateFullName,
  validateEmail,
  validatePassword,
  isFilled,
  validateConfirmPassword,
} from '../../../firebase/Validation';
import createAccount from '../../../firebase/Auth/createAccount';
import styles from './styles';
import { TextBold } from '../../../components/Text';

export function CreateAccountStepOne({ navigation }): JSX.Element {
  const [fullName, setFullName] = React.useState('');
  const [college, setCollege] = React.useState('');
  const [email, setEmail] = React.useState('');

  let filledField = isFilled([fullName, college, email]);

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
                  placeholder='Enter your full name'
                  onChangeText={(fullName: string) => {
                    setFullName(fullName);
                  }}
                  result={true ? validateFullName(fullName) === false : false}
                />
                <InputField
                  placeholder='Enter your college department'
                  onChangeText={(college: string) => {
                    setCollege(college);
                  }}
                />
                <InputField
                  placeholder='Enter your email address'
                  onChangeText={(email: string) => {
                    setEmail(email);
                  }}
                  result={true ? validateEmail(email) === false : false}
                />
              </ScrollView>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View>
        <View style={styles.buttonContainer}>
          <ButtonBlack
            title='Continue'
            unclick={filledField === true ? false : true}
            disabled={filledField === true ? false : true}
            onPress={() =>
              navigation.navigate('CreateAccountStepTwo', {
                userData: [fullName, college, email],
              })
            }
          />
          <ButtonWhite title='Login account' onPress={() => navigation.navigate('LogIn')} />
        </View>
      </View>
    </>
  );
}

export function CreateAccountStepTwo({ route, navigation }): JSX.Element {
  let userData = route.params.userData;

  const [visiblePassword, setVisiblePassword] = React.useState(false);
  const [visibleConfirmPassword, setVisibleConfirmPassword] = React.useState(false);

  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  let filledField = isFilled([password, confirmPassword]);

  console.log(visiblePassword);

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
                  placeholder='Enter your password'
                  icon={true}
                  passwordVisibility={visiblePassword}
                  onPress={() => setVisiblePassword((visiblePassword) => !visiblePassword)}
                  secureTextEntry={visiblePassword}
                  onChangeText={(password: string) => {
                    setPassword(password);
                  }}
                  result={true ? validatePassword(password) === false : false}
                />

                <InputField
                  placeholder='Confirm password'
                  icon={true}
                  passwordVisibility={visibleConfirmPassword}
                  onPress={() => {
                    setVisibleConfirmPassword((visibleConfirmPassword) => !visibleConfirmPassword);
                  }}
                  secureTextEntry={visibleConfirmPassword}
                  onChangeText={(confirmPassword: string) => {
                    setConfirmPassword(confirmPassword);
                  }}
                  result={true ? validateConfirmPassword(password, confirmPassword) === false : false}
                />

                <TextBold
                  title='By creating an account, you agree to our Privacy Policy'
                  onPress={() => navigation.navigate('PrivacyPolicy')}
                />
              </ScrollView>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View>
        <View style={styles.buttonContainer}>
          <ButtonBlack
            title='Create account'
            unclick={filledField === true ? false : true}
            disabled={filledField === true ? false : true}
            onPress={() => {
              userData.push(password);
              createAccount(userData, { navigation });
            }}
          />
          <ButtonWhite title='Login account' onPress={() => navigation.navigate('LogIn')} />
        </View>
      </View>
    </>
  );
}
