import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native';
import AvatarBox from "../sharedComponent/avatarBox";
import { ColorTheme } from "../../constants";
import LinkPreview from "react-native-link-preview";
import MessageYoutubeRow from "./messageYoutubeRow";
import MessageImageRow from "./messageImageRow";
import MessageVideoRow from "./messageVideoRow";
import { Utils } from "../../utils/utils";

export default class MessageRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.message.text,
            dataLink: {
                url: '', title: '', description: '', images: '',
                mediaType: '', contentType: '', favicons: ''
            }
        }
    }

    getImageOrVideo = () => {
        let url = Utils.regexUrl(this.props.message.text);
        if (url !== null) {
            LinkPreview.getPreview(url.toString()).then(data => {this.setState({ dataLink: data })});
            
        }
    }

    componentWillMount() {
        this.getImageOrVideo();
    }

    render() {
        if (this.props.message.isCurrentUser) {
            return (
                <View style={[styles.container, { alignItems: 'flex-end', marginLeft: 100 }]}>
                    <View style={styles.message_current_user_container}>
                        <Text style={styles.message_time}>
                            {this.props.message.time}
                        </Text>
                        <View style={styles.message_current_user}>
                            <Text style={styles.message_text}>
                                {this.props.message.text}
                            </Text>
                            {this.state.dataLink.mediaType === 'image' ? <MessageImageRow image={this.state.dataLink.url} /> : null}
                            {this.state.dataLink.mediaType === 'video' ? <MessageVideoRow uri={this.state.dataLink.url} /> : null}
                        </View>
                    </View>
                </View>
            );
        }

        return (
            <View style={[styles.container, { alignItems: 'flex-start', marginRight: 50 }]}>
                <View style={styles.avatar}>
                    <AvatarBox
                        sizeAvatar={40}
                        sizeIsOnline={10}
                        image={this.props.message.image} />
                </View>
                <View style={styles.message_container}>
                    <Text style={styles.message_time}>
                        {this.props.message.time}
                    </Text>
                    <View style={styles.message}>
                        <Text style={styles.message_text}>
                            {this.props.message.text}
                        </Text>
                        {this.state.dataLink.mediaType === 'image' ? <MessageImageRow image={this.state.dataLink.url} /> : null}
                        {this.state.dataLink.mediaType === 'video' ? <MessageVideoRow uri={this.state.dataLink.url} /> : null}
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
        alignItems: 'flex-start'
    },
    message: {
        alignSelf: 'flex-start',
        backgroundColor: ColorTheme.MESSAGE_BOX_COLOR,
        padding: 8,
        borderRadius: 5
    },
    message_current_user_container: {
        flex: 1,
        alignItems: 'flex-end'
    },
    message_current_user: {
        alignSelf: 'flex-end',
        backgroundColor: ColorTheme.BAR_COLOR,
        padding: 8,
        borderRadius: 5
    },
    message_text: {
        color: 'white',
        fontSize: 16
    },
    message_time: {
        color: '#9C9C9C',
        fontSize: 10,
    }
})
