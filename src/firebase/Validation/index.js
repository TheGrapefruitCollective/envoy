/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const VALID_EMAIL = new RegExp(
  '([a-zA-Z0-9._]{4,32})+[@]+([a-zA-Z0-9]{2,6})+[.]+[a-zA-Z0-9]{2,6}'
);
const VALID_PASSWORD = new RegExp(
  '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]){8,16}'
);

export const isFilled = (userCredentials) => {
  for (let i = 0; i < userCredentials.length; ++i) {
    if (userCredentials[i] === '') {
      return false;
    }
  }
  return true;
};

export const validateFullName = (fullName) => {
  if (fullName.length >= 6 && fullName.includes(' ')) return true;
  else return false;
};

export const validateCollege = (college) => {
  if (college !== '') return true;
  else return false;
};

export const validateEmail = (email) => {
  if (email !== '' && email.search(VALID_EMAIL) === 0) return true;
  else return false;
};

export const validatePassword = (password) => {
  if (password !== '' && password.search(VALID_PASSWORD) === 0) return true;
  else return false;
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (password !== '' && confirmPassword !== '' && password === confirmPassword)
    return true;
  else return false;
};

export const validateCreateAccont = () => {
  console.log();
};

export const validateLogin = (email, password) => {
  if (email !== '' && password !== '') return true;
  else false;
};

function UserFeedback() {
  console.log('UserFeeback');
}

export default UserFeedback;
