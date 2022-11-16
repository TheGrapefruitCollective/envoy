/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet } from 'react-native';
import Colours from '../Colours';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignContent: 'center',
    margin: 12,
    backgroundColor: Colours.white,
  },

  regular: {
    color: Colours.black,
    fontFamily: 'Ubuntu-Regular',
    fontSize: 12,
  },

  bold: {
    color: Colours.black,
    fontFamily: 'Ubuntu-Bold',
    fontSize: 24,
  },
});

export default styles;
