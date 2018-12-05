import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextInputCustom from '../sharedComponent/textInputCustom';
import ButtonCustom from '../sharedComponent/buttonCustom';
import {UserService} from "../../services/api/userService";
import {Constants} from "../../constants";
import PropTypes from "prop-types";

export default class RegisterForm extends Component {
    constructor() {
        super();

        this.state = {
            user_name: '',
            email: '',
            password: '',
            confirm_password:'',
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
        if (this.state.user_name.length == 0){
            var error_code = 1;
            alert("Please enter username")
        }else if (this.state.email.length == 0){
            var error_code = 1;
            alert("Please enter email")
        }else if (this.state.password.length == 0){
            var error_code = 1;
            alert("Please enter password")
        }else if (this.state.confirm_password.length == 0){
            var error_code = 1;
            alert("Please confirm password")
        }else if (this.state.confirm_password != this.state.password){
            var error_code = 1;
            alert("Confirm password is not match")
        }
        else{
            const params = {
                "email": this.state.email,
                "password": this.state.password,
                "username": this.state.user_name
            }

            UserService.registerUser(params, (success) => {
                if (success == "true"){
                    this.props.onPressSignUp.navigate("Drawer");
                }else{
                    alert("Email already exists");
                }
            });
        } 
    }

    render() {
        const {onPressSignUp, goBack} = this.props;
        return (
            <View style={{flex: 1}}>
                <View style={styles.input_form}>
                    <TextInputCustom getUserName = {this.getUserName.bind(this)} input_type={'User name'}/>
                </View>
                <View style={styles.input_form}>
                    <TextInputCustom getEmail = {this.getEmail.bind(this)} input_type={'Email'}/>
                </View>
                <View style={styles.input_form}>
                    <TextInputCustom getPassword = {this.getPassword.bind(this)} input_type={'Password'}/>
                </View>
                <View style={styles.input_form}>
                    <TextInputCustom getConfirmPassword = {this.getConfirmPassword.bind(this)} input_type={'Confirm Password'}/>
                </View>

                <View style={styles.Rule}>
                    <Text style={{fontSize: 14, textAlign: 'center', color: 'gray'}}>By tapping "Sign Up" you agree to the</Text>
                    <Text style={{fontSize: 14, textAlign: 'center', fontStyle: 'italic', color: '#003466'}}>terms & conditions</Text>
                </View>

                <View style={styles.btn_Register}>
                    <ButtonCustom onPress={this._onPressSignUp} title={'SIGN UP'} margin={5} width={Constants.SIZE_WINDOW.width/2 -20}/>
                    <ButtonCustom onPress={goBack} title={'CANCEL'} margin={5} width={Constants.SIZE_WINDOW.width/2 -20}/>
                </View>
                <Text>{this.state.user_name}</Text>
            </View>
        );
    }
}

RegisterForm.propTypes = {
    onPressSignUp: PropTypes.func
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
