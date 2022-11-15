/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AnnouncementHome from '../Dashboard/Announcements/AnnouncementHome';
import AnnouncementDepartment from '../Dashboard/Announcements/Department';

const Tab = createMaterialBottomTabNavigator();

function NavigationBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='University' component={AnnouncementHome} />
      <Tab.Screen name='Department' component={AnnouncementDepartment} />
    </Tab.Navigator>
  );
}

export default NavigationBar;
