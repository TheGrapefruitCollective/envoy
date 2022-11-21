/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { auth } from './../config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const loginAccount = (email, password, { navigation }) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.info('Successfully logged in!');
      navigation.navigate('Dashboard');
    })
    .catch((error) => {
      if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/wrong-password'
      ) {
        console.error(error.code);
      }
    });
};

export default loginAccount;
