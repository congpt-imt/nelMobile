import LoginScreen from '../screen/root/loginScreen';
import RegisterScreen from '../screen/root/registerScreen';
import DrawerTabNavigator from './drawerTabNavigator';
import {StackNavigator} from 'react-navigation';
import React from "react";
import {ColorTheme} from "../constants";

const Router = StackNavigator(
    {
        Login: LoginScreen,
        Register: RegisterScreen,
        Drawer: DrawerTabNavigator
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        mode: 'card',
        cardStyle: { backgroundColor: ColorTheme.BACKGROUND_COLOR },
        transitionConfig: () => ({
            containerStyle: {
                backgroundColor: ColorTheme.BACKGROUND_COLOR,
            }
        }),
    }
);

export default Router;
