import React, {Component} from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import AvatarBox from "./avatarBox";
import {generalStyle} from "../../resources/stylesheet/stylesheet";
import {Utils} from "../../utils/utils";

export default class ChatBox extends Component {

    render() {
        const {onPress, image, name} = this.props;
        const text = 'Chào bạn, rất vui được gặp bạn trong buổi sáng hôm nay';

        return (
            <View style={styles.container}>
                <TouchableNativeFeedback onPress={onPress} useForeground={true}
                                         background={TouchableNativeFeedback.Ripple('rgba(240, 240, 240, 0.1)', false)}>
                    <View style={generalStyle.container_row}>
                        <View style={styles.image_teacher}>
                            <AvatarBox
                                image={image}
                                sizeAvatar={45}
                                sizeIsOnline={10}
                            />
                        </View>

                        <View style={styles.chat_box}>
                            <View style={styles.teacher_name}>
                                <Text style={styles.text_name}>{Utils.truncate(name, 15)}</Text>
                                <Text style={styles.last_date_chat}>29/11/2018</Text>
                            </View>
                            <View style={styles.chat_text}>
                                <Text style={styles.last_text_chat}>{Utils.truncate(text, 33)}</Text>
                                <Text style={styles.last_hour_chat}>11:20</Text>
                            </View>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        height: 80,
    },
    image_teacher: {
        flex: 2 / 10,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chat_box: {
        flex: 8 / 10,
        backgroundColor: 'transparent',
        marginLeft: 6,
    },
    teacher_name: {
        flex: 1,
        marginRight: 4,
        marginTop: 15,
        flexDirection: 'row',
    },
    text_name: {
        flex: 7 / 10,
        fontSize: 17,
        color: '#FFFFFF'
    },
    last_date_chat: {
        flex: 3 / 10,
        marginTop: 3,
        fontSize: 13,
        color: '#C1C1C1',
        textAlign: 'right',
    },
    chat_text: {
        flex: 1,
        marginRight: 4,
        marginBottom: 10,
        flexDirection: 'row',
    },
    last_text_chat: {
        flex: 8 / 10,
        fontSize: 14,
        color: '#C1C1C1',
        fontStyle: 'italic',
    },
    last_hour_chat: {
        flex: 2 / 10,
        marginTop: 1,
        fontSize: 13,
        color: '#C1C1C1',
        textAlign: 'right',
    }
});
