import LoginScreen from './root/loginScreen';
import RegisterScreen from './root/registerScreen';
import BottomTabNavigator from './components/tabBar/bottomTabNavigator';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import React from "react";
import {View} from 'react-native';
import {Constants} from "./constants";

const Router = StackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null,
            }
        },

        Register: {
            screen: RegisterScreen,
            navigationOptions: {
                header: null,
            }
        },

        TabBar: {
            screen: BottomTabNavigator,
            navigationOptions: {
                title: 'Home',
                headerLeft: (
                    <View style={{marginLeft: 20}}>
                        <Icon name={'ios-arrow-back'} color={'#FFFFFF'} size={30}/>
                    </View>),
                headerRight: (
                    <View style={{marginRight: 20}}>
                        <Icon name={'ios-search'} color={'#FFFFFF'} size={30}/>
                    </View>),
            }
        },
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#25232E',
                height: Constants.SIZE_WINDOW.height/12,
            },
            headerTitleStyle: {
                color: '#FFFFFF'
            }
        }
    }
);

export default Router;
