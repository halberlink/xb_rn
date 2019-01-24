import { combineReducers } from 'redux';
import Index from './Index';
import Home from './Home';


const rootReducer = combineReducers({
    Index,
    Home
});

export default rootReducer;