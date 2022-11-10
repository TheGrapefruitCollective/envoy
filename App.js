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
import AnnouncementHome from './src/screens/Dashboard/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  const headerStyleTitle = {
    headerTintColor: Colours.white,
    headerStyle: {
      backgroundColor: Colours.black,
    },
    headerTitleStyle: {},
  };

  const [fonts] = useFonts({
    'Ubuntu-Regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
  });

  if (!fonts) {
    return null;
  }

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
            title: 'Announcements',
            headerBackVisible: false,
            headerShadowVisible: false,
            headerTintColor: Colours.white,
            headerStyle: {
              backgroundColor: Colours.black,
            },
            headerTitleStyle: {
              fontFamily: 'Ubuntu-Regular',
              fontSize: 16,
            },
          }}
          component={AnnouncementHome}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
