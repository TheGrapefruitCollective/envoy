/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { View, ScrollView } from 'react-native';
import { Announcement } from '../../../../components/Announcements';
import styles from './styles';

function AnnouncementUniversity() {
  return (
    <View style={styles.container}>
      <ScrollView></ScrollView>
    </View>
  );
}

export default AnnouncementUniversity;
