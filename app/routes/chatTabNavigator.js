import {createStackNavigator} from 'react-navigation';
import ChatHistoryListView from "../components/recyclerListView/chatHistoryListView";

const ChatStack = createStackNavigator(
    {
        Chat_History: ChatHistoryListView,
    },
    {
        navigationOptions: {
            header: null,
        }
    }
);

export default ChatStack;
