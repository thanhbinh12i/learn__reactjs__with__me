import {useRef ,useState} from "react";

function UseRef1(){
      const [inputValue, setInputValue] = useState("");
      const counterRef = useRef(0);
      const handleChange = (e) => {
            setInputValue(e.target.value);
            counterRef.current = counterRef.current + 1;
      }
      console.log(counterRef.current);

      
      return (
            <>
            <input value={inputValue} onChange={handleChange}/>
            </>
      )
}
export default UseRef1;