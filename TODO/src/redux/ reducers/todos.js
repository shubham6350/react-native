// let temp = [];
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.payload,
          completed: false,
        },
      ];
    case 'COMPLETE_TODO':
      return state.map(todo =>
        todo.id === action.payload
          ? {...todo, completed: !todo.completed}
          : todo,
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.payload.id
          ? {...todo, text: action.payload.text}
          : todo,
      );
    case 'ACTIVE_TODOS':
      var temp = state;
      const newtemp = temp.filter(todo => !todo.completed);
      return newtemp;
    default:
      return state;
    case 'completed_TODOS':
      state = state.filter(todo => todo.completed);
    case 'All_TODOS':
      return state;
    case 'DELETE_All_TODOS':
      return (state = []);
  }
};

export default todos;
