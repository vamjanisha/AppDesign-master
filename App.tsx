import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';
import HomePage from './src/screens/home/HomePage';
const App = () => {
  
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>

  );
};

export default App;
