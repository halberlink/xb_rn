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
import storage from './api/Storage'

const store =configureStore;

global.storage = storage;
global.user = {

    loginState:'',
    userData:''

};
storage.load({
    key: 'loginState',
    id:1000
}).then(ret => {
    global.user.loginState = true;
    global.user.userData = ret;
}).catch(err => {
    storage.save({
        key: 'loginState',
        data:{
            loginState:false
        }
    });
    global.user.loginState = false;
    global.user.userData = '';
})
export default class Root extends Component {

    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

