

import * as types from '../constants/ActionTypes';


//登陆失败
export function errorLogin() {
    return {
        type: types.ERROR_LOGIN_ACTION,	//自己定义的常量，已区分不同action
    }
}
//开始登陆
export function performLogin() {
    return {
        type: types.PERFORM_LOGIN_ACTION,
    }
}
//登陆成功
export function successLogin(result) {
    return {
        type: types.RECEIVE_LOGIN_ACTION,
        data: result.data
    }
}