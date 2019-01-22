import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {View} from 'react-native';
import {Constants} from "../../constants";
import Video from "react-native-video";

export default class MessageVideoRow extends Component {
    render() {
        return (
            <View>
                <Video
                    repeat={true}
                    onError={this.videoError}
                    source={{uri: this.props.uri}}
                    style={{
                    alignSelf: 'stretch',
                    width: Constants.SIZE_WINDOW.width/1.5,
                    height: Constants.SIZE_WINDOW.height / 4,
                    marginTop: 10 }}/>
            </View>
        );
    }
}

MessageVideoRow.proTypes = {
    uri: PropTypes.string,
}
