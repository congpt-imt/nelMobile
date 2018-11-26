import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {View, Image} from 'react-native';
import {Constants} from "../../constants";

export default class MessageImageRow extends Component {
    render() {
        return (
            <View>
                <Image
                    style={{
                        width: Constants.SIZE_WINDOW.width/1.5,
                        height: Constants.SIZE_WINDOW.height/4,
                        marginTop: 10}}
                    source={{uri: this.props.image}}/>
            </View>
        );
    }
}

MessageImageRow.proTypes = {
    image: PropTypes.string,
}
