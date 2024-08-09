import { FaAlignJustify } from "react-icons/fa";
function NavigationMenu() {
      const handleClick = () => {
            console.log("Bình đẹp trai");
      }
      const handleSubmit = (e) => {
            e.preventDefault();
            console.log(e);
      }
      return (
            <div class="box">
                  <FaAlignJustify />
                  <h1>NavigationMenu</h1>
                  <form onSubmit={handleSubmit}>
                        <button onClick={handleClick}>Click me</button>
                  </form>

            </div>
      )
}
export default NavigationMenu;