import React, {Component} from 'react';
import {TextInput} from 'react-native';
import PropTypes from "prop-types";

export default class DarkTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_type: this.props.input_type,
            borderBottomWidth: 1,
            text: '',
        };
    }

    _onFocus = () => {
        this.setState({borderBottomWidth: 3})
    }

    _onBlur = () => {
        this.setState({borderBottomWidth: 1})
    }

    render() {

        if (this.state.input_type === 'Password') {
            return (
                <TextInput
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
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
                />)
        }

        return (
            <TextInput

                value={this.state.text}
                onChangeText={(text) => this.setState({text})}
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

DarkTextInput.propTypes = {
    input_type: PropTypes.string
}
