import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {View} from 'react-native';
import {Constants} from "../../constants";
import YouTube from 'react-native-youtube';
import {Text} from "react-native-elements";

export default class MessageYoutubeRow extends Component {
    constructor() {
        super()

        this.state = {
            height: Constants.SIZE_WINDOW.height / 4,
            isReady: false,
            status: '',
            quality: '',
            error: ''
        }
    }

    handleReady = () => {
        setTimeout(() => this.setState({height: this.state.height - 1}), 500);
    }

    render() {
        return (
            <View>
                <YouTube
                    videoId={this.props.videoId}
                    apiKey={Constants.GOOGLE_API_KEY}
                    onReady={this.handleReady}
                    onChangeState={e => this.setState({status: e.state})}
                    onChangeQuality={e => this.setState({quality: e.quality})}
                    onError={e => this.setState({error: e.error})}
                    style={{
                        width: Constants.SIZE_WINDOW.width/1.5,
                        height: this.state.height,
                        marginTop: 10
                    }}/>
            </View>
        );
    }
}

MessageYoutubeRow.proTypes = {
    videoId: PropTypes.string,
}
