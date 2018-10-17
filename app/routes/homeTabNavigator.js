import {createStackNavigator} from 'react-navigation';
import Home from '../screen/home/homeScreen';
import TeacherListView from "../components/recyclerListView/teacherListView";

const HomeStack = createStackNavigator(
    {
        Home: Home,
        List_Teacher: TeacherListView,
    },
    {
        navigationOptions: {
            header: null,
        }
    }
);

export default HomeStack;
