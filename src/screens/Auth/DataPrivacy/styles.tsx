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
    alignContent: 'center',
    backgroundColor: Colours.white,
  },

  sections: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
    textAlign: 'justify',
    borderTopColor: Colours.black,
    borderTopWidth: StyleSheet.hairlineWidth,
    fontFamily: 'NotoSans-Regular',
  },
});

export default styles;
