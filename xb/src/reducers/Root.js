import { combineReducers } from 'redux';
import Index from './Index';
import Home from './Home';
import Login from './Login';


const rootReducer = combineReducers({
    Index,
    Home,
    Login
});

export default rootReducer;