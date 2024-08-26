import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartMini(){
      const cart = useSelector(cart => cart.cartReducer);
      const total = cart.reduce((sum,item) => {
            return sum + item.quantity;
      },0)
      return (
            <>
               <Link to="/cart">Giỏ hàng ({total})</Link>
            </>
      )
}
export default CartMini;