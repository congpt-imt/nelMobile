/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import SplashScreen from './app/root/splashScreen';

type Props = {};
export default class App extends Component<Props> {

    componentWillMount() {
        this.state = {
            view: <SplashScreen/>
        }

        setTimeout(() => {
            console.log('Waiting!')
        }, 2000)
    };

    render() {
        return (
            this.state.view
        );
    }
}
