import { useEffect, useReducer, useRef } from "react";
const init = [
      {
            id: 1,
            content: "Thứ 2 học Reactjs"
      },
      {
            id: 2,
            content: "Thứ 3 học ASP.NET Core MVC"
      },
      {
            id: 3,
            content: "Thứ 4 học IELTS"
      }
];

const reducer = (state, action) => {
      switch (action.type) {
            case "CREATE":
                  return [
                        ...state,
                        {
                              id: Date.now(),
                              content: action.value
                        }
                  ]
                  case "DELETE":
                        const newState = state.filter(todo => todo.id !== action.id);
                        return newState;  
            default:
                  return state;
      }

}

function Todos() {
      const [todos, dispatch] = useReducer(reducer, init);
      const inputRef = useRef();

      useEffect(() => {
            inputRef.current.focus();
      }, [])

      const handleSubmit = (e) => {
            e.preventDefault();
            const value = e.target.elements.inputTodo.value;
            if (value) {
                  dispatch({
                        type: "CREATE",
                        value: value
                  })
                  inputRef.current.value = "";
            }
      }
      const handleDelete = (id) => {
            dispatch({
                  type: "DELETE",
                  id: id
            })
      }
      return (
            <>
                  <form onSubmit={handleSubmit}>
                        <input ref={inputRef} name="inputTodo" />
                        <button>Thêm</button>
                  </form>
                  {todos.length > 0 && (
                        <ul>
                              {todos.map(item => (
                                    <li key={item.id}>{item.content}
                                    <button onClick={() => handleDelete(item.id)}>Xóa</button>
                                    </li>
                                    
                              ))}
                        </ul>
                  )}
            </>
      )
}
export default Todos;