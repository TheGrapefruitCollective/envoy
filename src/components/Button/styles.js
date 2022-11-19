/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet } from 'react-native';
import Colours from '../Colours';

const styles = StyleSheet.create({
  button: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 12,
    width: 320,
    height: 48,
    margin: 12 / 2,
  },

  buttonBlack: {
    backgroundColor: Colours.black,
    borderColor: Colours.black,
  },

  buttonRed: {
    backgroundColor: Colours.red,
    borderColor: Colours.red,
  },

  buttonText: {
    color: Colours.white,
    fontFamily: 'NotoSans-Bold',
    fontSize: 12,
  },
});

export default styles;
