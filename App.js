import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import RegisterScreen from './components/Register';
import LoginScreen from './components/Login';

export default createStackNavigator({
  Register: {
    screen: RegisterScreen
  },
  Login:{
    screen: LoginScreen
  }
},{
  initialRouteName:'Login'
});