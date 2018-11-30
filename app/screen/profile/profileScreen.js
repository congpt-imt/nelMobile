import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ColorTheme} from "../../constants";

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>User Information</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: ColorTheme.BACKGROUND_COLOR,
    },
    category_box: {
        flex: 1,
        // marginLeft: 30
    }
})
