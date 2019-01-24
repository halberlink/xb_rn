/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import App from './containers/root';
import { Provider ,connect } from 'react-redux';
import configureStore from './store/configureStore';


const store =configureStore;


export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

