import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {StyleSheet, View, Text} from 'react-native';
import AvatarBox from "../sharedComponent/avatarBox";
import MessageImageRow from "./messageImageRow";
import {ColorTheme} from "../../constants";
import * as LinkPreview from "react-native-link-preview";

export default class MessageRow extends Component {
    constructor() {
        super();
        this.state = {
            link: 'https://stackoverflow.com/questions/52127864/how-to-get-title-from-url-with-react-native-link-preview',
            dataLink: {
                url: '',
                title: '',
                description: '',
                images: '',
                mediaType: '',
                contentType: '',
                favicons: ''
            }
        }

        LinkPreview.getPreview(this.state.link).then(data => this.setState({dataLink: data}));
    }
    render() {
        const img = this.props.message.text.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/g);
        if (this.props.message.isCurrentUser) {
            return (
                <View style={[styles.container, {alignItems: 'flex-end', marginLeft: 100}]}>
                    <View style={styles.message_current_user_container}>
                        <View style={styles.message_current_user}>
                            <Text style={styles.message_text}>
                                {this.props.message.text}
                            </Text>
                            {img ? <MessageImageRow image={img.toString()}/> : null}
                            {/*{img ? <Text selectable>{this.state.dataLink.images}</Text> : null}*/}
                        </View>
                    </View>
                </View>
            );
        }

        return (
            <View style={[styles.container, {alignItems: 'flex-start', marginRight: 50}]}>
                <View style={styles.avatar}>
                    <AvatarBox
                        sizeAvatar={40}
                        sizeIsOnline={10}
                        image={this.props.message.image}/>
                </View>
                <View style={styles.message_container}>
                    <View style={styles.message}>
                        <Text style={styles.message_text}>
                            {this.props.message.text}
                        </Text>
                        {img ? <MessageImageRow image={img.toString()}/> : null}
                    </View>
                </View>
            </View>
        );
    }
}

MessageRow.proTypes = {
    message: PropTypes.shape({
        text: PropTypes.string.isRequired,
        isCurrentUser: PropTypes.bool.isRequired,
        image: PropTypes.string.isRequired,
    })
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5
    },
    avatar: {
        flex: 2 / 10,
        backgroundColor: 'transparent',
        height: '100%',
        alignItems: 'center'
    },
    message_container: {
        flex: 1,
    },
    message: {
        alignSelf: 'flex-start',
        backgroundColor: ColorTheme.MESSAGE_BOX_COLOR,
        height: '100%',
        padding: 8,
        borderRadius: 5
    },
    message_current_user_container: {
        flex: 1,
    },
    message_current_user: {
        alignSelf: 'flex-end',
        backgroundColor: ColorTheme.BAR_COLOR,
        height: '100%',
        padding: 8,
        borderRadius: 5
    },
    message_text: {
        flex: 1,
        color: 'white',
        fontSize: 16
    }
})
