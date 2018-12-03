import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TextInputCustom from '../sharedComponent/textInputCustom';
import ButtonCustom from '../sharedComponent/buttonCustom';

export default class RegisterForm extends Component {
    constructor() {
        super();

        this.state = {
            isChecked: false
        }
    }

    render() {
        const {onPressSignUp} = this.props;
        return (
            <View style={{flex: 1}}>
                <View style={styles.input_form}>
                    <TextInputCustom input_type={'User name'}/>
                </View>
                <View style={styles.input_form}>
                    <TextInputCustom input_type={'Email'}/>
                </View>
                <View style={styles.input_form}>
                    <TextInputCustom input_type={'Password'}/>
                </View>
                <View style={styles.input_form}>
                    <TextInputCustom input_type={'Confirm Password'}/>
                </View>

                <View style={styles.Rule}>
                    <Text style={{fontSize: 14, textAlign: 'center', color: 'gray'}}>By tapping "Sign Up" you agree to the</Text>
                    <Text style={{fontSize: 14, textAlign: 'center', fontStyle: 'italic', color: '#003466'}}>terms & conditions</Text>
                </View>

                <View style={styles.btn_Register}>
                    <ButtonCustom onPress={onPressSignUp} title={'SIGN UP'}/>
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
    btn_Register: {
        height: 40,
        margin: 10,
        marginTop: 20
    },
    Rule: {
        margin: 15,
        alignItems: 'center'
    },
});
