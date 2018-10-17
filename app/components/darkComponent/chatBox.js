import React, {Component} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View, Image, Text} from 'react-native';

export default class ChatBox extends Component {
    trunc(text) {
        return text.length > 40 ? `${text.substr(0, 40)}...` : text;
    }

    render() {
        const {onPress} = this.props;
        const text = 'Chào bạn, rất vui được gặp bạn';

        return (
            <View style={styles.container_fluid}>
                <TouchableWithoutFeedback >
                    <View style={styles.container}>
                        <View style={styles.image_teacher}>
                            <Image source={{ uri:"https://images.pexels.com/photos/719609/pexels-photo-719609.jpeg" }} style={styles.profileImg}/>
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
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#1B1A20',
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
        // justifyContent:'center',
        marginLeft: 6,
    },
    profileImg: {
        height: 70,
        width: 70,
        borderRadius: 40,
        overflow: 'hidden'
    },
    teacher_name: {
        flex: 2,
        fontSize: 20,
        color: '#fff',
        justifyContent: 'center',
    },
    text_name: {
        fontSize: 17,
        color: '#fff'
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
        color: '#fff',
        textAlign: 'right',
    }
});
