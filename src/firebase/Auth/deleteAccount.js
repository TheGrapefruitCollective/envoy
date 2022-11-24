/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { auth } from '../Firebase';
import { deleteUser } from 'firebase/auth';

const deleteAccount = async ({ navigation }) => {
  const user = auth.currentUser;
  deleteUser(user)
    .then(() => {
      console.log('User successfully deleted.');
      navigation.navigate('Home');
    })
    .catch((error) => {
      console.log(`Unable to delete user: ${error}`);
    });
};

export default deleteAccount;
