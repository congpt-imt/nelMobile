import {createStackNavigator} from 'react-navigation';
import Chat from '../screen/chat/chatScreen'
import React from "react";
import {ColorTheme} from "../constants";
import ChatHistory from "../screen/chat/chatHistoryScreen";

const ChatStack = createStackNavigator(
    {
        ChatHistory: ChatHistory,
        Chat: Chat
    },
    {
        initialRouteName: 'ChatHistory',
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

export default ChatStack;
