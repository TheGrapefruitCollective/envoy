/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { View } from 'react-native';
import Logo from '../../components/Logo';
import { ButtonBlack } from '../../components/Button';

import styles from './styles';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />

      <ButtonBlack
        title='Create Account'
        onPress={() => {
          navigation.navigate('CreateAccountStepOne');
        }}
      />

      <ButtonBlack
        title='Login'
        onPress={() => {
          navigation.navigate('LogIn');
        }}
      />
    </View>
  );
}

export default Home;
