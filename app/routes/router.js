import LoginScreen from '../root/loginScreen';
import RegisterScreen from '../root/registerScreen';
import BottomTabNavigator from './bottomTabNavigator';
import { StackNavigator } from 'react-navigation';
import React from "react";

const Router = StackNavigator(
    {
        Login: LoginScreen,
        Register: RegisterScreen,
        TabBar: BottomTabNavigator
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            header: null,
        },
    }
);

export default Router;
