import * as types from '../constants/ActionTypes'

const initSate = {
    loginState:0,
    index:0
};

export default function LoginReducer (state = initSate,action){

    switch (action.type) {

        case types.ERROR_LOGIN_ACTION:
            return Object.assign({},state,{
                loginState:-1,
                text:'登录失败'
            });

            break;
        case types.PERFORM_LOGIN_ACTION:
            return Object.assign({},state,{
                loginState:1,
                text:'登录中'
            });

            break;
        case types.RECEIVE_LOGIN_ACTION:
            console.log(22222222)
            return Object.assign({},state,{
                loginState:2,
                text:'登录成功'
            });

            break;
        default :
            return state;
    }



}