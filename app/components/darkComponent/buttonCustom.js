import React, { Component } from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import RF from 'react-native-responsive-fontsize';

export default class ButtonCustom extends Component {

    render() {
        const { onPress, title } = this.props;

        return (
            <TouchableHighlight onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {title}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 15,
        backgroundColor: 'transparent',
        borderRadius: 1000,
        borderWidth: 0.3,
        borderColor: '#FFFFFF'
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: RF(3.2),
    },
})
