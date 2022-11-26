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
    alignItems: 'center',
    jusifyContent: 'center',
    backgroundColor: Colours.white,
  },

  about: {
    flexDirection: 'row',
    margin: 12,
    width: 320,
    height: 86,
  },

  aboutInfo: {
    justifyContent: 'center',
    marginLeft: 12,
  },

  buttonContainer: {
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
  },

  buttonDeleteContainer: {
    flex: 1,
    backgroundColor: Colours.white,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default styles;
