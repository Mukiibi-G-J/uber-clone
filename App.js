import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import RootNavigator from './src/navigations/RootNavigators';
import HomeStack from './src/navigations/StackNavigators';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigations/DrawerNavigator';

const App = () => {
  return (
    <>
      {/* <View styles={styles.container}> */}
      {/* <HomeScreen /> */}
      <RootNavigator />

      {/* <HomeStack /> */}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
