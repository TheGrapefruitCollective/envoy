/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { db } from '../Firebase';
import { updateEmail, updatePassword, User } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';

/**
 * Update user's college.
 * @param id
 * @param newCollege
 */
export const updateAccountCollege = async (id: any, newCollege: string) => {
  const docRef = doc(db, 'users', id);
  await updateDoc(docRef, {
    college: newCollege,
  });
};

/**
 * Update user's email.
 * @param user
 * @param newEmail
 */
export const updateAccountEmail = (user: User, newEmail: string) => {
  updateEmail(user, newEmail)
    .then(() => {
      console.log('Success email');
    })
    .catch((error) => {
      console.log(error);
    });
};

/**
 * Update user's password.
 * TODO: Fix - User's token expires as soon as the user's email is changed.
 * @param user
 * @param newPassword
 */
export const updateAccountPassword = (user: User, newPassword: string) => {
  updatePassword(user, newPassword)
    .then(() => {
      console.log('Success password');
    })
    .catch((error) => {
      console.log(error);
    });
};
