/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './Screens/Home/home';
const App = createStackNavigator({
  Home: {
    screen: Home
  }
});




export default createAppContainer(App);
