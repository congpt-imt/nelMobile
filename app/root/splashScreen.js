import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import RF from 'react-native-responsive-fontsize';

export default class SplashScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Natural</Text>
                <Image
                    style={styles.logo}
                    source={require('../resources/images/elearning.png')}
                />
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
        fontSize: RF(3.5),
        textAlign: 'center',
        margin: '-5%',
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#EF8732',

    },
    logo: {
        width: '60%',
        height: '12%',
    },
});
