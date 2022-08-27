
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Platform,
  View,
} from 'react-native';


import { NavigationContainer, DefaultTheme } from '@react-navigation/native';


import BottomTabs from './src/navigation/Drawer'

import AndroidSafeView from './src/components/AndroidSafeView';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};


const App = () => {

  return (
    <NavigationContainer theme={navTheme}>

      <SafeAreaView style={AndroidSafeView.AndroidSafeArea} />
      <StatusBar barStyle="light-content" translucent={true} />
      <BottomTabs />
      {/* <SafeAreaView>
      <Text>Hello</Text>
    </SafeAreaView> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
