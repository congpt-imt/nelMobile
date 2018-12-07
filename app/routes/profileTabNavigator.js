import {createStackNavigator} from 'react-navigation';
import UpdateProfileForm from '../components/form/updateProfileForm';
import Profile from '../screen/profile/profileScreen'
import {ColorTheme} from "../constants";


const ProfileStack = createStackNavigator(
    {
        Home:  Profile,
        Update: UpdateProfileForm,
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

export default ProfileStack;
