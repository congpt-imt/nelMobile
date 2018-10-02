import LoginScreen from './root/loginScreen';
import RegisterScreen from './root/registerScreen';
import BottomTabNavigator from './components/tabBar/bottomTabNavigator';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
// import React from "react";

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
            // navigationOptions: {
            //     headerLeft: (
            //         <View>
            //             <Icon name={'ios-arrow-back'} color={'#FFFFFF'} size={20}/>
            //         </View>)
            // }
        },
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#25232E'
            },
        }
    }
);

export default Router;
