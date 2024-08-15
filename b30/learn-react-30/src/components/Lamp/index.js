import {useState} from "react";
function Lamp() {
      const [status, setState] = useState(false);
      const handleClick = () => {
            setState(!status);
      }
      return (
            <>
                  <button onClick={handleClick}>Click</button>
                  <div>
                        {status ? "Đèn đang bật" : "Đèn đang tắt"}

                  </div>
            </>
      )
}
export default Lamp;