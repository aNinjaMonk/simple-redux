
const INITIAL_STATE = [{
  id: 1,
  text: 'Todo 1',
  completed: false
},
{
  id: 2,
  text: 'Hello this is me here',
  completed: false
},
{
  id: 3,
  text: 'Hi this is me',
  completed: true
}];

const todos = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    /*case 'DELETE_TODO':
    return []
    case 'DONE_TODO':
    return []*/
    default:
      return state
  }
}

export default todos;
