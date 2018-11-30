import React from "react";
import {createStackNavigator} from 'react-navigation';
import CategoryList from '../screen/home/categoryListScreen';
import TeacherProfile from "../screen/profile/teacherProfileScreen";
import TeacherList from "../screen/home/teacherListScreen";
import {ColorTheme} from "../constants";

const HomeStack = createStackNavigator(
    {
        Home:  CategoryList,
        TeacherList:  TeacherList,
        TeacherProfile: TeacherProfile,
    },
    {
        initialRouteName: 'Home',
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

export default HomeStack;
