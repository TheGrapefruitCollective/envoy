/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { db } from '../Firebase';
import { updateEmail, updatePassword, User } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';

export const updateAccountCollege = async (id: any, newCollege: string) => {
  const docRef = doc(db, 'users', id);
  await updateDoc(docRef, {
    college: newCollege,
  });
};

export const updateAccountEmail = (user: User, newEmail: string) => {
  updateEmail(user, newEmail)
    .then(() => {
      console.log('Success email');
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateAccountPassword = (user: User, newPassword: string) => {
  updatePassword(user, newPassword)
    .then(() => {
      console.log('Success password');
    })
    .catch((error) => {
      console.log(error);
    });
};
