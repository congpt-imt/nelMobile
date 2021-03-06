import React, {Component} from "react";
import {TouchableNativeFeedback, View, Text, StyleSheet} from "react-native";

export default class ButtonCustom extends Component {

    render() {
        const {onPress, title, margin, width} = this.props;

        return (
            <TouchableNativeFeedback onPress={onPress} useForeground={true}
                                     background={TouchableNativeFeedback.Ripple('rgba(240, 240, 240, 0.1)', false)}>
                <View style={[styles.button, {margin, width}]}>
                    <Text style={styles.buttonText}>
                        {title}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 12,
        backgroundColor: '#2B2C33',
        borderWidth: 0.3,
        borderColor: '#2B2C33',
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
    },
})
