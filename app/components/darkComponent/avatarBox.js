import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {ColorTheme} from "../../constants";

export default class AvatarBox extends Component {
    render() {
        const {image, sizeAvatar, sizeIsOnline, marginTop, isOnline} = this.props

        return(
            <View style={{
                backgroundColor: 'transparent',
                alignItems: 'center',
                marginTop: marginTop,
                width: sizeAvatar, height: sizeAvatar}}>
                <Image
                    style={{
                        height: sizeAvatar,
                        width: sizeAvatar,
                        borderRadius: 1000,
                    }}
                    source={{uri: image}}/>
                <View style={{
                    position: 'absolute',
                    bottom: 0, right: 5,
                    height: sizeIsOnline, width: sizeIsOnline,
                    borderRadius: 1000,
                    backgroundColor: ColorTheme.IS_ONLINE_COLOR,
                }} />
            </View>
        );
    }
}
