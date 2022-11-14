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
    backgroundColor: Colours.colour0,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 86,
    height: 86,
  },
});

export default styles;
