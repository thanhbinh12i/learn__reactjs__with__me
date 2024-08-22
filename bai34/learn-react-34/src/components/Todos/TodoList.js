import { useDispatch, useSelector } from "react-redux";
import { completedTodo, deleteTodo } from "../../actions/todos";

function TodoList() {
      const todoList = useSelector(state => state.todosReducer);
      const dispatch = useDispatch();
      const handleCompleted = (id) => {
            dispatch(completedTodo(id));
      }
      const handleDelete = (id) => {
            dispatch(deleteTodo(id));
      }
      return (
            <>
                  {
                        todoList && (
                              <ul className="todo__List">
                                    {
                                          todoList.map(item => (
                                                <li className="todo__item" key={item.id}>
                                                      <span className={"todo__content " + (item.completed && "todo__content--completed")}>{item.content}</span>
                                                      {item.completed ? (
                                                            <></>
                                                      ) : (
                                                            <button onClick={() => handleCompleted(item.id)}>V</button>
                                                      ) }
                                                      <button onClick={() => handleDelete(item.id)}>X</button>
                                                </li>
                                          ))
                                    }
                              </ul>
                        )
                  }

            </>
      )
}
export default TodoList;     