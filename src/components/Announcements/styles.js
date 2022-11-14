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
    margin: 12,
    width: 320,
  },

  text: {
    color: Colours.black,
  },
});

export default styles;
