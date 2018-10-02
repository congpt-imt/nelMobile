import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated } from 'react-native';
import {Constants} from "../../constants";
import PropTypes from "prop-types";

export default class CategoryBox extends Component {
    constructor(props) {
        super(props);

        this.handlePressIn = this.handlePressIn.bind(this);
        this.handlePressOut = this.handlePressOut.bind(this);
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(1);
    }

    handlePressIn() {
        Animated.spring(this.animatedValue, {
            toValue: .8
        }).start()
    }
    handlePressOut() {
        Animated.spring(this.animatedValue, {
            toValue: 1,
            friction: 3,
            tension: 40
        }).start()
    }
    render() {
        const animatedStyle = {
            transform: [{ scale: this.animatedValue}]
        }
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPressIn={this.handlePressIn}
                    onPressOut={this.handlePressOut}
                    onPress={this.props.onPress}
                >
                    <Animated.View style={[styles.button, animatedStyle]}>
                        <Text style={styles.text}>{this.props.category_name}</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: "#2F2D3B",
        width: Constants.SIZE_WINDOW.width/2 - 20,
        height: Constants.SIZE_WINDOW.width/2 - 20,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#FFFFFF"
    }
});

CategoryBox.PropTypes = {
    category_name: PropTypes.string
}
