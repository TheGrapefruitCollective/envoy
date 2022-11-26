/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useFonts } from 'expo-font';

const Font = () => {
  const [fonts] = useFonts({
    'NotoSans-Regular': require('../../../assets/fonts/NotoSans-Regular.ttf'),
    'NotoSans-Bold': require('../../../assets/fonts/NotoSans-Bold.ttf'),
  });
  return fonts;
};

export default Font;
