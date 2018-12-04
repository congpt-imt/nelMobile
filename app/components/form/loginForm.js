import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import TextInputCustom from '../sharedComponent/textInputCustom';
import ButtonCustom from '../sharedComponent/buttonCustom';
import {Constants} from "../../constants";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            password: ''
        }
    }
    getUserName = (text) => {
        // console.warn(text)
        this.setState({user_name: text})
        // console.warn(this.state.user_name)
    }

    getPassword = (text) => {
        // console.warn(text)
        this.setState({password: text})
        // console.warn(this.state.password)
    }

    render() {
        const {onPressSignIn, onPressRegister} = this.props;
        return (
            <View style={{flex: 1}}>
                <View style={styles.input_form}>
                    <TextInputCustom getUserName={this.getUserName.bind(this)} input_type={'User name'}/>
                </View>
                <View style={styles.input_form}>
                    <TextInputCustom getPassword={this.getPassword.bind(this)} input_type={'Password'}/>
                </View>

                <View style={styles.btn_Sign_In}>
                    <ButtonCustom onPress={onPressSignIn} title={'SIGN IN'}/>
                </View>
                <View style={styles.social_container}>
                    <Image style={styles.btn_Social} source={require('../../resources/icon/facebook.png')}/>
                    <Image style={styles.btn_Social} source={require('../../resources/icon/twitter.png')}/>
                    <Image style={styles.btn_Social} source={require('../../resources/icon/google-plus.png')}/>
                    <Image style={styles.btn_Social} source={require('../../resources/icon/line.png')}/>
                </View>
                <View style={styles.btn_Register}>
                    <Text style={{fontSize: 14, fontFamily: 'System', color: 'white'}}
                          onPress={onPressRegister}>Create New Account</Text>
                </View>
            </View>
        );
    }
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
