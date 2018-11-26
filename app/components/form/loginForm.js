import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, ImageBackground, ScrollView} from 'react-native';
import DarkTextInput from '../sharedComponent/darkTextInput';
import ButtonCustom from '../sharedComponent/buttonCustom';
import RF from 'react-native-responsive-fontsize';

export default class LoginForm extends Component {
    render() {
        const {onPress} = this.props;
        return (
            <View style={{flex: 1}}>
                <View style={styles.input_form}>
                    <DarkTextInput input_type={'User name'}/>
                </View>
                <View style={styles.input_form}>
                    <DarkTextInput input_type={'Password'}/>
                </View>

                <View style={styles.btn_Sign_In}>
                    <ButtonCustom onPress={onPress} title={'SIGN IN'}/>
                </View>
                {/*<View style={styles.btn_Social}>*/}
                    {/*<ButtonCustom title={'or Login with Socials'}/>*/}
                {/*</View>*/}
                <View style={styles.btn_Register}>
                    <Text style={{fontSize: RF(2.7), fontFamily: 'System', color: 'white'}}
                          onPress={() => this.props.navigation.navigate('Register')}>Create Account</Text>
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
        height: 50,
        margin: 10,
        marginTop: 30
    },
    btn_Social: {
        height: 50,
        margin: 10,
    },
    btn_Register: {
        marginBottom: 5,
        alignItems: 'center'
    },
});
