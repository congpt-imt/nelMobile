import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RF from 'react-native-responsive-fontsize';
import SlideImage from "../components/slideImage";

export default class SplashScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Natural</Text>
                <SlideImage img={require('../resources/images/elearning.png')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: RF(4),
        textAlign: 'center',
        marginBottom: '-6%',
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#EF8732',

    },
});
