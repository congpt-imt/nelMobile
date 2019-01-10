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
            messagesHistory: [],
        };
        this.socket = io('http://125.234.14.225:8088')

        this.socket.on('message', function (data) {
            let t = thisChat.state.messagesHistory;
            let message = {
                "text": data.content,
                "image": data.id == thisChat.state.id ? "" : data.image,
                "time": data.time,
                "isCurrentUser": data.id_from == thisChat.state.id ? true : false,
            }
            t.push(message);

            //Push message to messagesHistory
            thisChat.setState((prevState) => {
                return {
                    messagesHistory: t
                };
            });

            //Refresh FlatList
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
            thisChat.setState((prevState) => {
                return {
                    typed: '',
                };
            });

            //Save message to DB
            const params = {
                "fromId": thisChat.state.id,
                "toId": thisChat.state.id == 1 ? 2 : 1,
                "content": thisChat.state.typed,
                "create_at": "2019-01-10",
                "read": true,
            }

            ChatService.saveMessages(params);
        }
    }

    componentWillMount() {
        thisChat.fetchMoreData();
    }

    sortByProperty = function (property) {
        return function (x, y) {
            return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
        };
    
    };
    
    fetchMoreData() {
        let idFrom = thisChat.state.id;
        let idTo = idFrom == 1 ? 2 : 1;
        ChatService.getMessagesHistory(idFrom, idTo, (data) => {
            let temp = [];
            temp = temp.concat(data);
            ChatService.getMessagesHistory(idTo, idFrom, (data) => {
                temp = temp.concat(data);
                temp.sort(thisChat.sortByProperty('id'));
                
                let List = [];
                for (var i = 0; i < temp.length; i++) {
                    let message = {
                        "text": temp[i].content,
                        "image": temp[i].id == thisChat.state.id ? "" : temp.image,
                        "time": temp[i].create_at,
                        "isCurrentUser": temp[i].fromId == thisChat.state.id ? true : false,
                    }
                    List.push(message);
                }
                thisChat.setState((prevState) => {
                    return {
                        messagesHistory: List
                    };
                });
            });
        });
    }

    render() {
        return (
            <View style={generalStyle.container} >
                <View style={styles.message_list}>
                    <MessageList ref={'messageList'} data={thisChat.state.messagesHistory} />
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
