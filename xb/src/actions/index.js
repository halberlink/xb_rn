

import * as types from '../constants/ActionTypes';

export function main(
    name,
    index
) {
    return {
        type:types.CHANGE_MAIN,
        name,
        index
    }
}






