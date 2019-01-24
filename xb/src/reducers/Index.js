import * as types from '../constants/ActionTypes'

const initSate = {
    name:"郝博"
};

export default function index (state = initSate,action){

    switch (action.type) {

        case types.CHANGE_HOME:

            return Object.assign({},state,{
                name:"好伯伯main"
            });

            break;

        default :
            return state;
    }



}