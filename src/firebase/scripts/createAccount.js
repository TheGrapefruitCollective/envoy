/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from './../config';

const createAccount = (createAccountCredentials) => {
  addDoc(collection(db, 'users'), {
    fullName: createAccountCredentials[0],
    college: createAccountCredentials[1],
    email: createAccountCredentials[2],
    password: createAccountCredentials[3],
    created: Timestamp.now(),
  });
};

export default createAccount;
