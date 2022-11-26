/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import {
  CreateAccountStepOne,
  CreateAccountStepTwo,
} from '../../screens/Auth/CreateAccount';
import PrivacyPolicy from '../../screens/Auth/DataPrivacy';
import LogIn from '../../screens/Auth/LogIn';
import NavigationBar from '../../screens/NavigationBar';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import HeaderOptions from '../../components/Header';
import Font from '../../components/Font';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

function Stacks() {
  if (!Font()) return null;

  return (
    <NavigationContainer>
      <StatusBar style='light' backgroundColor={Colors.black} />
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={HeaderOptions()} />

        <Stack.Screen
          name='CreateAccountStepOne'
          component={CreateAccountStepOne}
          options={HeaderOptions('Create account')}
        />

        <Stack.Screen
          name='CreateAccountStepTwo'
          component={CreateAccountStepTwo}
          options={HeaderOptions('Create account')}
        />

        <Stack.Screen
          name='PrivacyPolicy'
          component={PrivacyPolicy}
          options={HeaderOptions('Privacy policy')}
        />

        <Stack.Screen
          name='LogIn'
          component={LogIn}
          options={HeaderOptions('Log in')}
        />

        <Stack.Screen
          name='ForgotPassword'
          component={ForgotPassword}
          options={HeaderOptions('Reset password')}
        />

        <Stack.Screen
          name='Dashboard'
          component={NavigationBar}
          options={HeaderOptions('Envoy')}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stacks;
