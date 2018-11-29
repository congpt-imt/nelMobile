import React, { Component } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import RF from 'react-native-responsive-fontsize';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default class ButtonSocial extends Component {

    render() {
        const { onPress, image } = this.props;

        return (
            <TouchableOpacity>
                <View style={styles.btn_Social}>
                    <Image source={image} />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    social_container: {
        height: 40,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_Social: {
        width: 30,
        height: 30,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
