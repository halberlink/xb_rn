
import {createStore , applyMiddleware} from "redux";
import createSagaMiddleware , {END} from "redux-saga";
import rootReducer from '../reducers/Root';
const { logger } = require('redux-logger');

//middleware Array
const middlewares = [];

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

// dispatch state log
const _DEV_ = true;

//add saga to middlewares
middlewares.push(sagaMiddleware);


/*global _DEV_*/

if(_DEV_) {
    middlewares.push(logger);
}

const store = createStore(rootReducer)

export default store;
//暂不添加 sagas 中间件
//mount middleware on the store

// const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
//
// export default function configureStore(initialState) {
//     const store = createStoreWithMiddleware(rootReducer, initialState);
//     // install saga run
//     store.runSaga = sagaMiddleware.run;
//     store.close = () => store.dispatch(END);
//
//     return store;
// }




























