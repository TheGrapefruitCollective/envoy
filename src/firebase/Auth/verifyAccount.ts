/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { sendEmailVerification, User } from 'firebase/auth';

const verifyAccount = async (user: User) => {
  sendEmailVerification(user).then(() => {
    console.log(`Email verification sent to ${user.email}`);
  });
};

export default verifyAccount;
