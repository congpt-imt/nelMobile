import * as types from './actionTypes';
import firebaseService from '../../services/firebaseService';



export const chatUpdateMessage = (text) => ({
    type: types.CHAT_UPDATE_MESSAGE,
    text
});

export const chatLoadMessages = () => ({
    type: types.CHAT_LOADING_MESSAGE,
});

export const sendMessage = (text, user) => {
    return (dispatch) => {
        dispatch(chatLoadMessages());

        let createdAt = new Date().getTime();
        let chatMessage = {
            text: text,
            createdAt: createdAt,
            user: {
                name: user.name,
                avatar: user.avatar,
            }
        };
    };
};

export const updateMessage = (text) => {
    return (dispatch) => {
        dispatch(chatUpdateMessage(text))
    }
}

export const loadMessages = () => {
    return (dispatch) => {
        const text = require('../../json_tmp/chat');

        dispatch(chatLoadMessages(text));
    }
}

