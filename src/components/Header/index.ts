/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Colours from '../Colours';

const HeaderOptions = (title?: string) => {
  let options = {
    title: title,
    headerShadowVisible: false,
    headerTintColor: Colours.white,
    headerStyle: {
      backgroundColor: Colours.black,
    },
    headerTitleStyle: {
      fontFamily: 'NotoSans-Regular',
      fontSize: 16,
    },
  };
  return options;
};

export default HeaderOptions;
