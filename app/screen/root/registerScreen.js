import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {ColorTheme} from "../../constants";
import RegisterForm from "../../components/form/registerForm";

export default class Register extends Component {

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.logo_container}>
                    <Image
                        style={{width: 200, height: 55}}
                        source={require('../../resources/images/logo.png')}
                    />
                </View>

                <View style={styles.container}>
                    <RegisterForm
                        onPressSignUp={this.props.navigation}
                        goBack={() => this.props.navigation.navigate('Login')}/>
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
        flex: 8 / 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
