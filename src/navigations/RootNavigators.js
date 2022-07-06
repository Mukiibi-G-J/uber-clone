import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import DrawerNavigator from './DrawerNavigator';
import HomeStack from './StackNavigators';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <HomeStack />
    </NavigationContainer>
  );
}
