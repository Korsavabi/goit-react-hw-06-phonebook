import { combineReducers } from 'redux';
import filter from './filter';
import todoList from './todoList';

const rootReducer = combineReducers({
    filter: filter,
    todoList: todoList,
})

export default rootReducer;