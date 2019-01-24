

import * as types from '../constants/ActionTypes';

export function homeInit(
    name,
    index
) {
    return {
        type:types.CHANGE_HOME,
        name,
        index
    }
}


export function homeOthers(
    name,
    index
) {
    return {
        type:types.CHANGE_HOME,
        name,
        index
    }
}



