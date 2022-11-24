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
    backgroundColor: Colours.white,
  },

  regular: {
    color: Colours.black,
    fontFamily: 'NotoSans-Regular',
    fontSize: 12,
  },

  bold: {
    color: Colours.black,
    fontFamily: 'NotoSans-Bold',
    fontSize: 12,
  },
});

export default styles;
