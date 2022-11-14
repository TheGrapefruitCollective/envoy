/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AnnouncementUniversity from '../Announcements/University';
import AnnouncementDepartment from '../Announcements/Department';
import Colours from '../../../components/Colours';

const Tab = createMaterialTopTabNavigator();

function AnnouncementHome() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colours.black,
        tabBarLabelStyle: {
          width: 132,
          fontFamily: 'Ubuntu-Regular',
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen name='University' component={AnnouncementUniversity} />
      <Tab.Screen name='Department' component={AnnouncementDepartment} />
    </Tab.Navigator>
  );
}

export default AnnouncementHome;
