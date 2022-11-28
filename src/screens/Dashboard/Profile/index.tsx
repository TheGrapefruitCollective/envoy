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
} from 'react-native';
import { useEffect, useState } from 'react';
import { ProfileIcon } from '../../../components/ProfileIcon';
import { ButtonBlack } from '../../../components/Button';
import { TextRegular } from '../../../components/Text';
import InputField from '../../../components/InputField';
import { auth } from '../../../firebase/Firebase';
import getLoggedInUserData from '../../../firebase/Auth/getLoggedInUserData';
import logOutAccount from '../../../firebase/Auth/logOutAccount';
import verifyAccount from '../../../firebase/Auth/verifyAccount';
import styles from './styles';
import { validateUpdateAccount } from '../../../firebase/Validation';

function Profile({ navigation }) {
  const [userData, getUserData] = useState<any>([]);

  useEffect(() => {
    getLoggedInUserData(auth.currentUser.uid, getUserData);
  }, []);

  let initial =
    typeof userData.fullName !== 'undefined' ? userData.fullName[0] : '';
  let emailVerified =
    auth.currentUser.emailVerified === true ? '' : '(Not verified)';

  const [newCollege, setNewCollege] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [password, setPassword] = useState('');

  let valid =
    validateUpdateAccount(
      auth.currentUser.email,
      userData,
      password,
      newCollege,
      newEmail,
      newPassword
    ) === true
      ? true
      : false;

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
                <View style={styles.profilePreview}>
                  <ProfileIcon title={initial} />
                  <View style={styles.profileInfo}>
                    <TextRegular title={userData.fullName} />
                    <TextRegular title={userData.college} />
                    <TextRegular
                      title={`${auth.currentUser.email} ${emailVerified}`}
                      onPress={() => {
                        emailVerified === ''
                          ? null
                          : verifyAccount(auth.currentUser);
                      }}
                    />
                  </View>
                </View>
                <InputField
                  placeholder='Enter new college'
                  result={false}
                  onChangeText={(newCollege) => setNewCollege(newCollege)}
                />
                <InputField
                  placeholder='Enter new email'
                  result={false}
                  onChangeText={(newEmail) => setNewEmail(newEmail)}
                />
                <InputField
                  placeholder='Enter new password'
                  result={false}
                  onChangeText={(newPassword) => setNewPassword(newPassword)}
                  secureTextEntry={true}
                />

                <InputField
                  placeholder='Enter your password to confirm'
                  result={false}
                  onChangeText={(password) => setPassword(password)}
                  secureTextEntry={true}
                />
              </ScrollView>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View>
        <View style={styles.buttonContainer}>
          <ButtonBlack
            title='Update account'
            onPress={() => console.log('Clicked.')}
            unclick={valid}
            disabled={valid}
          />
          <ButtonBlack
            title='Log out'
            onPress={() => logOutAccount({ navigation })}
          />
        </View>
      </View>
    </>
  );
}

export default Profile;
