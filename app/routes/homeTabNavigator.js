import React from "react";
import {createStackNavigator} from 'react-navigation';
import Category from '../screen/home/categoryScreen';
import TeacherProfile from "../screen/profile/teacherProfileScreen";
import TeacherList from "../screen/home/teacherListScreen";
import {ColorTheme} from "../constants";

const HomeStack = createStackNavigator(
    {
        Home:  Category,
        List_Teacher:  TeacherList,
        Teacher_Profile: TeacherProfile,
    },
    {
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
