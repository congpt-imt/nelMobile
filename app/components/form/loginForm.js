import React, {Component} from 'react';
import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import TextInputCustom from '../sharedComponent/textInputCustom';
import ButtonCustom from '../sharedComponent/buttonCustom';
import {Constants, Error} from "../../constants";
import {UserService} from "../../services/api/userService";
import PropTypes from "prop-types";
import {Utils} from "../../utils/utils";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            error: null,
        }
    }

    getEmail = (text) => {
        this.setState({email: text})
    }

    getPassword = (text) => {
        this.setState({password: text})
    }

    _onPressSignIn = () => {
        if (!this.state.email || !this.state.password) {
            this.setState({error: Error.EMAIL_PASSWORD_NULL})
        } else if (!Utils.validateEmail(this.state.email)) {
            this.setState({error: Error.INVALID_EMAIL})
        } else {
            const params = {
                "email": this.state.email,
                "password": this.state.password
            }

            UserService.login(params, (success) => {
                if (success.success === "true") {
                    this.props.onPress.navigate("Drawer");
                    // Lưu Token vô: success.token
                } else {
                    this.setState({error: Error.EMAIL_PASSWORD_WRONG})
                }
            }, (failed) => {
                console.log(failed)
            });
        }
    }

    render() {
        {
            this.state.error ? Alert.alert('Warning', this.state.error, [{
                text: 'OK',
                onPress: () => this.setState({error: null})
            },]) : null
        }
        return (
            <View style={{flex: 1}}>
                {/*em có thể bỏ cái modal gì đó vô đây thay cho cái alert phía trên*/}
                <View style={styles.input_form}>
                    <TextInputCustom getEmail={this.getEmail.bind(this)} input_type={'Email'}/>
                </View>
                <View style={styles.input_form}>
                    <TextInputCustom getPassword={this.getPassword.bind(this)} input_type={'Password'}/>
                </View>

                <View style={styles.btn_Sign_In}>
                    <ButtonCustom onPress={this._onPressSignIn} title={'SIGN IN'}/>
                </View>
                <View style={styles.social_container}>
                    <Image style={styles.btn_Social} source={require('../../resources/icon/facebook.png')}/>
                    <Image style={styles.btn_Social} source={require('../../resources/icon/twitter.png')}/>
                    <Image style={styles.btn_Social} source={require('../../resources/icon/google-plus.png')}/>
                    <Image style={styles.btn_Social} source={require('../../resources/icon/line.png')}/>
                </View>
                <View style={styles.btn_Register}>
                    <Text style={{fontSize: 14, fontFamily: 'System', color: 'white'}}
                          onPress={() => this.props.onPress.navigate('Register')}>Create New Account</Text>
                </View>
            </View>
        );
    }
}

LoginForm.propTypes = {
    onPress: PropTypes.func
}

const styles = StyleSheet.create({
    input_form: {
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
    },
    btn_Sign_In: {
        height: 40,
        margin: 10,
        marginTop: 20
    },
    social_container: {
        margin: Constants.SIZE_WINDOW.height / 36,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_Social: {
        width: 40,
        height: 40,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn_Register: {
        marginBottom: 5,
        alignItems: 'center'
    },
});
