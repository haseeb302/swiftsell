import { auth } from './auth';
import { items } from './ads';
import { combineReducers } from 'redux';

export const reducers = combineReducers({
    items: items,
    auth: auth,
})