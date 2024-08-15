import {useEffect} from "react";

function UseEffect(){
      useEffect(() => {
            let listItem = document.querySelectorAll("ul li");
            console.log(listItem);
      })
      return (
            <>
               <ul>
                  <li>Thanh Bình</li>
                  <li>Bình đây nè</li>
                  <li>Bình học React</li>
               </ul>
            </>
      )
}
export default UseEffect;