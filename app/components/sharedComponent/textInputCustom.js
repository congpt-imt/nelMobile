import React, {Component} from 'react';
import {TextInput} from 'react-native';
import PropTypes from "prop-types";

export default class TextInputCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_type: this.props.input_type,
            borderBottomWidth: 0.3,
            text: null,
        };
    }

    _onFocus = () => {
        this.setState({borderBottomWidth: 1.5})
    }

    _onBlur = () => {
        this.setState({borderBottomWidth: 0.3})
    }

    _passText = (text) => {
        switch (this.state.input_type) {
            case 'User name':
                return this.props.getUserName(text);
            case 'Email':
                return this.props.getEmail(text);
            case 'Password':
                return this.props.getPassword(text);
            case 'Confirm Password':
                return this.props.getConfirmPassword(text);
        }
    }

    render() {
        let isPassword = this.state.input_type === 'Password' || this.state.input_type === 'Confirm Password' ? true : false;
        let keyboardType = this.state.input_type === 'Email' ? 'email-address' : 'default';

        return (
            <TextInput
                value={this.state.text}
                onChangeText={(text) => {
                    this._passText(text)
                    this.setState({text})
                }}
                placeholder={this.state.input_type}
                placeholderTextColor={'gray'}
                onFocus={this._onFocus.bind(this)}
                onBlur={this._onBlur.bind(this)}
                secureTextEntry={isPassword}
                keyboardType={keyboardType}
                style={{
                    borderBottomWidth: this.state.borderBottomWidth,
                    borderBottomColor: '#FFFFFF',
                    color: '#FFFFFF',
                    fontSize: 15,
                }}
            />);
    }
}

TextInputCustom.propTypes = {
    input_type: PropTypes.string,
    getUserName: PropTypes.func,
    getPassword: PropTypes.func,
    getConfirmPassword: PropTypes.func,
    getEmail: PropTypes.func,
}
