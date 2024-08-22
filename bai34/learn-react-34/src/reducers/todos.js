const init = [
      {
            id: 1,
            content: "Learn react",
            completed: true
      },
      {
            id: 2,
            content: "Learn asp.net",
            completed: false
      },
      {
            id: 3,
            content: "Learn ielts",
            completed: false
      }
];

const todosReducer = (state = init, action) => {
      let newState = [...state];
      switch (action.type) {
            case "CREATE_TODO":
                  newState = [
                        ...newState,
                        {
                              id: Date.now(),
                              content: action.content,
                              completed: false
                        }
                  ]
                  return newState;
            case "COMPLETED_TODO":
                  const index = newState.findIndex(item => {
                        return item.id === action.id;
                  })
                  newState[index].completed = true;
                  return newState; 
            case "DELETE_TODO":
                  newState = newState.filter(item => {
                        return item.id !== action.id;
                  })  
                  return newState;        
            default:
                  return state;
      }
}

export default todosReducer;