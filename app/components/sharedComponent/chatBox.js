import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import AvatarBox from "./avatarBox";
import { generalStyle } from "../../resources/stylesheet/stylesheet";
import { Utils } from "../../utils/utils";
import { UserService } from "../../services/api/userService";

export default class ChatBox extends Component {
    constructor(props) {
        super(props);
        const user = require('../../json_tmp/userProfile');
        this.state = {
            id: user.id == this.props.data.fromId ? this.props.data.toId : this.props.data.fromId,
            name: null,
            image: null,
        };
    }

    componentWillMount() {
        UserService.getUserById(this.state.id, (data) => {
            this.setState({
                image: data.imageUrl,
                name: data.username,
            })
        });
    }

    render() {
        const { onPress } = this.props;
        return (
            <View style={styles.container}>
                <TouchableNativeFeedback 
                    onPress={() => this.props.onPress.navigate('Chat', 
                                {id: this.state.id, image: this.state.image})} 
                    useForeground={true}
                    background={TouchableNativeFeedback.Ripple('rgba(240, 240, 240, 0.1)', false)}>
                    <View style={generalStyle.container_row}>
                        <View style={styles.image_teacher}>
                            <AvatarBox
                                image={this.state.image}
                                sizeAvatar={45}
                                sizeIsOnline={10}
                            />
                        </View>

                        <View style={styles.chat_box}>
                            <View style={styles.teacher_name}>
                                <Text style={styles.text_name}>{Utils.truncate(this.state.name, 15)}</Text>
                                <Text style={styles.last_date_chat}>{this.props.data.create_at}</Text>
                            </View>
                            <View style={styles.chat_text}>
                                <Text style={styles.last_text_chat}>{Utils.truncate(this.props.data.content, 30)}</Text>
                                {!this.props.data.read ? <Text style={styles.seen}>⬤</Text> : null}
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
    seen: {
        flex: 2 / 10,
        marginTop: 1,
        fontSize: 13,
        color: '#678DBA',
        textAlign: 'right',
    },
});
