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
  },

  inputField: {
    color: Colours.black,
    backgroundColor: Colours.white,
    textAlign: 'left',
    fontSize: 12,
    width: 320,
    height: 48,
    paddingLeft: 12,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colours.black,
    fontFamily: 'NotoSans-Regular',
    margin: 12 / 2,
  },

  showPassword: {
    flex: 1,
    position: 'absolute',
    left: 296,
    top: 21,
  },

  result: {
    width: 288,
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    color: Colours.red,
    fontSize: 12,
    marginLeft: 12,
    justifyContent: 'center',
    fontFamily: 'NotoSans-Regular',
  },

  error: {
    borderColor: Colours.red,
    borderWidth: 1,
  },
});

export default styles;
