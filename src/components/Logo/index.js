/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Image, View } from "react-native";
import envoy from "../../../assets/envoy.png";
import styles from "./styles";

function Logo() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={envoy} />
    </View>
  );
}

export default Logo;
