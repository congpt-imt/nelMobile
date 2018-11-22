import {createBottomTabNavigator} from 'react-navigation';
import HomeStack from './homeTabNavigator';
import Home from '../screen/home/homeScreen';
import Chat from '../screen/chat/chatScreen';
import Profile from '../screen/profile/profileScreen';
import React from "react";
import {ColorTheme, Constants} from "../constants";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ChatStack from "./chatTabNavigator";

const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Chat: ChatStack,
        Profile: Profile,
    },
    {
        tabBarOptions : {
            // showLabel: (Platform.OS !== 'android'),
            style: {
                backgroundColor: ColorTheme.BAR_COLOR,
                height: Constants.SIZE_WINDOW.height/12,
                borderTopWidth: 2,
            },
            labelStyle: {
                fontSize: 13,
            },
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
        },
        animationEnabled: true,
        swipeEnabled: true,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = 'home';
                } else if (routeName === 'Chat') {
                    iconName = 'comments';
                } else {
                    iconName = 'user';
                }

                return <FontAwesome5 name={iconName} size={25} color={tintColor}/>;
            },
        }),
    }
);

export default BottomTabNavigator;