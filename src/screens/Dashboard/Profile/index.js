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
import { ProfileIcon } from '../../../components/ProfileIcon';
import { ButtonBlack } from '../../../components/Button';
import { TextRegular } from '../../../components/Text';
import InputField from '../../../components/InputField';
import logOutAccount from '../../../firebase/Auth/logOutAccount';
import styles from './styles';
import { auth } from '../../../firebase/Firebase';

function Profile({ navigation }) {
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
                  <ProfileIcon />
                  <View style={styles.profileInfo}>
                    <TextRegular title='Envoy User' />
                    <TextRegular title='college Department' />
                    <TextRegular title={email} />
                  </View>
                </View>
                <InputField placeholder='Change full name' />
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
