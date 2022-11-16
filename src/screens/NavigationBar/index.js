/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AnnouncementHome from '../Dashboard/Announcements/AnnouncementHome';
import Profile from '../Dashboard/Profile';

const Tab = createMaterialBottomTabNavigator();

function NavigationBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Announcements' component={AnnouncementHome} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
}

export default NavigationBar;
