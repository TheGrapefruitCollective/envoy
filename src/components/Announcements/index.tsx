/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import styles from './styles';

export function Announcement(props) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Title style={styles.text}>{props.title}</Title>
          <Paragraph style={styles.text}>{props.description}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}
