/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { View, ScrollView } from 'react-native';
import { TextBold, TextRegular } from '../../../components/Text';
import styles from './styles';

export function TermsOfService() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TextBold title='Terms of Service' />
        <TextRegular title='Terms of Service' />
      </ScrollView>
    </View>
  );
}

export function PrivacyPolicy() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TextBold size={24} title='Privacy Policy' />
        <TextRegular title='Privacy Policy' />
      </ScrollView>
    </View>
  );
}
