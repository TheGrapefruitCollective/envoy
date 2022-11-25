/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const loginAccount = async (email, password, { navigation }, getResponse) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log('Success');
      navigation.navigate('Dashboard');
    })
    .catch((error) => {
      if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/wrong-password'
      ) {
        getResponse('Invalid username or password.');
      }
    });
};

export default loginAccount;
