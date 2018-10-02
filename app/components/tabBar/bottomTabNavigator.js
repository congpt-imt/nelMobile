import {createBottomTabNavigator} from 'react-navigation';
import HomeScreen from '../../screen/home/homeScreen';
import ChatScreen from '../../screen/chat/chatScreen';
import ProfileScreen from '../../screen/profile/profileScreen';
import React from "react";
import {Constants} from "../../constants";
import {Platform} from 'react-native';

const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Chat: ChatScreen,
        Profile: ProfileScreen,
    },
    {
        tabBarOptions : {
            // showLabel: (Platform.OS !== 'android'),
            style: {
                backgroundColor: '#192536',
                height: Constants.SIZE_WINDOW.height/10,
            },
            labelStyle: {
                fontSize: 13,
            },
        },
        animationEnabled: true,
        swipeEnabled: true,
        // navigationOptions: ({ navigation }) => ({
        //     tabBarIcon: ({ focused, tintColor }) => {
        //         const { routeName } = navigation.state;
        //         let iconName;
        //         if (routeName === 'Home') {
        //             iconName = `home`;
        //         } else if (routeName === 'Chat') {
        //             iconName = `comments`;
        //         } else if (routeName === 'Profile') {
        //             iconName = `user`;
        //         }
        //
        //         return <FontAwesome>{Icons.home}</FontAwesome>;
        //     },
        // }),
    }
);

export default BottomTabNavigator;
