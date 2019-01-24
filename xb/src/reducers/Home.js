import * as types from '../constants/ActionTypes'

const initSate = {
    name:"none",
    index:0
};

export default function index (state = initSate,action){
    
    switch (action.type) {

        case types.CHANGE_HOME:
            return Object.assign({},state,{
                name:"好伯伯home",
                index:1
            });

            break;

        default :
            return state;
    }



}