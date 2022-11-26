/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type TypeAnnouncement = {
  title: string;
  description: string;
};

export type TypeButton = {
  disabled?: boolean;
  title: string;
  unclick?: boolean;
  onPress: (params: any) => any;
};

export type TypeHeaderOptions = {
  name: string;
  component: (navigation: any) => JSX.Element;
};

export type TypeInputField = {
  placeholder: string;
  result: boolean;
  secureTextEntry?: boolean;
  onChangeText: (params: any) => any;
};

export type TypeProfileIcon = {
  title: string;
};

export type TypeText = {
  title: string;
  onPress?: (params: any) => any;
};
