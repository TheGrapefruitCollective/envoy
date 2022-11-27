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

function Profile({ navigation }) {
  const [userData, getUserData] = useState<any>([]);

  useEffect(() => {
    getLoggedInUserData(auth.currentUser.uid, getUserData);
  }, []);

  let fullName = userData.fullName;
  let initial = typeof fullName !== 'undefined' ? fullName[0] : '';
  let college = userData.college;
  let email = auth.currentUser.email;
  let emailVerified =
    auth.currentUser.emailVerified === true ? '' : '(Not verified)';

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
                    <TextRegular title={fullName} />
                    <TextRegular title={college} />
                    <TextRegular
                      title={`${email} ${emailVerified}`}
                      onPress={() => {
                        emailVerified === ''
                          ? null
                          : verifyAccount(auth.currentUser);
                      }}
                    />
                  </View>
                </View>
                <InputField
                  placeholder='Change college'
                  result={false}
                  onChangeText={function (params: any) {
                    throw new Error('Function not implemented.');
                  }}
                  secureTextEntry={false}
                />
                <InputField
                  placeholder='Change email'
                  result={false}
                  onChangeText={function (params: any) {
                    throw new Error('Function not implemented.');
                  }}
                  secureTextEntry={false}
                />
                <InputField
                  placeholder='Change password'
                  result={false}
                  onChangeText={function (params: any) {
                    throw new Error('Function not implemented.');
                  }}
                  secureTextEntry={false}
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
            disabled={false}
            onPress={function (params: any) {
              throw new Error('Function not implemented.');
            }}
            unclick={false}
          />
          <ButtonBlack
            title='Log out'
            onPress={() => logOutAccount({ navigation })}
            disabled={false}
            unclick={false}
          />
        </View>
      </View>
    </>
  );
}

export default Profile;
