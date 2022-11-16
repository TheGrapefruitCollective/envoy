/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { StyleSheet } from 'react-native';
import Colours from '../../../components/Colours';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colours.white,
  },

  profilePreview: {},

  inputFieldContainer: {
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonContainer: {
    backgroundColor: Colours.white,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default styles;
