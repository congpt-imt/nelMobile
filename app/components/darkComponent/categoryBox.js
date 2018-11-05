import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback, Animated, ImageBackground} from 'react-native';

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
        const {width, height, image, category_name, onPress} = this.props;

        const animatedStyle = {
            transform: [{scale: this.animatedValue}]
        };

        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPressIn={this.handlePressIn}
                    onPressOut={this.handlePressOut}
                    onPress={onPress}
                >
                    <Animated.View style={[styles.button, animatedStyle]}>
                        <ImageBackground
                            style={{
                                flex: 1,
                                width: width,
                                height: height,
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                margin: 5
                            }}
                            source={{uri: image}}
                        >
                            <Text style={styles.text}>{category_name}</Text>
                        </ImageBackground>
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
        backgroundColor: 'transparent',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,
        marginBottom: 10
    }
});
