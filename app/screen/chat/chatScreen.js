import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { generalStyle } from "../../resources/stylesheet/stylesheet";
import { ColorTheme, Constants } from "../../constants";
import Icon from "react-native-vector-icons/Ionicons";
import MessageList from "../../components/chatComponent/messageList";
import io from "socket.io-client/dist/socket.io"
import { ChatService } from "../../services/api/chatService";

var thisChat;
export default class Chat extends Component {
    constructor(props) {
        super(props);
        thisChat = this;
        const user = require('../../json_tmp/userProfile');

        thisChat.state = {
            id: user.id,
            image: user.image,
            typed: '',
            message: null,
        };
        this.socket = io('http://125.234.14.225:8088')

        this.socket.on('message', function (data) {
            let messageRev = {
                "text": data.content,
                "image": data.id == thisChat.state.id ? "" : data.image,
                "time": data.time,
                "isCurrentUser": data.id_from == thisChat.state.id ? true : false,
            }

            thisChat.setState(() => {
                return {
                    typed: '',
                    message: messageRev
                };
            });

            //Refresh FlatList
            
            thisChat.refs.messageList.newMessage();
            thisChat.refs.messageList.refresh();

        });
    }

    _onPressSend = () => {
        if (thisChat.state.typed != "") {
            let messageSend = {
                "id_from": thisChat.state.id,
                "id_to": thisChat.state.id == 1 ? 2 : 1,
                "content": thisChat.state.typed,
                "image": thisChat.state.image,
                "time": "11:11",
            }
            this.socket.emit('message', messageSend);
            thisChat.setState(() => {
                return {
                    typed: '',
                    message: messageSend
                };
            });

            //Save message to DB
            const params = {
                "fromId": thisChat.state.id,
                "toId": thisChat.state.id == 1 ? 2 : 1,
                "content": thisChat.state.typed,
                "create_at": "2019-01-17",
                "read": true,
            }

            ChatService.saveMessages(params);
        }
    }

    render() {
        return (
            <View style={generalStyle.container} >
                <View style={styles.message_list}>
                    <MessageList ref={'messageList'} data={thisChat.state.message} />
                </View>
                <View style={styles.message_form}>
                    <View style={styles.message_input}>
                        <TextInput
                            onChangeText={(text) => thisChat.setState({ typed: text })}
                            style={styles.text_input}
                            placeholder={'Type message...'}
                            placeholderTextColor={'gray'}
                            value={this.state.typed}
                        />
                    </View>
                    <View style={styles.send_button}>
                        <TouchableOpacity onPress={thisChat._onPressSend}>
                            <Icon name={'md-send'} color={ColorTheme.ICON_COLOR} size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    message_list: {
        flex: 1,
    },
    message_form: {
        height: Constants.HEIGHT_BAR,
        flexDirection: 'row',
        backgroundColor: ColorTheme.BAR_COLOR,
        borderTopWidth: 2,
        borderColor: '#1A181F'
    },
    message_input: {
        flex: 9 / 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_input: {
        height: Constants.HEIGHT_BAR - 4,
        width: Constants.SIZE_WINDOW.width / 1.2,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 1000,
        paddingLeft: 15,
        color: ColorTheme.TEXT_COLOR,
        fontSize: 15
    },
    send_button: {
        flex: 1 / 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
