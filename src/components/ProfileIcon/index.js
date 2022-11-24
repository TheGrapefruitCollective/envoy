/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { View } from 'react-native';
import { Card, Title } from 'react-native-paper';
import styles from './styles';

export function ProfileIcon(props) {
  return (
    <View>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Title style={styles.title}>{props.title}</Title>
        </Card.Content>
      </Card>
    </View>
  );
}
