import React, {Component} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {generalStyle} from "../../resources/stylesheet/stylesheet";
import {ColorTheme, Constants} from "../../constants";
import Icon from "react-native-vector-icons/Ionicons";
import MessageList from "../../components/chatComponent/messageList";

export default class Chat extends Component {
    constructor() {
        super();

        const data = require('../../json_tmp/chat');
        const messages = data.data;

        this.state = {
            message: messages
        }
    }
    render() {
        return (
            <View style={generalStyle.container}>
                <View style={styles.message_list}>
                    <MessageList data={this.state.message}/>
                </View>

                <View style={styles.message_form}>
                    <View style={styles.message_input}>
                        <TextInput
                            style={styles.text_input}
                            placeholder={'Type message...'}
                            placeholderTextColor={'gray'}
                        />
                    </View>
                    <View style={styles.send_button}>
                        <TouchableOpacity>
                            <Icon name={'md-send'} color={ColorTheme.ICON_COLOR} size={30}/>
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
        flex: 9/10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_input: {
        height: Constants.HEIGHT_BAR - 4,
        width: Constants.SIZE_WINDOW.width/1.2,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 1000,
        paddingLeft: 15,
        color: ColorTheme.TEXT_COLOR,
        fontSize: 15
    },
    send_button: {
        flex: 1/10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
