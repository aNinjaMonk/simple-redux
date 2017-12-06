
export const ADD_TODO = 'ADD_TODO'
//export const DELETE_TODO = 'DELETE_TODO'
//export const DONE_TODO = 'DONE_TODO'
let nextTodoId = 0

export function add(text){
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}
/*
export function delete(id){
  return {
    type: DELETE_TODO,
    id: id
  }
}

export function done(id){
  return {
    type: DONE_TODO,
    id: id
  }
}
*/
