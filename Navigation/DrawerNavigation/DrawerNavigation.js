/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { createDrawerNavigator, createAppContainer } from "react-navigation";
import StackNavigation from '../StackNavigation/StackNavigation';
import Home from '../../Screens/Home/home';
import ShowList from '../../Screens/ShowList/showList';

const MyDrawerNavigation = createDrawerNavigator({
    Home: {
        screen: StackNavigation
      },
      ShowList :{
          screen:ShowList
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