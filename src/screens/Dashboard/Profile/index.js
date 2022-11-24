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
import styles from './styles';

function Profile({ navigation }) {
  const [userData, getUserData] = useState([]);

  useEffect(() => {
    getLoggedInUserData(auth.currentUser.uid, getUserData);
  }, []);

  let fullName = userData.fullName;
  let initial = typeof fullName !== 'undefined' ? fullName[0] : '';
  let college = userData.college;
  let email = auth.currentUser.email;

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
                    <TextRegular title={email} />
                  </View>
                </View>
                <InputField placeholder='Change college' />
                <InputField placeholder='Change email' />
                <InputField placeholder='Change password' />
              </ScrollView>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View>
        <View style={styles.buttonContainer}>
          <ButtonBlack title='Update account' />
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
