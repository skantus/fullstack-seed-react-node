import { combineReducers } from 'redux';
import { counterReducer, sessionReducer } from './reducer';

export default combineReducers({ counterReducer, session: sessionReducer });
