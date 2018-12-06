import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import TextInputCustom from '../sharedComponent/textInputCustom';
import ButtonCustom from '../sharedComponent/buttonCustom';
import {UserService} from "../../services/api/userService";
import {Constants, Error} from "../../constants";
import PropTypes from "prop-types";
import {Utils} from "../../utils/utils";

export default class RegisterForm extends Component {
    constructor() {
        super();

        this.state = {
            user_name: null,
            email: null,
            password: null,
            confirm_password: null,
            error: null
        }
    }

    getUserName = (text) => {
        this.setState({user_name: text})
    }

    getEmail = (text) => {
        this.setState({email: text})
    }

    getPassword = (text) => {
        this.setState({password: text})
    }

    getConfirmPassword = (text) => {
        this.setState({confirm_password: text})
    }

    _onPressSignUp = () => {
        if (!this.state.user_name) {
            this.setState({error: Error.USERNAME_NULL});
        } else if (!this.state.email) {
            this.setState({error: Error.EMAIL_NULL});
        } else if (!Utils.validateEmail(this.state.email)) {
            this.setState({error: Error.INVALID_EMAIL});
        } else if (!this.state.password) {
            this.setState({error: Error.PASSWORD_NULL});
        } else if (!this.state.confirm_password) {
            this.setState({error: Error.PASSWORD_CONFIRM_NULL});
        } else if (this.state.confirm_password !== this.state.password) {
            this.setState({error: Error.PASSWORD_NOT_MATCH});
        } else {
            const params = {
                "email": this.state.email,
                "password": this.state.password,
                "username": this.state.user_name
            }

            UserService.register(params, (success) => {
                if (success.success) {
                    this.props.onPressSignUp.navigate("Drawer");
                } else {
                    this.setState({error: Error.EMAIL_EXISTS});
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
                    <TextInputCustom getUserName={this.getUserName.bind(this)} input_type={'User name'}/>
                </View>
                <View style={styles.input_form}>
                    <TextInputCustom getEmail={this.getEmail.bind(this)} input_type={'Email'}/>
                </View>
                <View style={styles.input_form}>
                    <TextInputCustom getPassword={this.getPassword.bind(this)} input_type={'Password'}/>
                </View>
                <View style={styles.input_form}>
                    <TextInputCustom getConfirmPassword={this.getConfirmPassword.bind(this)}
                                     input_type={'Confirm Password'}/>
                </View>

                <View style={styles.Rule}>
                    <Text style={{fontSize: 14, textAlign: 'center', color: 'gray'}}>By tapping "Sign Up" you agree to
                        the</Text>
                    <Text style={{fontSize: 14, textAlign: 'center', fontStyle: 'italic', color: '#003466'}}>terms &
                        conditions</Text>
                </View>

                <View style={styles.btn_Register}>
                    <ButtonCustom onPress={this._onPressSignUp} title={'SIGN UP'} margin={5}
                                  width={Constants.SIZE_WINDOW.width / 2 - 20}/>
                    <ButtonCustom onPress={this.props.goBack} title={'CANCEL'} margin={5}
                                  width={Constants.SIZE_WINDOW.width / 2 - 20}/>
                </View>
                <Text>{this.state.user_name}</Text>
            </View>
        );
    }
}

RegisterForm.propTypes = {
    onPressSignUp: PropTypes.func,
    goBack: PropTypes.func
}

const styles = StyleSheet.create({
    input_form: {
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 10,
    },
    btn_Register: {
        flexDirection: 'row',
        // height: 40,
        margin: 10,
        marginTop: 15
    },
    Rule: {
        margin: 15,
        alignItems: 'center'
    },
});
