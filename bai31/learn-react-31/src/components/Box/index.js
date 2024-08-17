import { memo } from "react";

function Box(props) {
      const { onCounter, onReset } = props;
      console.log("render box");
      const handleCounter = () => {
            onCounter();
      }

      const handleReset = () => {
            onReset();
      }
      return (
            <>

                  <button onClick={handleCounter}>Counter</button>
                  <button onClick={handleReset}>Reset</button>
            </>
      )
}
export default memo(Box);