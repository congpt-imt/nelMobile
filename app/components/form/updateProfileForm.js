import React, { Component } from 'react';
import { Alert, StyleSheet, View, CheckBox } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TextInputCustom from '../sharedComponent/textInputCustom';
import ButtonCustom from '../sharedComponent/buttonCustom';
import AvatarBox from "../sharedComponent/avatarBox";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Constants, Error } from "../../constants";
import { UserService } from "../../services/api/userService";
import PropTypes from "prop-types";
import { Utils } from "../../utils/utils";

export default class UpdateProfileForm extends Component {
    constructor() {
        super();

        this.state = {
            birthday: null,
            address: null,
            phone: null,
            email: null,
            work: null,
            education: null
        }
    }
    //#region setState
    getBirthday = (text) => {
        this.setState({ birthday: text })
    }

    getAddress = (text) => {
        this.setState({ address: text })
    }

    getPhone = (text) => {
        this.setState({ phone: text })
    }

    getEmail = (text) => {
        this.setState({ email: text })
    }

    getWork = (text) => {
        this.setState({ work: text })
    }

    getEducation = (text) => {
        this.setState({ education: text })
    }
    //#endregion

    _onPressUpdate = () => {
        if (!this.state.birthday || !this.state.address || !this.state.phone || !this.state.email) {
            this.setState({ error: Error.EMAIL_PASSWORD_NULL })
        } else if (!Utils.validateEmail(this.state.email)) {
            this.setState({ error: Error.INVALID_EMAIL })
        } else {
            const params = {
                "birthday": this.state.birthday,
                "address": this.state.address,
                "phone": this.state.phone,
                "email": this.state.email,
                "work": this.state.work,
                "education": this.state.education,
            }

            UserService.u(params, (success) => {
                if (success.success === "true") {
                    //this.props.onPress.navigate("Drawer");
                    // Lưu Token vô: success.token
                } else {
                    this.setState({ error: Error.EMAIL_PASSWORD_WRONG })
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
                onPress: () => this.setState({ error: null })
            },]) : null
        }
        return (
            <KeyboardAwareScrollView style={{flex: 1, flexDirection: 'column'}}>
                <View style={styles.header}>
                    <AvatarBox
                        image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetduIy4qTlGphdeh67IHF7hJgSq3ifDRf_pURPlMpbbXhbxk6'}
                        sizeAvatar={80}
                        sizeIsOnline={15}
                        marginTop={0} />
                </View>
                <View style={styles.input_form}>
                    <FontAwesome5 name={'birthday-cake'} size={12} color={'#fff'} />
                    <TextInputCustom getBirthday={this.getBirthday.bind(this)} input_type={'Birthday'} />
                </View>

                <View style={styles.input_form}>
                    <FontAwesome5 name={'home'} size={12} color={'#fff'} />
                    <TextInputCustom getAddress={this.getAddress.bind(this)} input_type={'Address'} />
                </View>

                <View style={styles.input_form}>
                    <FontAwesome5 name={'phone'} size={12} color={'#fff'} />
                    <TextInputCustom getPhone={this.getPhone.bind(this)} input_type={'Phone'} />
                </View>

                <View style={styles.input_form}>
                    <FontAwesome5 name={'envelope'} size={12} color={'#fff'} />
                    <TextInputCustom getEmail={this.getEmail.bind(this)} input_type={'Email'} />
                </View>

                <View style={styles.input_form}>
                    <FontAwesome5 name={'briefcase'} size={12} color={'#fff'} />
                    <TextInputCustom getWork={this.getWork.bind(this)} input_type={'Work'} />
                </View>

                <View style={styles.input_form}>
                    <FontAwesome5 name={'graduation-cap'} size={12} color={'#fff'} />
                    <TextInputCustom getEducation={this.getEducation.bind(this)} input_type={'Education'} />
                </View>

                <View style={styles.btn_Update}>
                    <ButtonCustom onPress={this._onPressUpdate} title={'UPDATE'} />
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

UpdateProfileForm.propTypes = {
    onPress: PropTypes.func
}

const styles = StyleSheet.create({
    header: {
        marginTop: 10,
        alignItems: 'center',
    },
    input_form: {
        height: 50,
        paddingLeft: 10,
        paddingRight: 10,
        margin: 10,
    },
    btn_Update: {
        flex: 1,
        height: 40,
        justifyContent:'flex-end',
    },
});
