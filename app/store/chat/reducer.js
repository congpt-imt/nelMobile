import * as types from './actionTypes'

const initialState = {
    sending: false,
    message: '',
};

const chat = (state = initialState, action) => {
    switch (action.type) {
        case types.CHAT_LOADING_MESSAGE:
            return {...state, sending: true}
        case types.CHAT_UPDATE_MESSAGE:
            return {...state, sending: false, message: action.text}
        default:
            return state
    }
};

export default chat
