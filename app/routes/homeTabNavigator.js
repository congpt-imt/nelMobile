import React from "react";
import {View} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Home from '../screen/home/homeScreen';
import TeacherListView from "../components/recyclerListView/teacherListView";
import TeacherProfile from "../screen/profile/teacherProfileScreen";
import {ColorTheme, Constants} from "../constants";
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Home'
            }
        },
        List_Teacher: {
            screen: TeacherListView,
            navigationOptions: {
                title: 'Teacher List'
            }
        },
        Teacher_Profile: {
            screen: TeacherProfile,
            navigationOptions: {
                title: 'Teacher Profile'
            }
        },
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: ColorTheme.BAR_COLOR,
                height: Constants.SIZE_WINDOW.height/12,
            },
            headerTitleStyle: {
                color: ColorTheme.TEXT_COLOR
            },
            headerLeft: (
                <View style={{marginLeft: 20}}>
                    <Icon name={'ios-arrow-back'} color={'#FFFFFF'} size={30}/>
                </View>),
            headerRight: (
                <View style={{marginRight: 20}}>
                    <Icon name={'ios-search'} color={'#FFFFFF'} size={30}/>
                </View>),
        }
    }
);

export default HomeStack;
