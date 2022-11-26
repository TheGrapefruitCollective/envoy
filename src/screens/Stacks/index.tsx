/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Home from '../../screens/Home';
import {
  CreateAccountStepOne,
  CreateAccountStepTwo,
} from '../../screens/Auth/CreateAccount';
import PrivacyPolicy from '../../screens/Auth/DataPrivacy';
import LogIn from '../../screens/Auth/LogIn';
import Colours from '../../components/Colours';
import NavigationBar from '../../screens/NavigationBar';
import ForgotPassword from '../../screens/Auth/ForgotPassword';

const Stack = createNativeStackNavigator();

function Stacks() {
  const [fonts] = useFonts({
    'NotoSans-Regular': require('../../../assets/fonts/NotoSans-Regular.ttf'),
    'NotoSans-Bold': require('../../../assets/fonts/NotoSans-Bold.ttf'),
  });

  if (!fonts) {
    return null;
  }

  const headerStyleTitle = {
    fontFamily: 'NotoSans-Regular',
    fontSize: 16,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          options={{ headerShown: false }}
          name='Home'
          component={Home}
        />

        <Stack.Screen
          name='CreateAccountStepOne'
          options={{
            title: 'Create account',
            headerShadowVisible: false,
            headerTintColor: Colours.white,
            headerStyle: {
              backgroundColor: Colours.black,
            },
            headerTitleStyle: headerStyleTitle,
          }}
          component={CreateAccountStepOne}
        />

        <Stack.Screen
          name='CreateAccountStepTwo'
          options={{
            title: 'Create account',
            headerShadowVisible: false,
            headerTintColor: Colours.white,
            headerStyle: {
              backgroundColor: Colours.black,
            },
            headerTitleStyle: headerStyleTitle,
          }}
          component={CreateAccountStepTwo}
        />

        <Stack.Screen
          name='PrivacyPolicy'
          options={{
            title: 'Privacy policy',
            headerShadowVisible: false,
            headerTintColor: Colours.white,
            headerStyle: {
              backgroundColor: Colours.black,
            },
            headerTitleStyle: headerStyleTitle,
          }}
          component={PrivacyPolicy}
        />

        <Stack.Screen
          name='LogIn'
          options={{
            title: 'Login account',
            headerShadowVisible: false,
            headerTintColor: Colours.white,
            headerStyle: {
              backgroundColor: Colours.black,
            },
            headerTitleStyle: headerStyleTitle,
          }}
          component={LogIn}
        />

        <Stack.Screen
          name='ForgotPassword'
          options={{
            title: 'Reset password',
            headerShadowVisible: false,
            headerTintColor: Colours.white,
            headerStyle: {
              backgroundColor: Colours.black,
            },
            headerTitleStyle: headerStyleTitle,
          }}
          component={ForgotPassword}
        />

        <Stack.Screen
          name='Dashboard'
          options={{
            title: 'Envoy',
            headerBackVisible: false,
            headerShadowVisible: false,
            headerTintColor: Colours.white,
            headerStyle: {
              backgroundColor: Colours.black,
            },
            headerTitleStyle: headerStyleTitle,
          }}
          component={NavigationBar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Stacks;
