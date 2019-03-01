

import * as types from '../constants/ActionTypes';
import http from '../api/Request';

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

    return dispatch=>{

        http.get('https://api.douban.com/v2/book/1220562',{
            username:'haobo',
            password:123
        },function(res){
            if(res.binding == "平装"){
                console.log("成功")
                console.log(storage)
                storage.save({
                    key: 'loginState',
                    id:1000,
                    data:{
                        loginState:true
                    },
                    expires: 1000 * 3600 * 2
                });


                dispatch({
                    type: types.RECEIVE_LOGIN_ACTION,
                    data: result.data
                })
            }
        },function(){
            that.props.errorLogin();
        })

    }


}