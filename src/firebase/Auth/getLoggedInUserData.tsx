/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { db } from '../Firebase';
import { doc, getDoc } from 'firebase/firestore';

const getLoggedInUserData = async (uid: string, getUserData: any) => {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    getUserData(docSnap.data());
  } else {
    console.log('No document exist.');
  }
};

export default getLoggedInUserData;
