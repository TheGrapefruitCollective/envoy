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
import {
  validateFullName,
  validateEmail,
  validatePassword,
  isFilled,
  validateCollege,
  validateConfirmPassword,
} from '../../../firebase/Validation';
import createAccount from '../../../firebase/Auth/createAccount';
import styles from './styles';
import { TextBold } from '../../../components/Text';

export function CreateAccountStepOne({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [college, setCollege] = useState('');
  const [email, setEmail] = useState('');

  let filledField = isFilled([fullName, college, email]);

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
                  result={true ? validateCollege(college) === false : false}
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
          <ButtonWhite
            title='Login account'
            onPress={() => navigation.navigate('LogIn')}
          />
        </View>
      </View>
    </>
  );
}

export const CreateAccountStepTwo = ({ route, navigation }) => {
  let userData = route.params.userData;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  let filledField = isFilled([password, confirmPassword]);

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
                  placeholder='Enter your password'
                  secureTextEntry={true}
                  onChangeText={(password: string) => {
                    setPassword(password);
                  }}
                  result={true ? validatePassword(password) === false : false}
                />

                <InputField
                  placeholder='Confirm password'
                  secureTextEntry={true}
                  onChangeText={(confirmPassword: string) => {
                    setConfirmPassword(confirmPassword);
                  }}
                  result={
                    true
                      ? validateConfirmPassword(password, confirmPassword) ===
                        false
                      : false
                  }
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
          <ButtonWhite
            title='Login account'
            onPress={() => navigation.navigate('LogIn')}
          />
        </View>
      </View>
    </>
  );
};
