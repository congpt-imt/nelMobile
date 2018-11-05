import {createStackNavigator} from 'react-navigation';
import ChatHistoryListView from "../components/recyclerListView/chatHistoryListView";
import Chat from '../screen/chat/chatScreen'
import {View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import {ColorTheme, Constants} from "../constants";

const ChatStack = createStackNavigator(
    {
        Chat_History: {
            screen: ChatHistoryListView,
            navigationOptions: {
                title: 'Chat History',
                headerLeft: (
                    <View style={{marginLeft: 20}}>
                        <Icon name={'ios-arrow-back'} color={ColorTheme.ICON_COLOR} size={30}/>
                    </View>),
                headerRight: (
                    <View style={{marginRight: 20}}>
                        <Icon name={'ios-search'} color={ColorTheme.ICON_COLOR} size={30}/>
                    </View>),
            }
        },
        Chat: {
            screen: Chat,
            navigationOptions: {
                title: 'Chatting',
                headerRight: (
                    <View style={{marginRight: 20}}>
                        <Icon name={'ios-videocam'} color={ColorTheme.ICON_COLOR} size={30}/>
                    </View>),
            }
        }
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: ColorTheme.BAR_COLOR,
                height: Constants.SIZE_WINDOW.height / 12,
            },
            headerTitleStyle: {
                color: ColorTheme.TEXT_COLOR
            },
        }
    }
);

ChatStack.navigationOptions = ({ navigation}) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
}

export default ChatStack;
