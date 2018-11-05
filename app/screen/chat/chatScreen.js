import React, {Component} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {generalStyle} from "../../resources/stylesheet/stylesheet";
import {ColorTheme, Constants} from "../../constants";
import Icon from "react-native-vector-icons/Ionicons";

export default class Chat extends Component {
    render() {
        return (
            <View style={generalStyle.container}>
                <View style={styles.message_list}></View>
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
        flex: 9 / 10,
    },
    message_form: {
        flex: 1 / 10,
        flexDirection: 'row',
        backgroundColor: ColorTheme.BAR_COLOR,
        borderTopWidth: 2,
    },
    message_input: {
        flex: 9/10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_input: {
        height: Constants.SIZE_WINDOW.height/14,
        width: Constants.SIZE_WINDOW.width/1.2,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 1000
    },
    send_button: {
        flex: 1/10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
