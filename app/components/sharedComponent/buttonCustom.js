import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import RF from 'react-native-responsive-fontsize';

export default class ButtonCustom extends Component {

    render() {
        const { onPress, title } = this.props;

        return (
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 12,
        backgroundColor: '#2B2C33',
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: '#2B2C33'
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
    },
})
