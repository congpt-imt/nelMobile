/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Router from './app/routes/router';
// import { configureStore } from './app/store';

export default class App extends Component {
    
    render() {
        return (
            <Router/>
        );
    }
}
// const store = configureStore();
// const App = () =>
//     <Provider store={store}>
//         <Router/>
//     </Provider>
//
// export default App;
