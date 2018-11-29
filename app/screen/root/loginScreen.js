import React, {Component} from 'react';
import {StyleSheet, View, Image, KeyboardAvoidingView} from 'react-native';
import {ColorTheme, Constants} from "../../constants";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import LoginForm from "../../components/form/loginForm";

export default class LoginScreen extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.logo_container}>
                    <Image
                        style={{width: 300, height: 90}}
                        source={require('../../resources/images/logo.png')}
                    />
                </View>

                <View style={styles.container}>
                    <LoginForm
                        onPressSignIn={() => this.props.navigation.navigate('Drawer')}
                        onPressRegister={() => this.props.navigation.navigate('Register')}/>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ColorTheme.BACKGROUND_COLOR,
    },
    logo_container: {
        flex: 17 / 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
