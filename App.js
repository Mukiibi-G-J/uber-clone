import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import HomeScreen from './src/Screens/HomeScreen';

const App = () => {
  return (
    <>
      {/* <View styles={styles.container}> */}

      <HomeScreen />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
