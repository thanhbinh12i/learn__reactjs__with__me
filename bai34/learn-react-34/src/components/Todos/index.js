import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./todos.css";

function Todos() {
      return (
            <>
                  <div className="todo">
                        <TodoInput />
                        <TodoList />
                  </div>
            </>
      )
}
export default Todos;