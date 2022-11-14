/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { View, ScrollView, Text } from 'react-native';
import { Announcement } from '../../../../components/Announcements';
import styles from './styles';

function AnnouncementDepartment(props) {
  return (
    <View style={styles.container}>
      <ScrollView></ScrollView>
    </View>
  );
}

export default AnnouncementDepartment;
