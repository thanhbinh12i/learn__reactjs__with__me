import {useRef ,useState} from "react";

function UseRef(){
      const [counter, setCounter] = useState();
      const counterRef = useRef();
      const counterObj = {
            current: 0
      }
      const handleClick = () => {
            setCounter(counter + 1);
            counterRef.current = counterRef.current + 1;
            counterObj.current = counterObj.current + 1;
      }
      return (
            <>
            <button onClick={handleClick}>Click</button>
            </>
      )
}
export default UseRef;