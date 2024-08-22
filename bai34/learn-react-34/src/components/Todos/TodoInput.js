import { useDispatch } from "react-redux";
import { createTodo } from "../../actions/todos";
import { useRef } from "react";

function TodoInput(){
      const dispatch = useDispatch();
      const inputRef = useRef();
      const handleSubmit = (e) => {
            e.preventDefault();
            if (e.target.elements.content.value !== ""){
                  dispatch(createTodo(e.target.elements.content.value));
                  inputRef.current.value = "";
                  inputRef.current.focus();
            }
      }
      return (
            <>
            <div className="todo_input">
                  <form onSubmit={handleSubmit}>
                        <input ref={inputRef} name="content" placeholder="Nội dung..."/>
                        <button type="submit">+</button>
                  </form>
            </div>
            </>
      )
}
export default TodoInput;     