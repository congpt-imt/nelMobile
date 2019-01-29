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
            myId: user.id,
            otherId: this.props.navigation.state.params.id,
            image: user.image,
            otherImage: this.props.navigation.state.params.image,
            typed: '',
            message: null,
        };
        this.socket = io('http://125.234.14.225:8088')

        this.socket.on('message', function (data) {
            if (((data.id_from == thisChat.state.myId) && (data.id_to == thisChat.state.otherId)) || 
                ((data.id_from == thisChat.state.otherId) && (data.id_to == thisChat.state.myId))) {
                let messageRev = {
                    "text": data.content,
                    "image": data.id_from == thisChat.state.myId ? "" : thisChat.state.otherImage,
                    "time": data.time,
                    "isCurrentUser": data.id_from == thisChat.state.myId ? true : false,
                }

                thisChat.setState(() => {
                    return {
                        typed: '',
                        message: messageRev
                    };
                });

                //Refresh FlatList
                thisChat.refs.messageList.newMessage();
            }
        });
    }

    _onPressSend = () => {
        if (thisChat.state.typed != "") {
            var hour = new Date().getHours();
            var minute = new Date().getMinutes();

            let messageSend = {
                "id_from": thisChat.state.myId,
                "id_to": thisChat.state.otherId,
                "content": thisChat.state.typed,
                "image": thisChat.state.image,
                "time": hour + ":" + minute,
            }
            this.socket.emit('message', messageSend);
            thisChat.setState(() => {
                return {
                    typed: '',
                    message: messageSend
                };
            });

            //Save message to DB
            var date = new Date().getDate();
            var month = new Date().getMonth() + 1;
            var year = new Date().getFullYear();
            const params = {
                "fromId": thisChat.state.myId,
                "toId": thisChat.state.otherId,
                "content": thisChat.state.typed,
                "create_at": year + "-0" + month + "-" + date,
                "read": true,
            }

            //ChatService.saveMessages(params);
        }
    }

    render() {
        return (
            <View style={generalStyle.container} >
                <View style={styles.message_list}>
                    <MessageList
                        ref={'messageList'}
                        data={thisChat.state.message}
                        otherId={this.state.otherId}
                        otherImage={this.state.otherImage}
                    />
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
