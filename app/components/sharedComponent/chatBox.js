import React, {Component} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View, Text} from 'react-native';
import AvatarBox from "./avatarBox";
import {generalStyle} from "../../resources/stylesheet/stylesheet";

export default class ChatBox extends Component {
    trunc(text) {
        return text.length > 40 ? `${text.substr(0, 40)}...` : text;
    }

    render() {
        const {onPress} = this.props;
        const text = 'Chào bạn, rất vui được gặp bạn';

        return (
            <View style={styles.container_fluid}>
                <TouchableWithoutFeedback onPress={onPress}>
                    <View style={generalStyle.container_row}>
                        <View style={styles.image_teacher}>
                            <AvatarBox
                                image={"https://images.pexels.com/photos/719609/pexels-photo-719609.jpeg"}
                                sizeAvatar={60}
                                sizeIsOnline={15}
                            />
                        </View>

                        <View style={styles.chat_box}>
                            <View style={styles.teacher_name}>
                                <Text style={styles.text_name}>Hoàng Văn Bình</Text>
                            </View>
                            <View style={styles.chat_text}>
                                <Text style={styles.last_text_chat}>{this.trunc(text)}</Text>
                                <Text style={styles.last_hour_chat}>11:20</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container_fluid: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    image_teacher: {
        flex: 2.5 / 10,
        backgroundColor: 'transparent',
        height: '100%',
        justifyContent:'center',
        alignItems: 'center'
    },
    chat_box: {
        flex: 7.5 / 10,
        backgroundColor: 'transparent',
        height: '100%',
        marginLeft: 6,
    },
    teacher_name: {
        flex: 2,
        justifyContent: 'center',
    },
    text_name: {
        fontSize: 17,
        color: '#FFFFFF'
    },
    chat_text: {
        flex: 1.5,
        marginRight: 4,
        flexDirection: 'row',
    },
    last_text_chat: {
        flex: 8/10,
        fontSize: 14,
        color: '#C1C1C1',
        fontStyle: 'italic',
        justifyContent: 'flex-start',
    },
    last_hour_chat: {
        flex: 2/10,
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'right',
    }
});
