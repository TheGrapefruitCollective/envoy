/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AnnouncementHome from '../Dashboard/Announcements/AnnouncementHome';
import Profile from '../Dashboard/Profile';
import Menu from '../Dashboard/Menu';
import Colours from '../../components/Colours';

const Tab = createMaterialBottomTabNavigator();

function NavigationBar() {
  return (
    <Tab.Navigator
      initialRouteName='Announcements'
      activeColor={Colours.white}
      barStyle={{ backgroundColor: Colours.black, height: 86 }}
    >
      <Tab.Screen
        name='Announcements'
        component={AnnouncementHome}
        options={{
          tabBarLabel: 'Announcements',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='card-text' color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='account' color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name='Menu'
        component={Menu}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='menu' color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NavigationBar;
