import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {ColorTheme} from "../../constants";
import LoginForm from "../../components/form/loginForm";

export default class Login extends Component {
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
                        onPress={this.props.navigation}/>
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
        flex: 15 / 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
