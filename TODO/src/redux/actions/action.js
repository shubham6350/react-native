// import {v4 as uuidv4} from 'uuid';
let nextTodoId = 0;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  payload: text,
});

export const completeTodo = id => ({
  type: 'COMPLETE_TODO',
  payload: id,
});

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  payload: id,
});

export const editTodo = value => ({
  type: 'EDIT_TODO',
  payload: value,
});
export const activeUser = id => ({
  type: 'ACTIVE_TODOS',
  payload: id,
});
export const completed = id => ({
  type: 'completed_TODOS',
  payload: id,
});
export const all = id => ({
  type: 'All_TODOS',
  payload: id,
});
export const DeleteAll = id => ({
  type: 'DELETE_All_TODOS',
  payload: id,
});
