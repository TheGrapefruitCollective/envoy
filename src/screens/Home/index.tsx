/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { View } from 'react-native';
import Logo from '../../components/Logo';
import { ButtonBlack, ButtonWhite } from '../../components/Button';
import styles from './styles';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />

      <ButtonBlack
        title='Login'
        onPress={() => {
          navigation.navigate('LogIn');
        }}
        disabled={false}
        unclick={false}
      />

      <ButtonWhite
        title='Create Account'
        onPress={() => {
          navigation.navigate('CreateAccountStepOne');
        }}
        disabled={false}
        unclick={false}
      />
    </View>
  );
}

export default Home;
