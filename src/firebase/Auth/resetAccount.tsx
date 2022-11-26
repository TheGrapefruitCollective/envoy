/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { auth } from '../Firebase';
import { sendPasswordResetEmail } from 'firebase/auth';

const resetAccount = async (email: string) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log(`Password reset email sent to: ${email}`);
    })
    .catch((error) => {
      console.log(error.code);
    });
};

export default resetAccount;
