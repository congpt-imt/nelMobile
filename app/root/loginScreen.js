import React, {Component} from 'react';
import {StyleSheet, View, Button, Image, Text, ImageBackground} from 'react-native';
import {Constants} from "../constants";
import DarkTextInput from '../components/darkComponent/darkTextInput';

export default class LoginScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.dark_view}>
                    <ImageBackground
                        style={styles.background_image}
                        source={require('../resources/images/background.png')}
                    />
                </View>

                <View style={styles.logo_container}>
                    <Image
                        style={{
                            width: Constants.SIZE_WINDOW.width * 0.6,
                            height: Constants.SIZE_WINDOW.height * 0.11
                        }}
                        source={require('../resources/images/logo.png')}
                    />
                </View>

                <View style={styles.input_container}>
                    <View style={styles.input_form}>
                        <DarkTextInput input_type={'User name'}/>
                    </View>
                    <View style={styles.input_form}>
                        <DarkTextInput input_type={'Password'}/>
                    </View>
                </View>

                <View style={styles.btn_Container}>
                    <View style={styles.btn_Sign_In}>
                        <Button title={'Sign in'} onPress={() => this.props.navigation.navigate('TabBar')}/>
                    </View>
                    <View style={styles.btn_Register}>
                        <Text style={{fontSize: 15, fontFamily: 'System', color: 'white'}}
                              onPress={() => this.props.navigation.navigate('Register')}>Create Account</Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        opacity: 1,
    },
    dark_view: {
        backgroundColor: '#192536',
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        flex: 1,
    },
    background_image: {
        opacity: 0.2,
        flex: 1,
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input_container: {
        marginLeft: 15,
        marginRight: 15,
        flex: 1,
    },
    input_form: {
        flex: 1 / 3,
    },
    btn_Container: {
        marginLeft: 8,
        marginRight: 8,
        flex: 3 / 4,
    },
    btn_Sign_In: {
        flex: 2,
    },
    btn_Register: {
        flex: 1,
        alignItems: 'center',
    },
});
