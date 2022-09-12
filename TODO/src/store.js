import {createStore, combineReducers} from 'redux';
import todos from './redux/ reducers/todos';

export const store = createStore(todos);
