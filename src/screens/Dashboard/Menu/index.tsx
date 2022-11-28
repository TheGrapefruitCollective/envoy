/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Linking, View } from 'react-native';
import { LogoMini } from '../../../components/Logo';
import { TextRegular } from '../../../components/Text';
import { ButtonBlack, ButtonRed } from '../../../components/Button';
import deleteAccount from '../../../firebase/Auth/deleteAccount';
import styles from './styles';
import { auth } from '../../../firebase/Firebase';

function Menu({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.about}>
          <LogoMini />
          <View style={styles.aboutInfo}>
            <TextRegular title='Envoy' />
            <TextRegular title='(c) The Grapefruit Collective' />
            <TextRegular title='Version 1.0.0' />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <ButtonBlack
            title='License'
            onPress={() => Linking.openURL('https://github.com/cegargo/pocket/blob/master/LICENSE')}
          />
          <ButtonBlack title='GitHub' onPress={() => Linking.openURL('https://github.com/cegargo/pocket')} />
          <ButtonBlack title='Privacy Policy' onPress={() => navigation.navigate('PrivacyPolicy')} />
        </View>
        <View style={styles.buttonDeleteContainer}>
          <ButtonRed title='Delete account' onPress={() => deleteAccount(auth.currentUser.uid, { navigation })} />
        </View>
      </View>
    </>
  );
}

export default Menu;
