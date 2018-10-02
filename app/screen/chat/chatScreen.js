import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Chat extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Chatting</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#1B1A20',
    },
    category_box: {
        flex: 1,
        // marginLeft: 30
    }
})

