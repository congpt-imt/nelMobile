import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {StyleSheet, View, Image} from 'react-native';
import {Constants} from "../../constants";

export default class MessageImageRow extends Component {
    render() {
        return (
            <View style={styles.message_current_user_container}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
