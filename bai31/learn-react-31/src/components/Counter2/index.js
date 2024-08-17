import { useMemo, useState} from "react";
import { pow } from "../../helpers/pow";


function Counter2(){
      const [counter, setCounter] = useState(0);

      const handleCounter = () => {
            setCounter(counter => counter + 1);  
      }
      const result =    useMemo(() => {
            pow()
      }, []);

      return (
            <>
            <div>Kết quả: {counter}</div>
            <button onClick={handleCounter}>Counter</button>
            <div>{result}</div>
            </>
      )
}
export default Counter2;