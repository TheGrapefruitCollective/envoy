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
    backgroundColor: Colours.white,
    borderWidth: 1,
    borderColor: Colours.black,
    borderRadius: 12,
    margin: 12 / 2,
    width: 320,
    height: 64,
  },

  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    color: Colours.black,
    fontFamily: 'Ubuntu-Regular',
    fontSize: 12,
  },
});

export default styles;
