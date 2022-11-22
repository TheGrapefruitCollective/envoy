/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { auth, db } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const createAccount = (createAccountCredentials, { navigation }) => {
  createUserWithEmailAndPassword(
    auth,
    createAccountCredentials[2],
    createAccountCredentials[3]
  )
    .then(function (data) {
      setDoc(doc(db, 'users', data._tokenResponse.localId), {
        fullName: createAccountCredentials[0],
        college: createAccountCredentials[1],
      });
      navigation.navigate('Dashboard');
    })
    .catch((error) => {
      console.log(error);
    });
};

export default createAccount;
