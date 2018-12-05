import React, {Component} from 'react';
import {TextInput} from 'react-native';
import PropTypes from "prop-types";

export default class TextInputCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_type: this.props.input_type,
            borderBottomWidth: 0.3,
            text: '',
        };
    }

    _onFocus = () => {
        this.setState({borderBottomWidth: 1.5})
    }

    _onBlur = () => {
        this.setState({borderBottomWidth: 0.3})
    }

    render() {
        const {getUserName, getPassword, getConfirmPassword, getEmail} = this.props

        if (this.state.input_type === 'Password') {
            return (
                <TextInput
                    value={this.state.text}
                    onChangeText={(text) => {
                        getPassword(text)
                        this.setState({text})}
                    }
                    placeholder={this.state.input_type}
                    placeholderTextColor={'gray'}
                    onFocus={this._onFocus.bind(this)}
                    onBlur={this._onBlur.bind(this)}
                    secureTextEntry={true}
                    style={{
                        borderBottomWidth: this.state.borderBottomWidth,
                        borderBottomColor: '#FFFFFF',
                        color: '#FFFFFF',
                        fontSize: 15,
                    }}
                />)
        }else if (this.state.input_type === 'Confirm Password') {
            return (
                <TextInput
                    value={this.state.text}
                    onChangeText={(text) => {
                        getConfirmPassword(text)
                        this.setState({text})}
                    }
                    placeholder={this.state.input_type}
                    placeholderTextColor={'gray'}
                    onFocus={this._onFocus.bind(this)}
                    onBlur={this._onBlur.bind(this)}
                    secureTextEntry={true}
                    style={{
                        borderBottomWidth: this.state.borderBottomWidth,
                        borderBottomColor: '#FFFFFF',
                        color: '#FFFFFF',
                        fontSize: 15,
                    }}
                />)
        }else if (this.state.input_type === 'Email') {
            return (
                <TextInput
                    value={this.state.text}
                    onChangeText={(text) => {
                        getEmail(text)
                        this.setState({text})}
                    }
                    placeholder={this.state.input_type}
                    placeholderTextColor={'gray'}
                    onFocus={this._onFocus.bind(this)}
                    onBlur={this._onBlur.bind(this)}
                    keyboardType='email-address'
                    style={{
                        borderBottomWidth: this.state.borderBottomWidth,
                        borderBottomColor: '#FFFFFF',
                        color: '#FFFFFF',
                        fontSize: 15,
                    }}
                />)
        }else if (this.state.input_type === 'User name') {
            return (
                <TextInput
                    value={this.state.text}
                    onChangeText={(text) => {
                        getUserName(text)
                        this.setState({text})}}
                    placeholder={this.state.input_type}
                    placeholderTextColor={'gray'}
                    onFocus={this._onFocus.bind(this)}
                    onBlur={this._onBlur.bind(this)}
                    style={{
                        borderBottomWidth: this.state.borderBottomWidth,
                        borderBottomColor: '#FFFFFF',
                        color: '#FFFFFF',
                        fontSize: 15,
                    }}
                />
            );
        }
    }
}

TextInputCustom.propTypes = {
    input_type: PropTypes.string
}
