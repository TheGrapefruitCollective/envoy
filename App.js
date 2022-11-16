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
import Home from './src/screens/Home';
import {
  CreateAccountStepOne,
  CreateAccountStepTwo,
} from './src/screens/Auth/CreateAccount';
import { TermsOfService, PrivacyPolicy } from './src/screens/Auth/DataPrivacy';
import LogIn from './src/screens/Auth/LogIn';
import Colours from './src/components/Colours';
import NavigationBar from './src/screens/NavigationBar';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fonts] = useFonts({
    'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
  });

  if (!fonts) {
    return null;
  }

  const headerStyleTitle = {
    fontFamily: 'Ubuntu-Regular',
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
          name='TermsOfService'
          options={{
            title: 'Terms of service',
            headerShadowVisible: false,
            headerTintColor: Colours.white,
            headerStyle: {
              backgroundColor: Colours.black,
            },
            headerTitleStyle: headerStyleTitle,
          }}
          component={TermsOfService}
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
          name='Announcements'
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
