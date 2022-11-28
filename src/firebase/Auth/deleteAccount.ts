/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { auth, db } from '../Firebase';
import { deleteUser } from 'firebase/auth';
import { doc, deleteDoc } from 'firebase/firestore';

const deleteAccount = async (id: string, { navigation }) => {
  const user = auth.currentUser;
  deleteUser(user)
    .then(async () => {
      await deleteDoc(doc(db, 'users', id));
      console.log('User successfully deleted.');
      navigation.navigate('Home');
    })
    .catch((error) => {
      console.log(`Unable to delete user: ${error}`);
    });
};

export default deleteAccount;
