import { useSelector } from "react-redux";

function Counter2(){
      const counter2 = useSelector(state => state.counterReducer);
      return (
            <>
            <h2>Counter2: {counter2}</h2>
            </>
      )
}
export default Counter2;