import LoginScreen from './root/loginScreen';
import RegisterScreen from './root/registerScreen';
import BottomTabNavigator from './components/tabBar/bottomTabNavigator';
import { StackNavigator } from 'react-navigation';

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

        TabBar: BottomTabNavigator,
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#192536'
            },
        }
    }
);

export default Router;
