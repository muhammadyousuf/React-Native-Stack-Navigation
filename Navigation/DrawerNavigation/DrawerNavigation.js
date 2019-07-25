/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { createDrawerNavigator, createAppContainer } from "react-navigation";

import Home from '../../Screens/Home/home';

const MyDrawerNavigation = createDrawerNavigator({
    Home: {
        screen: Home
      }
    },
      {
          initialRouteName:'Home',
          drawerWidth:300,
          drawerPosition:'left'
      });



const AppContainer =  createAppContainer(MyDrawerNavigation);

export default class DrawerNavigation extends Component {
    render(){
        return <AppContainer />
    }
}