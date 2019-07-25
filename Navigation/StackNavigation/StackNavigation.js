/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import { createStackNavigator, createAppContainer, DrawerActions } from "react-navigation";

import Home from '../../Screens/Home/home';
import Login from '../../Screens/Login/login';
import Signup from '../../Screens/Signup/signup';
const MyStackNavigation = createStackNavigator({
    Home: {
        screen: Home
    },
    Login: {
        screen: Login
    },
    Signup: {
        screen: Signup
    } 
},
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: { height: 55, backgroundColor: 'orange' },
            headerTitleStyle: { fontWeight: 'bold', color: 'white' }
        }
    });



const AppContainer = createAppContainer(MyStackNavigation);

export default class StackNavigation extends Component {
    render() {
        console.log('this.props.navigation', this)
        return <AppContainer screenProps={{ openDraw: () => this.props.navigation.dispatch(DrawerActions.openDrawer()) }} />
    }
}