/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet } from 'react-native';
import Colours from '../../components/Colours';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colours.white,
  },

  card: {
    borderRadius: 12,
    width: 86,
    height: 86,
    backgroundColor: Colours.black,
  },

  cardContent: {
    flex: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: Colours.white,
    fontFamily: 'Ubuntu-Regular',
    fontSize: 32,
  },

  paragraph: {
    color: Colours.black,
    fontFamily: 'Ubuntu-Regular',
    fontSize: 12,
  },
});

export default styles;
