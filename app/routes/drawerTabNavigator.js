import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import HomeStack from './homeTabNavigator';
import Profile from '../screen/profile/profileScreen';
import React from "react";
import ChatStack from "./chatTabNavigator";
import {View} from "react-native";
import HeaderBar from "../components/navigator/headerBar";
import {ColorTheme} from "../constants";
import DrawerScreen from "../components/navigator/drawerScreen";

const DrawerNavigator = createDrawerNavigator(
    {
        Home: HomeStack,
        Chat: ChatStack,
        Profile: Profile,
    },
    {
        initialRouteName: 'Home',
        contentComponent: DrawerScreen,
        drawerWidth: 250,
    }
);

const DrawStackNavigator = createStackNavigator(
    {
        DrawerStack: DrawerNavigator
    },
    {
        headerMode: 'float',
        mode: 'card',
        cardStyle: {backgroundColor: ColorTheme.BACKGROUND_COLOR},
        transitionConfig: () => ({
            containerStyle: {
                backgroundColor: ColorTheme.BACKGROUND_COLOR,
            }
        }),
        navigationOptions: ({ navigation }) => ({
            header: (
                <View style={{height: 50}}>
                    <HeaderBar navigation={navigation}/>
                </View>
            )
        })
    }
);


export default DrawStackNavigator;
